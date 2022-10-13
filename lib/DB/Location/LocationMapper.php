<?php

declare(strict_types=1);
/**
 * @copyright Copyright (c) 2022 Louis Chemineau <louis@chmn.me>
 *
 * @author Louis Chemineau <louis@chmn.me>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCA\Photos\DB\Location;

use Doctrine\DBAL\Exception\UniqueConstraintViolationException;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\Files\IMimeTypeLoader;
use OCP\IDBConnection;

class LocationMapper {
	public const TABLE_NAME = 'photos_locations';

	private IDBConnection $connection;
	private IMimeTypeLoader $mimeTypeLoader;

	public function __construct(
		IDBConnection $connection,
		IMimeTypeLoader $mimeTypeLoader
	) {
		$this->connection = $connection;
		$this->mimeTypeLoader = $mimeTypeLoader;
	}

	/** @return LocationInfo[] */
	public function findLocationsForUser(string $userId): array {
		$qb = $this->connection->getQueryBuilder();

		$rows = $qb->selectDistinct('location_id')
			->from(self::TABLE_NAME)
			->where($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
			->executeQuery()
			->fetchAll();

		return array_map(fn ($row) => new LocationInfo($userId, (int)$row['location_id']), $rows);
	}

	/** @return LocationFile[] */
	public function findFilesForUserAndLocation(string $userId, int $locationId) {
		$qb = $this->connection->getQueryBuilder();

		$rows = $qb->select("fileid", "name", "mimetype", "size", "mtime", "etag", "location_id")
			->from(self::TABLE_NAME, 'l')
			->leftJoin("l", "filecache", "f", $qb->expr()->eq("l.file_id", "f.fileid"))
			->where($qb->expr()->eq('user_id', $qb->createNamedParameter($userId)))
			->andWhere($qb->expr()->eq('location_id', $qb->createNamedParameter($locationId, IQueryBuilder::PARAM_INT)))
			->executeQuery();

		return array_map(
			fn ($row) => new LocationFile(
				(int)$row['fileid'],
				$row['name'],
				$this->mimeTypeLoader->getMimetypeById($row['mimetype']),
				(int)$row['size'],
				(int)$row['mtime'],
				$row['etag'],
				(int)$row['location_id']
			),
			$rows->fetchAll(),
		);
	}

	public function addLocationForFileAndUser(int $locationId, int $fileId, string $userId): void {
		try {
			$query = $this->connection->getQueryBuilder();
			$query->insert(self::TABLE_NAME)
				->values([
					"user_id" => $query->createNamedParameter($userId),
					"location_id" => $query->createNamedParameter($locationId, IQueryBuilder::PARAM_INT),
					"file_id" => $query->createNamedParameter($fileId, IQueryBuilder::PARAM_INT),
				])
				->executeStatement();
		} catch (\Exception $ex) {
			if ($ex->getPrevious() instanceof UniqueConstraintViolationException) {
				$this->updateLocationForFile($locationId, $fileId);
			}
		}
	}

	public function updateLocationForFile(int $locationId, int $fileId): void {
		$query = $this->connection->getQueryBuilder();
		$query->update(self::TABLE_NAME)
			->set("location_id", $query->createNamedParameter($locationId, IQueryBuilder::PARAM_INT))
			->where($query->expr()->eq('file_id', $query->createNamedParameter($fileId, IQueryBuilder::PARAM_INT)))
			->executeStatement();
	}

	public function removeLocationForFile(int $fileId, ?string $userId = null): void {
		$query = $this->connection->getQueryBuilder();
		$query->delete(self::TABLE_NAME)
			->where($query->expr()->eq('file_id', $query->createNamedParameter($fileId, IQueryBuilder::PARAM_INT)));

		if ($userId !== null) {
			$query->where($query->expr()->eq('user_id', $query->createNamedParameter($userId)));
		}

		$query->executeStatement();
	}

	public function removeLocationForUser(string $userId): void {
		$query = $this->connection->getQueryBuilder();
		$query->delete(self::TABLE_NAME)
			->where($query->expr()->eq('user_id', $query->createNamedParameter($userId)))
			->executeStatement();
	}
}

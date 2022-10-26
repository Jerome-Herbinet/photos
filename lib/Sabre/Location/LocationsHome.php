<?php

declare(strict_types=1);
/**
 * @copyright Copyright (c) 2022 Louis Chemineau <louis@chmn.me>
 *
 * @author Louis Chemineau <louis@chmn.me>
 *
 * @license GNU AGPL version 3 or any later version
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

namespace OCA\Photos\Sabre\Location;

use OCP\Files\IRootFolder;
use OCA\Photos\DB\Location\LocationInfo;
use OCA\Photos\DB\Location\LocationMapper;
use OCA\Photos\Service\ReverseGeoCoderService;
use Sabre\DAV\Exception\Forbidden;
use Sabre\DAV\Exception\NotFound;
use Sabre\DAV\ICollection;

class LocationsHome implements ICollection {
	protected array $principalInfo;
	protected string $userId;
	protected IRootFolder $rootFolder;
	protected ReverseGeoCoderService $reverseGeoCoderService;
	protected LocationMapper $locationMapper;

	public const NAME = 'locations';

	/**
	 * @var LocationRoot[]
	 */
	protected ?array $children = null;

	public function __construct(
		array $principalInfo,
		string $userId,
		IRootFolder $rootFolder,
		ReverseGeoCoderService $reverseGeoCoderService,
		LocationMapper $locationMapper
	) {
		$this->principalInfo = $principalInfo;
		$this->userId = $userId;
		$this->rootFolder = $rootFolder;
		$this->reverseGeoCoderService = $reverseGeoCoderService;
		$this->locationMapper = $locationMapper;
	}

	/**
	 * @return never
	 */
	public function delete() {
		throw new Forbidden();
	}

	public function getName(): string {
		return self::NAME;
	}

	/**
	 * @return never
	 */
	public function setName($name) {
		throw new Forbidden('Permission denied to rename this folder');
	}

	public function createFile($name, $data = null) {
		throw new Forbidden('Not allowed to create files in this folder');
	}

	public function createDirectory($name) {
		throw new Forbidden('Not allowed to create folder in this folder');
	}

	public function getChild($name) {
		foreach ($this->getChildren() as $child) {
			if ($child->getName() === $name) {
				return $child;
			}
		}

		throw new NotFound();
	}

	/**
	 * @return AlbumRoot[]
	 */
	public function getChildren(): array {
		if ($this->children === null) {
			$this->children = array_map(
				fn (LocationInfo $locationInfo) => new LocationRoot($this->locationMapper, $this->reverseGeoCoderService, $locationInfo, $this->rootFolder),
				$this->locationMapper->findLocationsForUser($this->userId)
			);
		}

		return $this->children;
	}

	public function childExists($name): bool {
		try {
			$this->getChild($name);
			return true;
		} catch (NotFound $e) {
			return false;
		}
	}

	public function getLastModified(): int {
		return 0;
	}
}

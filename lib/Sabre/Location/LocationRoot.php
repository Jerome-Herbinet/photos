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

use OCA\Photos\DB\Location\LocationFile;
use OCA\Photos\DB\Location\LocationInfo;
use OCA\Photos\DB\Location\LocationMapper;
use OCA\Photos\Service\ReverseGeoCoderService;
use OCP\Files\IRootFolder;
use Sabre\DAV\Exception\Forbidden;
use Sabre\DAV\Exception\NotFound;
use Sabre\DAV\ICollection;

class LocationRoot implements ICollection {
	protected LocationMapper $locationMapper;
	protected ReverseGeoCoderService $reverseGeoCoderService;
	protected LocationInfo $locationInfo;
	protected IRootFolder $rootFolder;
	/** @var LocationFile[] */
	protected ?array $children = null;

	public function __construct(
		LocationMapper $locationMapper,
		ReverseGeoCoderService $reverseGeoCoderService,
		LocationInfo $locationInfo,
		IRootFolder $rootFolder
	) {
		$this->locationMapper = $locationMapper;
		$this->reverseGeoCoderService = $reverseGeoCoderService;
		$this->locationInfo = $locationInfo;
		$this->rootFolder = $rootFolder;
	}

	/**
	 * @return never
	 */
	public function delete() {
		throw new Forbidden('Not allowed to delete a location collection');
	}

	public function getName(): string {
		return $this->reverseGeoCoderService->getLocationNameForLocationId(
			$this->locationInfo->getLocationId()
		);
	}

	/**
	 * @return never
	 */
	public function setName($name) {
		throw new Forbidden('Cannot change the location collection name');
	}

	/**
	 * @param string $name
	 * @param null|resource|string $data
	 * @return never
	 */
	public function createFile($name, $data = null) {
		throw new Forbidden('Cannot create a file in a location collection');
	}

	/**
	 * @return never
	 */
	public function createDirectory($name) {
		throw new Forbidden('Not allowed to create directories in this folder');
	}

	/**
	 * @return LocationPhoto[]
	 */
	public function getChildren(): array {
		if ($this->children === null) {
			$this->children = array_map(
				fn (LocationFile $file) => new LocationPhoto($this->locationInfo, $file, $this->rootFolder),
				$this->locationMapper->findFilesForUserAndLocation($this->locationInfo->getUserId(), $this->locationInfo->getLocationId())
			);
		}

		return $this->children;
	}

	public function getChild($name): LocationPhoto {
		foreach ($this->getChildren() as $child) {
			if ($child->getName() === $name) {
				return $child;
			}
		}

		throw new NotFound("$name not found");
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

	public function getFirstPhoto(): int {
		return $this->getChildren()[0]->getFileId();
	}

	/**
	 * @return int[]
	 */
	public function getFileIds(): array {
		return array_map(function (LocationPhoto $file) {
			return $file->getFileId();
		}, $this->getChildren());
	}

	/**
	 * @return int|null
	 */
	public function getCover() {
		$children = $this->getChildren();

		if (count($children) > 0) {
			return $children[0]->getFileId();
		} else {
			return null;
		}
	}
}

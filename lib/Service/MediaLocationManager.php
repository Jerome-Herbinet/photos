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

namespace OCA\Photos\Service;

use OC\Metadata\IMetadataManager;
use OCA\Photos\DB\Location\LocationMapper;

class MediaLocationManager {
	private IMetadataManager $metadataManager;
	private ReverseGeoCoderService $rgcService;
	private LocationMapper $locationMapper;

	public function __construct(
		IMetadataManager $metadataManager,
		ReverseGeoCoderService $rgcService,
		LocationMapper $locationMapper
	) {
		$this->metadataManager = $metadataManager;
		$this->rgcService = $rgcService;
		$this->locationMapper = $locationMapper;
	}

	public function addLocationForFileAndUser(int $fileId, string $userId) {
		$locationId = $this->getLocationIdForFile($fileId);

		if ($locationId === -1) {
			return;
		}

		$this->locationMapper->addLocationForFileAndUser($locationId, $fileId, $userId);
	}

	public function updateLocationForFile(int $fileId) {
		$locationId = $this->getLocationIdForFile($fileId);

		if ($locationId === -1) {
			return;
		}

		$this->locationMapper->updateLocationForFile($locationId, $fileId);
	}

	public function clearLocationForFile(int $fileId, ?string $userId = null): void {
		$this->locationMapper->removeLocationForFile($fileId, $userId);
	}

	public function clearLocationForUser(string $userId): void {
		$this->locationMapper->removeLocationForUser($userId);
	}

	private function getLocationIdForFile(int $fileId): int {
		$gpsMetadata = $this->metadataManager->fetchMetadataFor('gps', [$fileId])[$fileId];
		$metadata = $gpsMetadata->getMetadata();

		if (count($metadata) === 0) {
			return -1;
		}

		$latitude = $metadata['latitude'];
		$longitude = $metadata['longitude'];

		if ($latitude === null || $longitude === null) {
			return -1;
		}

		return $this->rgcService->getLocationIdForCoordinates($latitude, $longitude);
	}
}

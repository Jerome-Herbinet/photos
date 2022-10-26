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

use OC\Metadata\FileMetadata;
use OCA\Photos\DB\Location\LocationFile;
use OCA\Photos\DB\Location\LocationInfo;
use OCP\Files\IRootFolder;
use OCP\Files\Node;
use OCP\Files\File;
use OCP\Files\NotFoundException;
use Sabre\DAV\Exception\Forbidden;
use Sabre\DAV\IFile;

class LocationPhoto implements IFile {
	private LocationInfo $locationInfo;
	private LocationFile $locationFile;
	private IRootFolder $rootFolder;

	public const TAG_FAVORITE = '_$!<Favorite>!$_';

	public function __construct(
		LocationInfo $locationInfo,
		LocationFile $locationFile,
		IRootFolder $rootFolder
	) {
		$this->locationInfo = $locationInfo;
		$this->locationFile = $locationFile;
		$this->rootFolder = $rootFolder;
	}

	/**
	 * @return void
	 */
	public function delete() {
		throw new Forbidden('Cannot remove from a location');
	}

	public function getName() {
		return $this->locationFile->getFileId() . "-" . $this->locationFile->getName();
	}

	/**
	 * @return never
	 */
	public function setName($name) {
		throw new Forbidden('Cannot rename from a location');
	}

	public function getLastModified() {
		return $this->locationFile->getMTime();
	}

	public function put($data) {
		$nodes = $this->userFolder->getById($this->file->getFileId());
		$node = current($nodes);
		if ($node) {
			/** @var Node $node */
			if ($node instanceof File) {
				return $node->putContent($data);
			} else {
				throw new NotFoundException("Photo is a folder");
			}
		} else {
			throw new NotFoundException("Photo not found for user");
		}
	}

	public function get() {
		$nodes = $this->rootFolder
			->getUserFolder($this->locationInfo->getUserId())
			->getById($this->locationFile->getFileId());
		$node = current($nodes);
		if ($node) {
			/** @var Node $node */
			if ($node instanceof File) {
				return $node->fopen('r');
			} else {
				throw new NotFoundException("Photo is a folder");
			}
		} else {
			throw new NotFoundException("Photo not found for user");
		}
	}

	public function getFileId(): int {
		return $this->locationFile->getFileId();
	}

	public function getFileInfo(): Node {
		$nodes = $this->rootFolder
			->getUserFolder($this->locationInfo->getUserId())
			->getById($this->locationFile->getFileId());
		$node = current($nodes);
		if ($node) {
			return $node;
		} else {
			throw new NotFoundException("Photo not found for user");
		}
	}

	public function getContentType() {
		return $this->locationFile->getMimeType();
	}

	public function getETag() {
		return $this->locationFile->getEtag();
	}

	public function getSize() {
		return $this->locationFile->getSize();
	}

	public function getFile(): LocationFile {
		return $this->locationFile;
	}

	public function isFavorite(): bool {
		$tagManager = \OCP\Server::get(\OCP\ITagManager::class);
		$tagger = $tagManager->load('files');
		if ($tagger === null) {
			return false;
		}
		$tags = $tagger->getTagsForObjects([$this->getFileId()]);

		if ($tags === false || empty($tags)) {
			return false;
		}

		return array_search(self::TAG_FAVORITE, current($tags)) !== false;
	}

	public function setFavoriteState($favoriteState): bool {
		$tagManager = \OCP\Server::get(\OCP\ITagManager::class);
		$tagger = $tagManager->load('files');

		switch ($favoriteState) {
			case "0":
				return $tagger->removeFromFavorites($this->locationFile->getFileId());
			case "1":
				return $tagger->addToFavorites($this->locationFile->getFileId());
			default:
				new \Exception('Favorite state is invalide, should be 0 or 1.');
		}
	}

	public function setMetadata(string $key, FileMetadata $value): void {
		$this->metaData[$key] = $value;
	}

	public function hasMetadata(string $key): bool {
		return isset($this->metaData[$key]);
	}

	public function getMetadata(string $key): FileMetadata {
		return $this->metaData[$key];
	}
}

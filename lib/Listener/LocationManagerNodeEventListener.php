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

namespace OCA\Photos\Listener;

use OCA\Photos\Jobs\MapMediaToLocationJob;
use OCA\Photos\Service\MediaLocationManager;
use OCP\BackgroundJob\IJobList;
use OCP\IConfig;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\Files\Cache\CacheEntryRemovedEvent;
use OCP\Files\Events\Node\NodeWrittenEvent;
use OCP\Files\Folder;
use OCP\Files\File;
use OCP\Files\Node;
use OCP\Share\Events\ShareCreatedEvent;
use OCP\Share\Events\ShareDeletedEvent;
use OCP\User\Events\UserDeletedEvent;

/**
 * Listener to create, update or remove location info from the database.
 */
class LocationManagerNodeEventListener implements IEventListener {
	private MediaLocationManager $mediaLocationManager;
	private IConfig $config;
	private IJobList $jobList;

	public function __construct(
		MediaLocationManager $mediaLocationManager,
		IConfig $config,
		IJobList $jobList
	) {
		$this->mediaLocationManager = $mediaLocationManager;
		$this->config = $config;
		$this->jobList = $jobList;
	}

	public function handle(Event $event): void {
		if (!$this->config->getSystemValueBool('enable_file_metadata', true)) {
			return;
		}

		if ($event instanceof CacheEntryRemovedEvent) {
			if ($this->isCorrectPath($event->getPath())) {
				$this->mediaLocationManager->clearLocationForFile($event->getFileId());
			}
		}

		if ($event instanceof NodeWrittenEvent) {
			if (!$this->isCorrectPath($event->getNode()->getPath())) {
				return;
			}

			if (!str_starts_with($event->getNode()->getMimeType(), 'image')) {
				return;
			}

			$fileId = $event->getNode()->getId();
			$ownerId = $event->getNode()->getOwner()->getUID();

			$this->jobList->add(MapMediaToLocationJob::class, [$fileId, $ownerId]);
		}

		if ($event instanceof UserDeletedEvent) {
			$this->mediaLocationManager->clearLocationForUser($event->getUser()->getUID());
		}

		if ($event instanceof ShareCreatedEvent) {
			$receiverId = $event->getShare()->getSharedWith();

			$this->forEachSubNode(
				$event->getShare()->getNode(),
				fn ($fileId) => $this->jobList->add(MapMediaToLocationJob::class, [$fileId, $receiverId]),
			);
		}

		if ($event instanceof ShareDeletedEvent) {
			$receiverId = $event->getShare()->getSharedWith();

			$this->forEachSubNode(
				$event->getShare()->getNode(),
				fn ($fileId) => $this->mediaLocationManager->clearLocationForFile($fileId, $receiverId),
			);
		}
	}

	private function isCorrectPath(string $path): bool {
		// TODO make this more dynamic, we have the same issue in other places
		return !str_starts_with($path, 'appdata_') && !str_starts_with($path, 'files_versions/');
	}


	private function forEachSubNode(Node $node, callable $callback) {
		if ($node instanceof Folder) {
			foreach ($node->getDirectoryListing() as $subNode) {
				$this->forEachSubNode($subNode, $callback);
			}
		}

		if ($node instanceof File) {
			if (!str_starts_with($node->getMimeType(), 'image')) {
				return;
			}

			$callback($node->getId());
		}
	}
}

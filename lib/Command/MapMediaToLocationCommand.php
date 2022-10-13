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
namespace OCA\Photos\Command;

use OCP\IConfig;
use OCP\IUserManager;
use OCP\Files\IRootFolder;
use OCP\Files\Folder;
use OCA\Photos\Service\MediaLocationManager;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

class MapMediaToLocationCommand extends Command {
	private IRootFolder $rootFolder;
	private MediaLocationManager $mediaLocationManager;
	private IConfig $config;
	private IUserManager $userManager;

	public function __construct(
		IRootFolder $rootFolder,
		MediaLocationManager $mediaLocationManager,
		IConfig $config,
		IUserManager $userManager
	) {
		parent::__construct();
		$this->config = $config;
		$this->rootFolder = $rootFolder;
		$this->mediaLocationManager = $mediaLocationManager;
		$this->userManager = $userManager;
	}

	/**
	 * Configure the command
	 *
	 * @return void
	 */
	protected function configure() {
		$this->setName('photos:map-media-to-location')
			->setDescription('Reverse geocode media coordinates.')
			->addOption('user', 'u', InputOption::VALUE_REQUIRED, 'Limit the mapping to a user.', null);
	}

	/**
	 * Execute the command
	 *
	 * @param InputInterface  $input
	 * @param OutputInterface $output
	 *
	 * @return int
	 */
	protected function execute(InputInterface $input, OutputInterface $output): int {
		if (!$this->config->getSystemValueBool('enable_file_metadata', true)) {
			throw new \Exception('File metadata is not enabled.');
		}

		$userId = $input->getOption('user');
		if ($userId === null) {
			$this->scanForAllUsers();
		} else {
			$this->scanFilesForUser($userId);
		}

		return 0;
	}

	private function scanForAllUsers() {
		$users = $this->userManager->search('');

		foreach ($users as $user) {
			$this->scanFilesForUser($user->getUID());
		}
	}

	private function scanFilesForUser(string $userId) {
		$userFolder = $this->rootFolder->getUserFolder($userId);
		$this->scanFolder($userFolder);
	}

	private function scanFolder(Folder $folder) {
		foreach ($folder->getDirectoryListing() as $node) {
			if ($node instanceof Folder) {
				$this->scanFolder($node);
				continue;
			}

			if (!str_starts_with($node->getMimeType(), 'image')) {
				continue;
			}

			$this->mediaLocationManager->addLocationForFileAndUser($node->getId(), $node->getOwner()->getUID());
		}
	}
}

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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

import moment from '@nextcloud/moment'
import { translate } from '@nextcloud/l10n'

import defaultClient from './DavClient.js'
import logger from './logger.js'
import DavRequest from './DavRequest.js'
import { genFileInfo } from '../utils/fileUtils.js'

/**
 * @typedef {object} Collection
 * @property {string} filename - The id of the collection.
 * @property {string} basename - The name of the collection.
 * @property {number} itemCount - The number of item in the collection.
 * @property {number} cover - The cover of the collection.
 */

/**
 * @param {string} extraProps - Extra properties to add to the DAV request.
 * @return {string}
 */
function getCollectionDavRequest(extraProps = '') {
	return `<?xml version="1.0"?>
			<d:propfind xmlns:d="DAV:"
				xmlns:oc="http://owncloud.org/ns"
				xmlns:nc="http://nextcloud.org/ns"
				xmlns:ocs="http://open-collaboration-services.org/ns">
				<d:prop>
					<nc:last-photo />
					<nc:nbItems />
					<nc:location />
					${extraProps}
				</d:prop>
			</d:propfind>`
}

/**
 * @param {string} extraProps - Extra properties to add to the DAV request.
 * @return {string}
 */
function getCollectionFilesDavRequest(extraProps = '') {
	return `<?xml version="1.0"?>
			<d:propfind xmlns:d="DAV:"
				xmlns:oc="http://owncloud.org/ns"
				xmlns:nc="http://nextcloud.org/ns"
				xmlns:ocs="http://open-collaboration-services.org/ns">
				<d:prop>
					<d:getcontentlength />
					<d:getcontenttype />
					<d:getetag />
					<d:getlastmodified />
					<d:resourcetype />
					<nc:file-metadata-size />
					<nc:has-preview />
					<oc:favorite />
					<oc:fileid />
					<oc:permissions />
					${extraProps}
				</d:prop>
			</d:propfind>`
}

/**
 * @param {string} path - Collections' root path.
 * @param {import('webdav').StatOptions} options - Options to forward to the webdav client.
 * @param {string} extraProps - Extra properties to add to the DAV request.
 * @param {import('webdav').WebDAVClient} client - The DAV client to use.
 * @return {Promise<Collection|null>}
 */
export async function fetchCollection(path, options, extraProps = '', client = defaultClient) {
	try {
		const response = await client.stat(path, {
			data: getCollectionDavRequest(extraProps),
			details: true,
			...options,
		})

		logger.debug('[Collections] Fetched a collection: ', { data: response.data })

		return formatCollection(response.data)
	} catch (error) {
		if (error.code === 'ERR_CANCELED') {
			return null
		}

		throw error
	}
}

/**
 *
 * @param {string} path - Collections' root path.
 * @param {import('webdav').StatOptions} options - Options to forward to the webdav client.
 * @param {string} extraProps - Extra properties to add to the DAV request.
 * @param {import('webdav').WebDAVClient} client - The DAV client to use.
 * @return {Promise<Collection[]>}
 */
export async function fetchCollections(path, options, extraProps = '', client = defaultClient) {
	try {
		const response = await client.getDirectoryContents(path, {
			data: getCollectionDavRequest(extraProps),
			details: true,
			...options,
		})

		logger.debug(`[Collections] Fetched ${response.data.length} collections: `, { data: response.data })

		return response.data
			.filter(collection => collection.filename !== path)
			.map(formatCollection)
	} catch (error) {
		if (error.code === 'ERR_CANCELED') {
			return []
		}

		throw error
	}
}

/**
 *
 * @param {object} collection - An collection received from a webdav request.
 * @return {Collection}
 */
function formatCollection(collection) {
	// Ensure that we have a proper collaborators array.
	if (collection.props.collaborators === undefined || collection.props.collaborators === '') {
		collection.props.collaborators = []
	} else if (typeof collection.props.collaborators.collaborator === 'object') {
		if (Array.isArray(collection.props.collaborators.collaborator)) {
			collection.props.collaborators = collection.props.collaborators.collaborator
		} else {
			collection.props.collaborators = [collection.props.collaborators.collaborator]
		}
	}

	// Extract custom props.
	collection = genFileInfo(collection)

	// Compute date range label.
	const dateRange = JSON.parse(collection.dateRange?.replace(/&quot;/g, '"') ?? '{}')
	if (dateRange.start === null) {
		dateRange.start = moment().unix()
		dateRange.end = moment().unix()
	}
	const dateRangeFormatted = {
		startDate: moment.unix(dateRange.start).format('MMMM YYYY'),
		endDate: moment.unix(dateRange.end).format('MMMM YYYY'),
	}
	if (dateRangeFormatted.startDate === dateRangeFormatted.endDate) {
		collection.date = dateRangeFormatted.startDate
	} else {
		collection.date = translate('photos', '{startDate} to {endDate}', dateRangeFormatted)
	}

	return collection
}

/**
 *
 * @param {string} path - Collections' root path.
 * @param {import('webdav').StatOptions} options - Options to forward to the webdav client.
 * @param {string} extraProps - Extra properties to add to the DAV request.
 * @param {import('webdav').WebDAVClient} client - The DAV client to use.
 * @return {Promise<Array>}
 */
export async function fetchCollectionFiles(path, options, extraProps = '', client = defaultClient) {
	try {
		const response = await client.getDirectoryContents(path, {
			data: getCollectionFilesDavRequest(extraProps),
			details: true,
			...options,
		})

		const fetchedFiles = response.data
			.map(file => genFileInfo(file))
			.filter(file => file.fileid)

		logger.debug(`[Collections] Fetched ${fetchedFiles.length} new files: `, fetchedFiles)

		return fetchedFiles
	} catch (error) {
		if (error.code === 'ERR_CANCELED') {
			return []
		}

		logger.error('Error fetching collection files', { error })
		console.error(error)

		throw error
	}
}

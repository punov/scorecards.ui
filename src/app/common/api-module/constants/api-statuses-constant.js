/**
 * @ngdoc object
 * @name Scorecards.common.api.constant:apiStatuses
 * @description
 * Enum for common API statuses
 * @property {string} Success	Ok
 * @property {string} Created	Created
 * @property {string} Redirect	Redirect
 * @property {string} NotAuthorized	NotAuthorized
 * @property {string} AccessBlocked	Forbidden
 * @property {string} NotFound	NotFound
 * @property {string} UnknownError	UnknownError
 */

(function(angular) {
	'use strict';

	angular
		.module('Scorecards.common.api')
		.constant('apiStatuses', {
			Success: 'Ok',
			Created: 'Created',
			Redirect: 'Redirect',
			NotAuthorized: 'NotAuthorized',
			AccessBlocked: 'Forbidden',
			NotFound: 'NotFound',
			UnknownError: 'UnknownError'
		});

})(window.angular);

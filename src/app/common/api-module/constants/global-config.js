/**
 * @ngdoc object
 * @name Scorecards.common.api.constant:globalConfig
 * @description Global configuration options.
 * @property {number}  maxResponseTime	`number`
 *
 * - default 60000 ms
 * @property {boolean}  debug	`boolean`
 * @property {boolean}  ngStrictDi	  `boolean`
 */

/**
 * @ngdoc property
 * @propertyOf Scorecards.common.api.constant:globalConfig
 * @name apiPath
 * @example `api`
 */

(function(angular, config) {
	'use strict';

	angular
		.module('Scorecards.common.api')
		.constant('globalConfig', globalConfig());

	function globalConfig() {
		var result = config || {};

		if (!result.maxResponseTime) {
			result.maxResponseTime = 60000;
		}

		return result;
	}

})(window.angular, window.globalConfig);

/**
* @ngdoc overview
* @name  Scorecards.common.api
* @description
* Scorecards.common.api module - facade for $http service
*/

(function(angular) {
	'use strict';

	angular
		.module('Scorecards.common.api', [])
		.config(config);

	function config($httpProvider, globalConfig) {
		$httpProvider.defaults.timeout = globalConfig.maxResponseTime;
	}

})(window.angular);

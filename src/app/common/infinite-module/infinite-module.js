/**
* @ngdoc overview
* @name  Scorecards.common.infinite
* @description
* Scorecards.common.infinite module - contains special service for infinite looping
*/

(function(angular) {
	'use strict';

	angular
		.module('Scorecards.common.infinite', [
			'ui.scroll'
		])
		.config(config);

	function config() {
	}

})(window.angular);

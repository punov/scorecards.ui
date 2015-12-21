/**
* @ngdoc overview
* @name  Scorecards.common.infinite
* @description
* Scorecards.common.infinite module - contains special services for infinite scroll directive: ui-scroll
* https://github.com/angular-ui/ui-scroll
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

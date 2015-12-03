/**
 * @ngdoc directive
 * @name Scorecards.home.directive:cmsScorecard
 * @param {Object} data
 * @description
 * Creates score block
 */

(function(angular) {
	'use strict';

	angular
		.module('Scorecards.home')
		.directive('cmsScorecard', cmsScorecard);

	function cmsScorecard($log) {
		return {
			restrict: 'E',
			require: 'ngModel',
			templateUrl: 'app/home-module/views/directives/tpl.cms-scorecard.html',
			scope: {
				ngModel: '='
			},
			link: createScore
		};

		function createScore(scope, elem, attrs, ngModel) {
			if (!ngModel) {
				$log.warn('Scorecard directive requires ngModel to be on the element');
				return;
			}
		}
	}

})(window.angular);

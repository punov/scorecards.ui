/**
 * @ngdoc service
 * @name Scorecards.common.watch.watchService
 * @description
 * Helper Service to figure out the total $watchers count
 */

(function(angular) {
	'use strict';

	angular
		.module('Scorecards.common.watch')
		.service('watchService', watchService);

	function watchService($timeout) {

		var that = this;

		/* public */

		that.getWatchersCount = getWatchersCount;

		/**
		 *
		 * @returns {int} count of watchers in application
		 * Example counter-function from:
		 * http://stackoverflow.com/questions/18499909/how-to-count-total-number-of-watches-on-a-page
		 *
		 */
		function getWatchersCount() {
			var root = angular.element(document.getElementsByTagName('html'));

			var watchers = [];

			var f = function(element) {
				angular.forEach(['$scope', '$isolateScope'], function(scopeProperty) {
					if (element.data() && element.data().hasOwnProperty(scopeProperty)) {
						angular.forEach(element.data()[scopeProperty].$$watchers, function(watcher) {
							watchers.push(watcher);
						});
					}
				});

				angular.forEach(element.children(), function(childElement) {
					f(angular.element(childElement));
				});
			};

			f(root);

			// Remove duplicate watchers
			var watchersWithoutDuplicates = [];
			angular.forEach(watchers, function(item) {
				if (watchersWithoutDuplicates.indexOf(item) < 0) {
					watchersWithoutDuplicates.push(item);
				}
			});

			return watchersWithoutDuplicates.length;
		}
	}

})(window.angular);

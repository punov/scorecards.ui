/**
* @ngdoc controller
* @name Scorecards.news:NewsController
* @requires $scope
* @description
* Infinite-scroll example of scorecards ui
*/

(function(angular) {
	'use strict';

	angular
		.module('Scorecards.news')
		.controller('NewsController', NewsController);

	function NewsController($scope, $location, newsService, infiniteCache) {

		var that = this;

		/* public properties and methods */

		that.loading = true;
		that.datasource = {
			items: [],
			get: newsService.getNews
		};
		//that.getWatchCount = watchService.getWatchCount;

		$scope.$on('$destroy', function() {
			$scope.topVisible = null;
		});

		$scope.$watch((function() {
			return $scope.topVisible;
		}), function() {
			if ($scope.topVisible) {
				$location.search('offset', $scope.topVisible.$index + that.datasource.offset);
				return $location.replace();
			}
		});

		/**
		 * @ngdoc method
		 * @name init
		 * @methodOf Scorecards.news.controller:NewsController
		 * @description
		 *
		 */
		function init() {
			// Get the offset on load
			var offset = $location.search().offset;
			that.datasource.offset = offset > 0 ? offset - 1 : 0;
			// top visible element is always 0 on load. Clear the last value, stored by ui-scroll
			if ($scope.topVisible) {
				$scope.topVisible.$index = 0;
			}
			// init helper service. Will help to cache and scroll fast
			// You can just disable this line, if don't need to cache and and monitor the offset
			infiniteCache.init(that.datasource);
			that.loading = false;
		}

		init();
	}
}

)(window.angular);

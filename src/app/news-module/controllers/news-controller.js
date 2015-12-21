/**
* @ngdoc controller
* @name Scorecards.news:NewsController
* @requires $scope
* @description
* Infinite-scroll example of scorecards ui.
*/

(function(angular) {
	'use strict';

	angular
		.module('Scorecards.news')
		.controller('NewsController', NewsController);

	function NewsController($scope, $state, $location, newsService, infiniteCache, utilsService) {

		var that = this;

		/* public properties and methods */

		// Initial datasource object for ui-scroll directive.
		// Contains 'items' array and 'get' method as endpoint to get new data
		that.datasource = {
			items: [],
			get: newsService.getNews
		};

		// method to track the count of watchers in application
		that.getWatchersCount = utilsService.getWatchersCount;

		// topVisible - is object which contains the index of currently visible element
		// We need to watch this one, to change the 'offset' url parameter accordingly to that.
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
		 * The main logic of the controller.
		 * We need to reset topVisible variable and init special cache service for infinite scroll
		 */
		function init() {
			// Get the offset parameter on load
			var offset = $location.search().offset;
			that.datasource.offset = offset > 0 ? offset - 1 : 0;

			// top visible element is always 0 on load. Clear the last value, stored by ui-scroll directive
			if ($scope.topVisible) {
				$scope.topVisible.$index = 0;
			}

			// Special helper service, from official ui-scroll repository.
			// Will help to cache and scroll better and faster
			// You can just comment this line, if you don't need to cache the previously loaded data
			infiniteCache.init(that.datasource);
		}

		init();
	}
}

)(window.angular);

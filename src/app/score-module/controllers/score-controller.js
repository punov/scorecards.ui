/**
* @ngdoc controller
* @name Scorecards.score:ScoreController
* @requires $scope
* @requires $state
* @description
* Some desciption
*/

(function(angular) {
	'use strict';

	angular
		.module('Scorecards.score')
		.controller('ScoreController', ScoreController);

	function ScoreController($scope, $interval, scoreService) {

		var that = this;
		var pushRequest;

		/* public properties and methods */

		that.loading = true;
		that.scores = [];

		that.getScores = getScores;

		/* implementation */

		/**
		 * @ngdoc method
		 * @name getScores
		 * @methodOf Scorecards.score.controller:ScoreController
		 * @description
		 * Ask service for updates, and render the results
		 *
		 */
		function getScores() {
			scoreService.getScores()
				.then(function(response) {
					that.scores = response.data;
				})
				.catch(function(error) {
					// can show error message here
				})
				.finally(function() {
					that.loading = false;
				});
		}

		/**
		 * @ngdoc method
		 * @name init
		 * @methodOf Scorecards.score.controller:ScoreController
		 * @description
		 * Get scores, show them and create interval to check the updates every 10 seconds
		 *
		 * Usually its better to request not the whole scores, but only ask server for changes
		 * with the endpoint like: api/scores/updationDate, and ask for the whole scores array
		 * only if data was updated.
		 * Or simply use Firebase or Angular Websocket to keep data syncronised
		 */
		function init() {
			getScores();
			pushRequest = $interval(that.getScores, 10000);
		}

		/**
		 * remove interval on scope destroy
		 */
		$scope.$on('$destroy', function() {
			stopInterval();
		});

		function stopInterval() {
			if (angular.isDefined(pushRequest)) {
				$interval.cancel(pushRequest);
				pushRequest = undefined;
			}
		}

		init();
	}
}

)(window.angular);

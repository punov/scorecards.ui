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
		that.test = 0;
		that.loading = true;
		that.scores = [];
		that.getScores = getScores;

		var pushRequest;

		function stopInterval() {
			if (angular.isDefined(pushRequest)) {
				$interval.cancel(pushRequest);
				pushRequest = undefined;
			}
		}

		$scope.$on('$destroy', function() {
			// Make sure that the interval is destroyed
			stopInterval();
		});

		function getScores() {
			that.test = 2;
			scoreService.getScores()
				.then(function(response) {
					that.scores = response.data;
				})
				.catch(function(error){
					// can show error message here
				})
				.finally(function(){
					that.loading = false;
				});
		}

		function init() {
			getScores();
			//pushRequest = $interval(that.getScores, 10000);
		}

		init();
	}
}

)(window.angular);

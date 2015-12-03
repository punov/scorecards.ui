/**
 * @ngdoc service
 * @name Scorecards.common.api.api
 * @description
 * Service that facilitates communication with the remote HTTP-based API which can guarantee
 * some restrictions on payload structure.
 * Uses {@link http://docs.angularjs.org/api/ng/service/$http $http} service underneath so for
 * unit testing you can use {@link https://docs.angularjs.org/api/ngMockE2E/service/$httpBackend
  $httpBackend mock}.
 */

(function(angular) {
	'use strict';

	angular
		.module('Scorecards.common.api')
		.service('api', apiService);

	function apiService($http, $q, globalConfig, apiStatuses, $httpBackend) {
		var that = this;

		/* public */

		that.path = globalConfig.apiPath || 'api';
		that.get = getRequest;

		/* implementation */

		/**
		 * @ngdoc method
		 * @name get
		 * @methodOf Scorecards.common.api.api
		 * @description Method to perform `GET` request.
		 * @param {string} url
		 * Url string containing optional colon parameters.
         * The only method which we need for this example task
		 */
		function getRequest(url, queryParams, options) {
			var config = {
				method: 'GET',
				url: that.path + '/' + url,
				params: queryParams
			};

			return handleResponse(request(config));
		}

		function request(config) {
			return $http(config);
		}

		function handleResponse(promise) {
			return promise.then(handleSuccess, handleError);
		}

		function handleSuccess(response) {
			return response;
		}

		function handleError(response) {
			var payload = angular.isObject(response.data) && response.data || {};

			if (!payload.status) {
				if (response.status === 302) {
					payload.status = apiStatuses.Redirect;
				} else if (response.status === 401) {
					payload.status = apiStatuses.NotAuthorized;
				} else {
					payload.status = apiStatuses.UnknownError;
				}
			}

			// properties order is important
			return $q.reject({
				status: payload.status,
				data: payload.data,
				statusCode: response.status
			});
		}

		function init() {
		}

		init();
	}

})(window.angular);

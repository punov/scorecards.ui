/**
 * @ngdoc service
 * @name Scorecards.news.newsService
 * @requires Scorecards.common.api.api
 * @description
 * News Service - helps to get the mock News data
 */

(function(angular) {
	'use strict';

	angular
		.module('Scorecards.news')
		.service('newsService', newsService);

	function newsService(
		api,
		$timeout,
		scoreAPIConfig
	) {
		var that = this;

		/* public methods */

		that.getNews = getNews;

		/* implementation */

		/**
		 * @ngdoc method
		 * @name getNews
		 * @methodOf Scorecards.news.newssService
		 *
		 * @description
		 * Return promise
		 *
		 * @returns {$promise} Promise with mock News data as a success result.
		 */
		function getNews(index, count, callback) {
			return $timeout(function() {
				var i;
				var item;
				var j;
				var ref;
				var ref1;
				var result;

				result = [];
				for (i = j = ref = index,
					ref1 = index + count - 1;
					ref <= ref1 ? j <= ref1 : j >= ref1;
					i = ref <= ref1 ? ++j : --j
				) {
					if (i > 0) {
						item = {};
						item.title = 'The News Title #' + i;
						item.content = 'Here you can see the text of News #' +
							i +
							', the long content of it. This news already loaded in memory and ' +
							'presented in DOM only when visible in viewport.';
						item.comments = Math.floor(Math.random() * 10);
						result.push(item);
					}
				}
				return callback(result);
			}, 200);
		}
	}

})(window.angular);

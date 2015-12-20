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

		that.getWatchCount = getWatchCount;

		var apps;

		function getScopeList(rs) {
			var scopeList = [];

			function traverseScope(s) {
				scopeList.push(s);
				if (s.$$nextSibling) {
					traverseScope(s.$$nextSibling);
				}
				if (s.$$childHead) {
					traverseScope(s.$$childHead);
				}
			}

			traverseScope(rs);
			return scopeList;
		}

		function getWatchCount() {
			total = 0;
			apps = angular.element(document.querySelectorAll('[ng-app]'));
			[].forEach.call(apps, function(app, i) {
				var ngapp = angular.element(app);
				var slist = getScopeList(ngapp.scope());
				var wl = slist.map(function(s) {return s.$$watchers;});
				//c = _.uniq(_.flatten(wl)).length;
				appName = ngapp.attr('ng-app') || ngapp.attr('data-ng-app') || i;
				total += wl.length;
			});
			return total;
		}
	}

})(window.angular);

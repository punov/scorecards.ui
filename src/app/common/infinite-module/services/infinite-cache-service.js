/**
 * @ngdoc service
 * @name Scorecards.common.infinite.infiniteCache
 * @description
 * Official helper from ui-scroll repository.
 * Service will help you to cache the data, to speed up the scroll process
 * Service was modified, the following features was implemented:
 * - working with offset
 * - multiple scroll instances per page, now available
 */

(function(angular) {
	'use strict';

	angular
		.module('Scorecards.common.infinite')
		.service('infiniteCache', infiniteCache);

	function infiniteCache() {

		var that = this;

		/* public */

		that.init = init;
		that.getCached = getCached;

		function init(context) {
			context.saveItems = saveItems;
			context.getItems = getItems;
			context.getPure = context.get;
			context.get = that.getCached;
			return;
		}

		function getCached(index, count, callback) {

			var self = this;

			if (this.offset) {
				index = index + this.offset;
			}
			if (this.getItems(index, count, callback)) {
				return true;
			}
			return this.getPure(index, count, function(result) {
				self.saveItems(index, count, result);
				return callback(result);
			});
		}

		function saveItems(index, count, resultItems) {
			var i;
			var item;
			var j;
			var len;
			var results;

			results = [];
			for (i = j = 0, len = resultItems.length; j < len; i = ++j) {
				item = resultItems[i];
				if (!this.items.hasOwnProperty(index + i)) {
					results.push(this.items[index + i] = item);
				} else {
					results.push(void 0);
				}
			}
			return results;
		}

		function getItems(index, count, callback) {
			var i;
			var j;
			var ref;
			var ref1;
			var result;

			result = [];
			for (i = j = ref = index, ref1 = index + count - 1; j <= ref1; i = j += 1) {
				if (!this.items.hasOwnProperty(i)) {
					return false;
				}
				result.push(this.items[i]);
			}
			callback(result);
			return true;
		}
	}

})(window.angular);

(function() {
	'use strict';
	describe('Application Module', function() {
		var Scorecards = angular.module('Scorecards');

		it('should be registered', function() {
			expect(Scorecards).toBeTruthy();
		});

		describe('Dependencies:', function() {
			var deps;
			var hasModule = function(m) {
				return deps.indexOf(m) >= 0;
			};

			beforeEach(function() {
				deps = Scorecards.requires;
			});

			//you can also test the module's dependencies
			it('should have ui.router as a dependency', function() {
				expect(hasModule('ui.router')).toEqual(true);
			});
			it('should have ngMockE2E as a dependency', function() {
				expect(hasModule('ngMockE2E')).toEqual(true);
			});
			it('should have Scorecards.common as a dependency', function() {
				expect(hasModule('Scorecards.common')).toEqual(true);
			});
			it('should have Scorecards.score as a dependency', function() {
				expect(hasModule('Scorecards.score')).toEqual(true);
			});
		});
	});
})();

describe('News Module', function() {
	'use strict';

	var mod = angular.module('Scorecards.news');

	it('should be registered', function() {
		expect(mod).toBeTruthy();
	});

	describe('Dependencies:', function() {
		var deps;
		var hasModule = function(m) {
			return deps.indexOf(m) >= 0;
		};

		beforeEach(function() {
			deps = mod.requires;
		});

		it('should have Scorecards.common.utils as a dependency', function() {
			expect(hasModule('Scorecards.common.utils')).toEqual(true);
		});
		it('should have Scorecards.common.infinite as a dependency', function() {
			expect(hasModule('Scorecards.common.infinite')).toEqual(true);
		});
	});
});

describe('Score Module', function() {
	'use strict';

	var mod = angular.module('Scorecards.score');

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

		it('should have Scorecards.common.api as a dependency', function() {
			expect(hasModule('Scorecards.common.api')).toEqual(true);
		});
		it('should have ui.router as a dependency', function() {
			expect(hasModule('ui.router')).toEqual(true);
		});
	});
});

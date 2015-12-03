describe('ScoreController', function() {
	var scope;
	var scoreService;
	var controller;
	var $controller;
	var $state;

	beforeEach(module('Scorecards'));

	beforeEach(inject(function(_$controller_, _$rootScope_, _scoreService_, _$state_) {
		$controller = _$controller_;
		scope = _$rootScope_.$new();
		scoreService = _scoreService_;
		$state = _$state_;
	}));

	beforeEach(function() {
		controller = $controller('ScoreController', {
			$scope: scope,
			scoreService: scoreService
		});
	});

	it('ScoreController should be created', function() {
		expect(controller).toBeDefined();
	});

	it('should have method getScores', function() {
		expect(controller.getScores).toBeDefined();
	});
});

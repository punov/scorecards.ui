describe('ScoreController', function() {
	var scope;
	var scoreData;
	var scoreService;
	var scoreAPIConfig;
	var controller; // instance
	var $controller; // constructor
	var $httpBackend;
	var $rootScope;
	var $location;
	var api;

	beforeEach(module('Scorecards'));
	beforeEach(module('templates'));

	beforeEach(inject(function(
		_$controller_,
		_scoreService_,
		_scoreData_,
		_$httpBackend_,
		_$rootScope_,
		_$templateCache_,
		_scoreAPIConfig_,
		_$location_,
		_api_
	) {
		$httpBackend = _$httpBackend_;
		$controller = _$controller_;
		scope = _$rootScope_.$new();
		scoreService = _scoreService_;
		scoreAPIConfig = _scoreAPIConfig_;
		scoreData = _scoreData_;
		$location = _$location_;
		api = _api_;
	}));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	beforeEach(function() {
		controller = $controller('ScoreController', {
			$scope: scope,
			scoreService: scoreService
		});
	});

	it('ScoreController should be created', function() {
		expect(controller).toBeDefined();
	});

	it('should have scores array', function() {
		expect(controller.scores).toBeDefined();
	});

	it('should have method getScores', function() {
		expect(controller.getScores).toBeDefined();
	});

	it('check the main path', function() {
		expect($location.path()).toBe('');
	});

	it ('should have 3 elements in array after calling getScores', function() {
		$httpBackend
			.expectGET(api.path + '/' + scoreAPIConfig.scores)
			.respond (function() {
			return [200, scoreData, {}];
		});
		expect(controller.scores.length).toEqual(0);
		controller.getScores();
		$httpBackend.flush();
		expect(controller.scores.length).toEqual(3);
	});
});

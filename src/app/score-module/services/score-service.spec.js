describe ('Score Service', function() {
	var scoreService;
	var scoreAPIConfig;
	var api;
	var $rootScope;
	var $httpBackend;

	beforeEach(module('Scorecards'));

	beforeEach(function() {
		inject(function(_$httpBackend_, _scoreService_, _scoreAPIConfig_, _$rootScope_, _api_) {

			scoreService = _scoreService_;
			$httpBackend = _$httpBackend_;
			$rootScope = _$rootScope_;
			scoreAPIConfig = _scoreAPIConfig_;
			api = _api_;
		});
	});

	it ('should call API get method', function() {
		$httpBackend.expectGET(api.path + '/' + scoreAPIConfig.scores);
		spyOn(api, 'get').and.callThrough();
		scoreService.getScores();
		expect(api.get).toHaveBeenCalled();
	});
});

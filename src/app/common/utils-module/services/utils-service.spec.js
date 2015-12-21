describe ('Utils Service', function() {
	var utilsService;

	beforeEach(module('Scorecards'));

	beforeEach(function() {
		inject(function(_utilsService_) {
			utilsService = _utilsService_;
		});
	});

	it ('should have a getWatchersCount function to be defined', function() {
		expect(utilsService.getWatchersCount()).toBeDefined();
	});
});

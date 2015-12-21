describe ('Infinity Cache Service', function() {
	var infiniteCache;

	beforeEach(module('Scorecards'));

	beforeEach(function() {
		inject(function(_infiniteCache_) {
			infiniteCache = _infiniteCache_;
		});
	});

	it ('should change the get method of the datasource to getCached', function() {
		var datasource = {
			items: [],
			get: function() {}
		};
		spyOn(infiniteCache, 'getCached').and.callThrough();
		infiniteCache.init(datasource);
		datasource.get(0, 0, function() {});
		expect(infiniteCache.getCached).toHaveBeenCalled();
	});
});

describe('NewsController', function() {
	var scope;
	var newsService;
	var newsRouteConfig;
	var controller; // instance
	var $controller; // constructor
	var $location;

	beforeEach(module('Scorecards'));
	beforeEach(module('templates'));

	beforeEach(inject(function(
		_$controller_,
		_$rootScope_,
		_newsService_,
		_$templateCache_,
		_newsRouteConfig_,
		_$location_
	) {
		$controller = _$controller_;
		scope = _$rootScope_.$new();
		newsService = _newsService_;
		newsRouteConfig = _newsRouteConfig_;
		$location = _$location_;
	}));

	beforeEach(function() {
		controller = $controller('NewsController', {
			$scope: scope,
			newsService: newsService,
			location: $location
		});
	});

	it('NewsController should be created', function() {
		expect(controller).toBeDefined();
	});

	it('should have datasource Object for ui-scroll', function() {
		expect(controller.datasource).toBeDefined();
		expect(controller.datasource.items).toBeDefined();
		expect(controller.datasource.get(0, 0, function() {})).toBeDefined();
	});
});

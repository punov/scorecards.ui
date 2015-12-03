describe('Scorecard Directive', function() {
	var compile;
	var scope;
	var directiveElem;

	beforeEach(module('Scorecards'));
	beforeEach(module('templates'));

	beforeEach(function() {
		inject(function($compile, $rootScope) {
			compile = $compile;
			scope = $rootScope;
		});

		var element = angular.element('<cms-scorecard class="scorecard" ng-model="score"></cms-scorecard>');
		scope.score = {homeTeam: 'Cowboys', awayTeam: 'Stealers', homeScore: 0, awayScore: 21};
		directiveElem = compile(element)(scope);
		scope.$digest();
	});

	it('should create html in our directive', function() {
		expect(directiveElem.html()).toBeDefined();
	});

	it('should spread all the data accordingly to markups', function() {
		expect(angular.element(directiveElem.find('p')[0]).text()).toEqual('Cowboys');
		expect(angular.element(directiveElem.find('p')[1]).text()).toEqual('0');
		expect(angular.element(directiveElem.find('p')[2]).text()).toEqual('Stealers');
		expect(angular.element(directiveElem.find('p')[3]).text()).toEqual('21');
	});
});

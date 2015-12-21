## Quickstart

Demo page: http://punov.com/scorecards/

To run solution locally, just use the following instruction: 

1. Install [Node.js](http://nodejs.org/)

2. Run the following commands from command line:
	- npm install
	- bower install
	- gulp

The last command will start the 'watch' thread, so you can edit the code and track changes realtime on your local machine: http://localhost:3000/

## Environment

Current environment is 'dev', it means that I've prepared build configuration with script injection, scss compilation and style check, but without minification and concatenation. This steps are pretty obvious so I missed them for convenience of browser debugging.

To configure your local environment, you can edit file:

*gulp/config.js*

## API

To mock the only request, I used ngMockE2E library, with help of $httpBackend. Main configuration is in root file: *app.js*, and you can find and change mock data in *scores-module/constants/score-data-constant.js*

The main approach for updating data is the easiest one: $interval service, with 10-seconds updates. We could also use Firebase or Angular Websocket libraries, but with appropriate backend environment, I decided not to overengineer it in our simple mock example.

## Style standards

I always like to add jshint+jscs libraries as a build steps. This components allow you to check yourself and check your teammates automatically, getting the beautiful and consistent code in result.

## Tests

You can run unit tests for score-module with command:

*karma start karma.conf.js*

Currently we have 29 successful tests for different parts of module:

![Unit Tests up and running](http://punov.com/scorecards/unit-tests.png)

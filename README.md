Environment
-----------
- This project was not tested in MS Windows environment.
- The application requires Docker CE(version 17.03.1-ce-mac5) and docker-compose(version 1.11.2)

Boilerplate
-----------
I've have created this Boilerplate by myself

Style
-----
- I've compiled a version of the bootstrap 3

Developmemt mode
----------------
- first you need to install all the required packages by running this command: `docker-compose run --rm app-dev yarn install`

- to start the server and to see the website, just run the command: `docker-compose run --rm --service-ports app-dev`
  + to run the tests and to see the mocha result page open the URL http://localhost:4000/__tests__/index.html on your browser
  + to access the web page open the URL http://localhost:4000/ on your browser

- to start the karma server(for now PhantomJS), just run the command: `docker-compose run --rm --service-ports app-test`
you can run both of servers at the same time. =)


This project has been setup with  HOT RELOAD, which means that every time you save a file the page and the tests will be refreshed right away.

Karma Tests Mode
----------------
Karma is used to run the tests on a browser that has been specified and installed. To add more browsers you just have to install a karma's plugin to it. Once karma server is up and running it's possible just open the link http://localhost:9876/ on any browser to run the tests on it, including a mobile's browser.

- To run the tests execute the command `docker-compose run --rm --service-ports app-test`. Now you can check out the coverage report in the folder coverage/lcov-report/index.html or see the result on the terminal output.

- If you need to debug your test run the command `docker-compose run --rm --service-ports app-test npm run test-debug`, so the bundle created will not have any instrumentation code. Now you can open the http://localhost:9876/ in any browser and create a break point.

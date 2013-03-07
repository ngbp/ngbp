/** 
 * From where to look for files, starting with the location of this file.
 */
basePath = '../';

/**
 * This is the list of file patterns to load into the browser during testing.
 */
files = [
  JASMINE,
  JASMINE_ADAPTER,
  'vendor/angular/angular.js',
  'vendor/angular/angular-mocks.js',
  'src/**/*.js',
  'dist/tmp/**/*.js'
];

/**
 * How to report, by default.
 */
reporters = 'dots';

/**
 * On which port should the browser connect, on which port is the test runner
 * operating, and what is the URL path for the browser to use.
 */
port = 9018;
runnerPort = 9100;
urlRoot = '/';

/** 
 * Log at a very low level, but not quite debug.
 */
logLevel = LOG_INFO;

/** 
 * Disable file watching by default.
 */
autoWatch = false;

/**
 * The list of browsers to launch to test on. This is empty by default, so you
 * will need to manually open your browser to http://localhot:9018/ for the 
 * tests to work. Currently available browser names:
 * Chrome, ChromeCanary, Firefox, Opera, Safari, PhantomJS
 */
browsers = [
  'Firefox'
];


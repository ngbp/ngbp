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
  'build/angular/angular.js',
  'build/angular/angular-mocks.js',
  'src/**/*.js',
  'dist/tmp/**/*.js',
  'vendor/placeholders/*.js',
  'vendor/angular-bootstrap/*.js',
  'vendor/angular-ui-utils/modules/route/*.js'
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
 * The list of browsers to launch to test on. This includes only "Firefox" by
 * default, but other browser names include:
 * Chrome, ChromeCanary, Firefox, Opera, Safari, PhantomJS
 *
 * Note that you can also use the executable name of the browser, like "chromium"
 * or "firefox", but that these vary based on your operating system.
 *
 * You may also leave this blank and manually navigate your browser to
 * http://localhost:9018/ when you're running tests. The window/tab can be left
 * open and the tests will automatically occur there during the build. This has
 * the aesthetic advantage of not launching a browser every time you save.
 */
browsers = [
  'Firefox'
];


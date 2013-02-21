/**
 * This is our main app configuration file. It kickstarts the whole process by
 * requiring all the modules from `src/app` that we need. The modules from
 * `src/components` should be required by the internal component that needs
 * them.
 *
 * We also require the template modules that are generated during build in order
 * to place templates in the cache so they do not have to be downloaded and are
 * just part of the initial JS payload.
 */
angular.module( 'ngBoilerplate', [
  'app-templates',
  'component-templates',
  'ngBoilerplate.home',
  'ngBoilerplate.about'
])

/**
 * All routing is performed by the individual components we include from within
 * the app folder, as that is where our app's functionality is really defined.
 * So all we need to do here is specify a default route to follow. In this case,
 * our `home` module is where we want to start, which has a defined route for
 * `/home` in `src/app/home/home.js`.
 */
.config( function myAppConfig ( $routeProvider ) {
  $routeProvider.otherwise({ redirectTo: '/home' });
})

/**
 * This is our main application controller. It need not have any logic, but
 * this is a good place for, say, primitive menu logic.
 */
.controller( 'AppCtrl', [ '$scope', '$location', function AppCtrl ( $scope, $location ) {
  $scope.isCurrentUrl = function isCurrentUrl( path ) {
    if ( $location.path() === path ) {
      return true;
    } else {
      return false;
    }
  };
}])

;


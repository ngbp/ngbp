angular.module( 'ngBoilerplate.about', [
  'ui.state',
  'placeholders',
  'ui.bootstrap',
  'titleService'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'about', {
    url: '/about',
    views: {
      "main": {
        controller: 'AboutCtrl',
        templateUrl: 'about/about.tpl.html'
      }
    }
  });
})

.controller( 'AboutCtrl', function AboutCtrl( $scope, titleService ) {
  titleService.setTitle( 'What is It?' );
  
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
})

;

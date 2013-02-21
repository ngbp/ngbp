describe( 'AppCtrl', function() {
  describe( 'isCurrentUrl', function() {
    var AppCtrl, $location, $scope;

    beforeEach( module( 'ngBoilerplate' ) );

    beforeEach( inject( function( $controller, _$location_, $rootScope ) {
      $location = _$location_;
      $scope = $rootScope.$new();
      AppCtrl = $controller( 'AppCtrl', { $location: $location, $scope: $scope });
    }));

    it( 'should return true when given the current URL', inject( function() {
      expect( $scope.isCurrentUrl( '/testpath' ) ).not.toBeTruthy();
      $location.path( '/testpath' );
      expect( $scope.isCurrentUrl( '/testpath' ) ).toBeTruthy();
    }));
  });
});

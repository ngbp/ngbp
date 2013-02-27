describe( 'activeIfCurrent', function() {
  var elm, $scope, $location;

  beforeEach( module( 'activeIfCurrent' ) );

  beforeEach( inject( function( $rootScope, $compile, _$location_ ) {
    $scope = $rootScope;
    $location = _$location_;
  }));

  it( 'should add "active" if href is current route', inject( function( $compile ) {
    elm = $compile( '<span active-if-current><a href="/correct">Click</a></span>' )( $scope );
    
    $location.path( '/incorrect' );
    $scope.$apply();
    expect( elm.hasClass( 'active' ) ).toBeFalsy();

    $location.path( '/correct' );
    $scope.$apply();
    expect( elm.hasClass( 'active' ) ).toBeTruthy();
  }));

  it( 'should work with hash-based URLs too', inject( function( $compile ) {
    elm = $compile( '<span active-if-current><a href="#/correct">Click</a></span>' )( $scope );
    
    $location.path( '/correct' );
    $scope.$apply();
    expect( elm.hasClass( 'active' ) ).toBeTruthy();
  }));
});

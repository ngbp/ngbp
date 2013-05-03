angular.module( 'activeIfCurrent', [])

.directive( 'activeIfCurrent', function( $location ) {
  return {
    scope: true,
    link: function( scope, element, attrs ) {
      var check = function check () {
        var el = element.find( 'a' );
        var path = $location.path();
        var href = el.attr( 'href' );
        if ( path === href || '#' + path === href ) {
          element.addClass( 'active' );
        } else {
          element.removeClass( 'active' );
        }
      };

      scope.$on( '$routeChangeSuccess', check );
      scope.$on( '$locationChangeSuccess', check );
    }
  };
})

;


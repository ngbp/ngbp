angular.module( 'titleService', [])

.factory( 'titleService', function ( $document ) {
  var suffix, title;
  
  var titleService = {
    setSuffix: function setSuffix ( s ) {
      suffix = s;
    },
    getSuffix: function getSuffix () {
      return suffix;
    },
    setTitle: function setTitle ( t ) {
      if ( angular.isDefined( suffix ) ) {
        title = t + suffix;
      } else {
        title = t;
      }

      $document.prop( 'title', title );
    },
    getTitle: function getTitle () {
      return $document.prop( 'title' );
    }
  };

  return titleService;
})

;


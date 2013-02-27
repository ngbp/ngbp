angular.module( 'titleService', [])

.factory( 'titleService', [ '$document', function ( $document ) {
  var suffix = " | ngBoilerplate";
  
  var titleService = {
    getSuffix: function getSuffix () {
      return suffix;
    },
    setTitle: function setTitle ( title ) {
      $document.prop( 'title', title + suffix );
    },
    getTitle: function getTitle () {
      return $document.prop( 'title' );
    }
};

  return titleService;
}]);


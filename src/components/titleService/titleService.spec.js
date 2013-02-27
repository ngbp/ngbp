describe( 'titleService', function() {
  var $document;

  beforeEach( module( 'titleService' ) );

  beforeEach( inject( function( _$document_, _titleService_ ) {
    $document = _$document_;
    titleService = _titleService_;
  }));

  it( 'should set the title', inject( function() {
    var title = "New Title";
    var suffix = titleService.getSuffix();

    titleService.setTitle( title );
    expect( titleService.getTitle() ).toEqual( title + suffix );
  }));
});


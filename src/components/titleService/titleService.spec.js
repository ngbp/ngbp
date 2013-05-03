describe( 'titleService', function() {
  var $document;

  beforeEach( module( 'titleService' ) );

  beforeEach( inject( function( _$document_, _titleService_ ) {
    $document = _$document_;
    titleService = _titleService_;
  }));

  it( 'should set a title without a suffix', inject( function() {
    var title = "new title";
    titleService.setTitle( title );

    expect( titleService.getTitle() ).toEqual( title );
  }));

  it( 'should allow specification of a suffix', inject( function() {
    var suffix = " :: new suffix";
    titleService.setSuffix( suffix );

    expect( titleService.getSuffix() ).toEqual( suffix );
  }));

  it( 'should set the title, including the suffix', inject( function() {
    var title = "New Title";
    var suffix = " :: new suffix";
    
    titleService.setSuffix( suffix );
    titleService.setTitle( title );
    expect( titleService.getTitle() ).toEqual( title + suffix );
  }));
});


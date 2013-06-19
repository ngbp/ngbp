describe 'titleService', () ->
  $document = null
  titleService = null

  beforeEach module( 'titleService' )

  beforeEach inject( ( _$document_, _titleService_ ) ->
    $document = _$document_
    titleService = _titleService_
  )

  it 'should set a title without a suffix', inject( () ->
    title = "new title"
    titleService.setTitle title

    expect( titleService.getTitle() ).toEqual( title )
  )

  it 'should allow specification of a suffix', inject( () ->
    suffix = " :: new suffix"
    titleService.setSuffix suffix

    expect( titleService.getSuffix() ).toEqual( suffix )
  )

  it 'should set the title, including the suffix', inject( () ->
    title = "New Title"
    suffix = " :: new suffix"
    
    titleService.setSuffix suffix
    titleService.setTitle title
    expect( titleService.getTitle() ).toEqual( title + suffix )
  )


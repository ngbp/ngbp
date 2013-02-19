module.exports = function ( grunt ) {
  var testacularCmd = process.platform === 'win32' ? 'testacular.cmd' : 'testacular';
  
  // TODO migrate this entirely to Grunt
  function runTestacular( testConfigFile, options ) {
    var args = [ 'start', testConfigFile, '--reporters=dots', '--colors' ].concat( options ),
        done = grunt.task.current.async(),
        child = grunt.util.spawn({
          cmd: testacularCmd,
          args: args
        }, function testacularError( err, result, code ) {
          grunt.log.writeln("Running cmd");
          if ( code ) {
            done( false );
          } else {
            done();
          }
        });

    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
  };

  grunt.registerMultiTask( 'test', 'run testacular unit tests', function gruntTestTask() {
    var options = [ '--single-run', '--no-auto-watch' ];
    runTestacular( this.data.conf, options );
  });
};


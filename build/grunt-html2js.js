/**
 * Based on html2js by the AngularUI team: https://angular-uigithub.com
 *
 * Updated to Grunt 0.4.0 by Josh David Miller
 */
module.exports = function (grunt) {

  var path = require('path'),
      TPL = 'angular.module("<%= id %>", []).run(["$templateCache", function($templateCache) {\n  $templateCache.put("<%= id %>",\n    "<%= content %>");\n}]);\n',
      escapeContent = function(content) {
        return content.replace(/"/g, '\\"').replace(/\r?\n/g, '" +\n    "');
      },
      normalizePath = function(p) {
        if ( path.sep !== '/' ) {
          p = p.replace(/\\/g, '/');
        }
        return p;
      };

  grunt.registerMultiTask('html2js', 'Generate js version of html template.', function() {
    this.requiresConfig( 'src' );
    var files = grunt.file.expand( this.data.src ),
        templateModule = "angular.module('"+ this.target +"-templates', [<%= templates %>]);\n",
        base = this.data.base || '.',
        dest = this.data.dest || '.',
        templates = [];

    files.forEach(function(file) {
      var id = normalizePath( path.relative(base, file) );
      
      templates.push("'" + id + "'");
      
      grunt.file.write( path.resolve( dest, id + '.js' ), grunt.template.process( TPL, {
        data: {
          id: id,
          content: escapeContent( grunt.file.read( file ) )
        }
      }));
    });

    grunt.file.write( path.resolve( dest, this.target + '.templates.js' ), grunt.template.process( templateModule, {
      data: {
        templates: templates.join(', ')
      }
    }));
  });
};

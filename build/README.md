# The `vendor/` Directory

## Overview

```
src/
  |- vendor/
  |  |- angular/
  |  |  |- angular.js
  |  |  |- angular-mocks.js
  |  |- twitter-bootstrap/
```

The `vendor/` folder contains libraries that are either foundational or 
necessary for the build processes to succeed. The `angular` directory contains
both `angular.js` version 1.1.2, which is used during testing and which is of
course included in the final build, and `angular-mocks.js`, which is used only
for testing.

The `twitter-bootstrap/` folder is a git submodule that references the latest
version of Twitter Bootstrap. Nothing from here is included in the final build,
but `src/less/main.less` can import any file from this directory it needs to and
the `recess` Grunt task will compile the LESS (inclusive of whatever Bootstrap
files were imported) in to the resulting CSS file
`dist/assets/ng-boilerplate.css`.

## Adding New Libraries

As these libraries can be used in different ways, there is *no* automated
processing of anything in this directory; when a new library is added, the
developer must add whatever logic is necessary to the Grunt build file
(`Gruntfile.js`) himself.

For example, if the developer wanted to include jQuery, she would create a
folder called `jquery` here that included the resultant jQuery library (we'll
assume it is called `jquery.js`). In the `concat` section of `Gruntfile.js`, she
must then change the libs section from this:

```js
libs: {
    src: [ 
      'vendor/angular/angular.js'
    ],
    dest: '<%= distdir %>/assets/libs.js'
  }
},
```

to this:

```js
libs: {
    src: [ 
      'vendor/jquery/jquery.js',
      'vendor/angular/angular.js'
    ],
    dest: '<%= distdir %>/assets/libs.js'
  }
},
```

jQuery would then be included in the final library by default. If jQuery was
also needed during testing, it would need to be included in the `files` section
of `karma/karma-unit.conf`:

```js
files = [
  JASMINE,
  JASMINE_ADAPTER,
  'vendor/jquery/jquery.js',
  'vendor/angular/angular.js',
  'vendor/angular/angular-mocks.js',
  'src/**/*.js',
  'dist/tmp/**/*.js'
];
```

In short, the `vendor/` directory is easy to manage, but it must be done
manually.

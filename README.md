# [ngBoilerplate](http://joshdmiller.github.com/ng-boilerplate) [![Build Status](https://travis-ci.org/joshdmiller/ng-boilerplate.png?branch=master)](https://travis-ci.org/joshdmiller/ng-boilerplate)

An opinionated kickstarter for [AngularJS](http://angularjs.org) projects.

***

## Quick Start

Install Node.js and then:

```sh
$ git clone --recursive git://github.com/joshdmiller/ng-boilerplate
$ cd ng-boilerplate
$ sudo npm -g install grunt-cli karma
$ npm install
$ grunt watch
```

Happy hacking!

## Purpose

`ngBoilerplate` is designed to make life easy by providing a basic framework
with which to kickstart AngularJS projects. It contains a best-practice
directory structure to ensure code reusability and maximum scalability.
ngBoilerplate also comes prepackaged with the most popular design frameworks
around: [Twitter Bootstrap](http://getbootstrap.com), [UI
Bootstrap](http://angular-ui.github.com/bootstrap), [Font
Awesome](http://fortawesome.github.com/Font-Awesome), and
[LESS](http://lesscss.org).  Lastly, it contains a sophisticated Grunt-based
build system to ensure maximum productivity.  All you have to do is clone it and
start coding!

## Philosophy

The principal goal of `ngBoilerplate` is to set projects up for long-term
success.  So `ngBoilerplate` tries to follow best practices everywhere it can.
These are:

- Properly orchestrated modules to encourage drag-and-drop component re-use.
- Tests exist alongside the component they are testing, no separate `test`
  directory required. The build process should be sophisticated enough to handle
  this.
- Speaking of which, the build system should work automagically, without
  involvement from the developer. It should do what needs to be done, while
  staying out of the way.  Components should end up tested, linted, compiled,
  and minified, ready for use in a production environment.
- Integration with popular tools (Bower only for now, hopefully others in the
  future).
- *Engourages* test-driven development. It's the only way to code.
- A directory structure that is cogent, meaningful to new team members, and
  supporting of the above points.
- Well-documented, to show new developers *why* things are set up the way they
  are.
- It should be responsive to evidence. Community feedback is therefore crucial
  to the success of `ngBoilerplate`.

But `ngBoilerplate` is not an example of an AngularJS app: this is a
kickstarter. If you're looking for an example of what a complete, non-trivial
AngularJS app that does something real looks like, complete with a REST backend
and authentication and authorization, then take a look at
[`angular-app`](http://github.com/angular-app/angular-app), which does just
that - and does it well.

## Learn

### Overall Directory Structure

At a high level, the structure looks roughly like this:

```
ng-boilerplate/
  |- build/
  |- src/
  |  |- app/
  |  |  |- <app logic>
  |  |- assets/
  |  |  |- <static files>
  |  |- components/
  |  |  |- <reusable code & external libs>
  |  |- less/
  |  |  |- main.less
  |- karma/
  |- vendor/
  |  |- angular/
  |  |- twitter-bootstrap/
  |- Gruntfile.js
  |- module.prefix
  |- module.suffix
  |- package.json
```


What follows is a brief description of each entry, but all directories contain
their own `README.md` file with additional documentation, so browse around to
learn more.

- `build/` - custom scripts for Grunt.
- `src/` - our application sources. [Read more &raquo;](src/README.md)
- `karma` - test configuration.
- `vendor` - files needed to make everything happen, but *not* libraries our
  application uses. [Read more &raquo;](vendor/README.md)
- `Gruntfile.js` - our build script; see "The Build System" below.
- `module.prefix` and `module.suffix` - our compiled application script is
  wrapped in these, which by default are used to place the application inside a
  self-executing anonymous function to ensure no clashes with other libraries.
- `package.json` - metadata about the app, used by NPM and our build script.

### Detailed Installation

`ngBoilerplate` uses [Grunt](http://gruntjs.org) as its build system, so
[Node.js](http://nodejs.org) is required. Also, Grunt by default no longer comes
with a command-line utility and Karma must end up in your global path for
the build system to find it, so they must be installed independently. Once you
have Node.js installed, you can simply use `npm` to make it all happen:

```sh
$ npm -g install grunt-cli karma
```

If you're on Linux (like I am) then throw `sudo` in the front of that command.
If you're on Windows, you're on your own.  Next, you can either clone this
repository using Git, download it as a zip file from GitHub, or merge the branch
into your existing repository. Assuming you're starting from scratch, simply
clone this repository using git:

```sh
$ git clone git://github.com/joshdmiller/ng-boilerplate my-project-name
$ cd my-project-name
```

Twitter Bootstrap is contained in a submodule, which is an included repository, so we 
must initialize and update it, which tells Git to go ahead and pull the right version 
down. This could also be done by adding `--recursive` to the `git clone` command, as in 
the "Quick Start" section at the top.

```sh
$ git submodule init
$ git submodule update
```

And then install the remaining build dependencies locally:

```sh
$ npm install
```

This will read the `dependencies` (empty by default) and the `devDependencies`
arrays from `package.json` and install everything needed into a folder called
`node_modules`.  Technically, `ngBoilerplate` is now ready to go.

However, prior to hacking on your application, you will want to modify the
`package.json` file to contain your project's information. Do not remove any
items from the `devDependencies` array as all are needed for the build process
to work.

To ensure your setup works, launch grunt:

```sh
$ grunt watch
```

The built files are placed in the `dist` directory.  Open the `dist/index.html`
file in your browser. Because everything is compiled, no XHR requests are needed
to retrieve templates, so until this needs to communicate with your backend,
there is no need to run it from a web server.

`watch` is actually an alias of the `grunt-contrib-watch` that will first run
the entire build before watching for file changes. With this setup, any file
that changes will trigger only those build tasks necessary to bring the app up
to date. For example, when a template file changes, the templates are recompiled
and concatenated with the rest of the JavaScript files, but when a test/spec
file changes, only the tests are run. This allows the watch command to complete
in a fraction of the time it would ordinarily take.

However, a complete build is always available by simply running the default
task:

```sh
$ grunt
```

### The Build System

The best way to learn about the build system is by familiarizing yourself with
Grunt and then reading through the heavily documented build script,
`Gruntfile.js`. But what follows in this section is a quick introduction to the
tasks provided.

The driver of the process is the `delta` multi-task, which watches for file
changes using `grunt-contrib-watch` and executes one of seven tasks when a file
changes:

* `delta:gruntfile` - When `Gruntfile.js` changes, this task runs the linter
  (`jshint`) on that one file.
* `delta:assets` - When any file within `src/assets/` changes, all asset files
  are copied to `dist/assets/`.
* `delta:html` - When `src/index.html`, it is compiled as a Grunt template, so
  script names, etc., are dynamically replaced with the correct values from
  `package.json`.
* `delta:less` - When any `*.less` file within `src/` changes, the
  `src/less/main.less` file is linted, compiled, and compressed into
  `dist/assets/ng-boilerplate.css`.
* `delta:src` - When any JavaScript file within `src/` that does not end in
  `.spec.js` changes, all JavaScript sources are linted, all unit tests are run,
  and the previously-compiled templates are concatenated with them to form the
  final JavaScript source file (`dist/assets/ng-boilerplate.js`).
* `delta:tpls` - When any `*.tpl.html` file within `src/` changes, all templates
  are put into strings in a JavaScript file (technically two, one for
  `src/components/` and another for `src/app/`) that will add the template to
  AngularJS's
  [`$templateCache`](http://docs.angularjs.org/api/ng.$templateCache) so
  template files are part of the initial JavaScript payload and do not require
  any future XHR.  The template cache files are then concatenated with the rest
  of the scripts into the final JavaScript source file
  (`dist/assets/ng-boilerplate.js`).
* `delta:unittest` - When any `*.spec.js` file in `src/` changes, the test files
  are linted and the unit tests are executed.

As covered in the previous section, will `watch` execute a full build and run
all of the aforementioned `delta:*` tasks.

## Roadmap

This is a project that is not broad in scope, so there's not really much of a
wish list here. But I would like to see a couple of things:

I'd like it to be a little simpler. I want this to be a universal starting
point. If someone is starting a new AngularJS project, she should be able to
clone, merge, or download its source and immediately start doing what she needs
without renaming a bunch of files and methods or deleting spare parts. What I
have works for a first release, but I just think there is a little too much here
right now.

I'd also like to see a simple generator. Nothing like Yeoman, as there already
is one of those, but just something that allows the user to say "I want
Bootstrap but not Font Awesome and my app is called 'coolApp'. Gimme." Perhaps a
custom download builder like UI Bootstrap has. Like that. Then again, perhaps
some Yeoman generators wouldn't be out of line. I don't know. What do you think?

Naturally, I am open to all manner of ideas and suggestions. See the
"Contributing" section below.

### To Do

There isn't much of a demonstration of UI Bootstrap. I don't want to pollute the
code with a demo for demo's sake, but I feel we should showcase it in some way.

`ngBoilerplate` should include end-to-end tests. This should happen soon. I just 
haven't had the time.

A new `release` task for Grunt to handle all the Git stuff along with some nice
semantic versioning helpers.

The ability to choose whether to compile templates or leave them for XHR
retrieval.

Lastly, this site should be prettier, but I'm no web designer. Throw me a bone 
here, people!

### Contributing

This is an opinionated kickstarter, but the opinions are fluid and
evidence-based. Don't like the way I did something? Think you know of a better
way? Have an idea to make this more useful? Let me know! You can contact me
through all the usual channels or you can open an issue on the GitHub page. If
you're feeling ambitious, you can even submit a pull request - how thoughtful
of you!

So join the team! We're good people.


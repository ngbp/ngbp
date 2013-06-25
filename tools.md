# The Tools Used in `ngBoilerplate`

## Introduction

`ngBoilerplate` is standards-based, so it uses all the usual tools to manage
and develop client-side code. If you've developed modern, highly-organized
JavaScript projects before, you are probably already familiar with at least most
of these tools. What follows is a simple description of the tools of which this
project makes use and how they fit in to the `ngBoilerplate` picture.

## Git

[Git](http://git-scm.com/) is a distributed version control system.
`ngBoilerplate` uses git to manage its codebase. While in theory you don't have
to use Git once you download `ngBoilerplate`, this project makes the assumption
that you do. If you're on GitHub, I assume you already have a basic
understanding of Git, which is all you need to make effective use of this
project. You just need to be able to commit and push and junk - nothing funky.
If you're not familiar with it, check out the documentation linked to above.
GitHub also has a great [help section](https://help.github.com/).

## Node.js & NPM

[Node.js](http://nodejs.org) is a platform based on Chrome's JavaScript runtime,
called [V8](http://code.google.com/p/v8/). It allows you to develop all kinds of
software using the JavaScript you already know and love.

A great feature of Node.js is its wide variety of existing libraries and tools.
As the developer community is absolutely massive and incredibly active, Node.js
has a basic package manager called NPM that you can use to install Node.js-based
software and libraries from the command line.

While `ngBoilerplate` makes heavy use of Node.js behind the scenes, you as the
application developer don't need to really think about it much. Most of the
interaction with Node.js will occur through Grunt (see next section), so you
really only need to know how get the initial setup working.

`package.json` is an NPM package description file written in JSON. It contains
basic metadata about your application, like its name, version, and dependencies.
By default, several packages are required for the build process to work; so when
you first start with `ngBoilerplate` you have to tell NPM to install the
packages; this is covered in detail in the [main README](README.md). Some of
the required packages are Grunt build tasks (see below), while others are
command-line tools either we (or the build system) need, like Karma, Grunt, and
Bower.

Don't worry about knowing Node.js in order to use `ngBoilerplate`; Grunt is
where the magic happens.

## Grunt.js

[Grunt](http://gruntjs.com) is a JavaScript task runner that runs on top of
Node.js. Most importantly, Grunt brings us automation. There are lots of steps
that go into taking our manageable codebase and making it into a
production-ready website; we must gather, lint, test, annotate, and copy files
about. Instead of doing all of that manually, we write (and use others') Grunt
tasks to do things for us.

When we want to build our site, we can just type:

```sh
$ grunt
```

This will do everything needed and place our built code inside a folder called
`bin/`. Even more magical, we can tell Grunt to watch for file changes we make
so it can re-build our site on-the-fly:

```sh
$ grunt watch
```

The built files will be in `build/`. See the main [README](README.md) for more
info.

The next time we change a source file, Grunt will re-build the changed parts of
the site. If you have a Live Reload plugin installed in your browser, it will
even auto-refresh your browser for you. You lazy bum.

Grunt is controlled through `Gruntfile.js`. This file is heavily documented in
the source, so I will only provide a high-altitude overview here. Also note that
unless you need to modify the build process, you don't need to know anything
else from this section. The two commands above really are all you need to know
to get started with `ngBoilerplate`. But for those curious or looking to go a
little more advanced, here's what you'll find.

First, we tell Grunt which tasks we might want to use:

```js
// ...
grunt.loadNpmTasks('grunt-recess');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-jshint');
// ...
```

Each of these tasks must already be installed. Remember the dependencies from
`package.json` that NPM installed for us? Well, this is where they get used!

Then we get the opportunity to tell the tasks to behave like we want by
defining a configuration object. While we can (and do) define all sorts of
custom configuration values that we reference later on, tasks look for
configuration properties of their own name. For example, the `clean` task just
takes an array of files to delete when the task runs:

```js
clean: [ '<%= build_dir %>', '<%= compile_dir %>' ],
```

In Grunt, the `<%= varName %>` is a way of re-using configuration variables.
In the `build.config.js`, we defined what `build_dir` meant:

```js
build_dir: 'build',
```

When the clean task runs, it will delete the `build/` folder entirely so that
when our new build runs, we don't encounter any problems with stale or old
files. Most tasks, however, have considerably more complicated configuration
requirements, but I've tried to document what each one is doing and what the
configuration properties mean. If I was vague or ambiguous or just plain
unclear, please file an issue and I'll get it fixed. Boom - problem solved.

After our configuration is complete, we can define some of our own tasks. For
example, we could do the build by running all of the separate tasks that we
installed from NPM and configured as above:

```sh
$ grunt clean
$ grunt html2js
$ grunt jshint
$ grunt karma:continuous
$ grunt concat
$ grunt ngmin:dist
$ grunt uglify
$ grunt recess
$ grunt index
$ grunt copy
```

But how automated is that? So instead we define a composite task that executes
all that for us. The commands above make up the `default` tasks, which can be
run by typing *either* of these commands:

```js
$ grunt
$ grunt default
```

We also define the `watch` task discussed earlier. This is covered in more
detail in the main (README)[README.md].

Grunt is the engine behind `ngBoilerplate`. It's the magic that makes it move.
Just getting started, you won't need to alter `Gruntfile.js` at all, but
as you get into more advanced application development, you will probably need to
add more tasks and change some steps around to make this build your own.
Hopefully, this readme and the documentation within `Gruntfile.js` (as well as
of course the documentation at gruntjs.com) will set you on the right path.

## Bower

[Bower](bower.io) is a package manager for the web. It's similar in many
respects to NPM, though it is significantly simpler and only contains code for
web projects, like Twitter Bootstrap and its AngularJS counterpart Angular
Bootstrap. Bower allows us to say that our app depends in some way on these
other libraries so that we can manage all of them in one simple place.

`ngBoilerplate` comes with a `bower.json` file that looks something like this:

```js
{
  "name": "ng-boilerplate",
  "version": "0.2.0-SNAPSHOT",
  "devDependencies": {
    "angular": "~1.0.7",
    "angular-mocks": "~1.0.7",
    "bootstrap": "~2.3.2",
    "angular-bootstrap": "~0.3.0",
    "angular-ui-router": "~0.0.1",
    "angular-ui-utils": "~0.0.3"
  },
  "dependencies": {}
}
```

This file is fairly self-explanatory; it gives the package name and version
(duplicated from `package.json`, but this is unavoidable) as well as a list of
dependencies our application needs in order to work. If we simply call

```sh
$ bower install
```

it will read these three dependencies and install them into the `vendor/` folder
(along with any dependencies they have) so that we can use them in our app. If
we want to add a new package like AngularUI's
[ngGrid](http://angular-ui.github.io/ng-grid/), then we can tell Bower to
install that from the web, place it into the `vendor/` folder for us to use, and
then add it as a dependency to `bower.json`:

```js
$ bower install angular-grid --save-dev
```

Bower can also update all of our packages for us at a later date, though that
and its many other awesome features are beyond the scope of this simple
overview.

One last thing to note is that packages installed with Bower are not
standardized, so we cannot automatically add them to the build process; anything
installed with Bower (or placed in the `vendor/` directory manually) *must* be
added to your `build.config.js` file manually; look for the Bower libs included
in `ngBoilerplate` by default in there to see what I mean.

## Where to Go From Here

That's it! Now that you have a basic understanding of the tools involved, read
through the [main README](README.md) to dive another level deeper and apply what
you've learned for great good. I promise it will all make sense it short order.

Happy programming!


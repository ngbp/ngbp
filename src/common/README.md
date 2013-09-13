# The `src/common/` Directory

The `src/common/` directory houses internal and third-party re-usable
components. Essentially, this folder is for everything that isn't completely
specific to this application.

Each component resides in its own directory that may then be structured any way
the developer desires. The build system will read all `*.js` files that do not
end in `.spec.js` as source files to be included in the final build, all
`*.spec.js` files as unit tests to be executed, and all `*.tpl.html` files as
templates to compiled into the `$templateCache`. There is currently no way to
handle components that do not meet this pattern.

```
src/
  |- common/
  |  |- plusOne/
```

- `plusOne` - a simple directive to load a Google +1 Button on an element.

Every component contained here should be drag-and-drop reusable in any other 
project; they should depend on no other components that aren't similarly 
drag-and-drop reusable.

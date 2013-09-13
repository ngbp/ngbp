# The `src/less` Directory

This folder is actually fairly self-explanatory: it contains your LESS/CSS files to be compiled during the build. 
The only important thing to note is that *only* `main.less` will be processed during the build, meaning that all
other stylesheets must be *imported* into that one.

This should operate somewhat like the routing; the `main.less` file contains all of the site-wide styles, while
any styles that are route-specific should be imported into here from LESS files kept alongside the JavaScript
and HTML sources of that component. For example, the `home` section of the site has some custom styles, which
are imported like so:

```css
@import '../app/home/home.less';
```

The same principal, though not demonstrated in the code, would also apply to reusable components. CSS or LESS
files from external components would also be imported. If, for example, we had a Twitter feed directive with
an accompanying template and style, we would similarly import it:

```css
@import '../common/twitterFeed/twitterFeedDirective.less';
```

Using this decentralized approach for all our code (JavaScript, HTML, and CSS) creates a framework where a
component's directory can be dragged and dropped into *any other project* and it will "just work".

I would like to eventually automate the importing during the build so that manually importing it here would no
longer be required, but more thought must be put in to whether this is the best approach.

(function (window, angular, undefined) {
  angular.module('ngBoilerplate.about', [
    'placeholders',
    'ui.bootstrap',
    'titleService'
  ]).config([
    '$routeProvider',
    function config($routeProvider) {
      $routeProvider.when('/about', {
        controller: 'AboutCtrl',
        templateUrl: 'about/about.tpl.html'
      });
    }
  ]).controller('AboutCtrl', [
    '$scope',
    'titleService',
    function AboutCtrl($scope, titleService) {
      titleService.setTitle('What is It?');
      $scope.dropdownDemoItems = [
        'The first choice!',
        'And another choice for you.',
        'but wait! A third!'
      ];
    }
  ]);
  ;
  angular.module('ngBoilerplate', [
    'app-templates',
    'component-templates',
    'ngBoilerplate.home',
    'ngBoilerplate.about',
    'ui.route'
  ]).config([
    '$routeProvider',
    function myAppConfig($routeProvider) {
      $routeProvider.otherwise({ redirectTo: '/home' });
    }
  ]).run([
    'titleService',
    function run(titleService) {
      titleService.setSuffix(' | ngBoilerplate');
    }
  ]).controller('AppCtrl', [
    '$scope',
    '$location',
    function AppCtrl($scope, $location) {
    }
  ]);
  ;
  angular.module('ngBoilerplate.home', [
    'titleService',
    'plusOne'
  ]).config([
    '$routeProvider',
    function config($routeProvider) {
      $routeProvider.when('/home', {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      });
    }
  ]).controller('HomeCtrl', [
    '$scope',
    'titleService',
    function HomeController($scope, titleService) {
      titleService.setTitle('Home');
    }
  ]);
  ;
  angular.module('plusOne', []).directive('plusOne', function () {
    return {
      link: function (scope, element, attrs) {
        gapi.plusone.render(element[0], {
          'size': 'medium',
          'href': 'http://bit.ly/ngBoilerplate'
        });
      }
    };
  });
  ;
  angular.module('titleService', []).factory('titleService', [
    '$document',
    function ($document) {
      var suffix, title;
      var titleService = {
          setSuffix: function setSuffix(s) {
            suffix = s;
          },
          getSuffix: function getSuffix() {
            return suffix;
          },
          setTitle: function setTitle(t) {
            if (angular.isDefined(suffix)) {
              title = t + suffix;
            } else {
              title = t;
            }
            $document.prop('title', title);
          },
          getTitle: function getTitle() {
            return $document.prop('title');
          }
        };
      return titleService;
    }
  ]);
  ;
  angular.module('about/about.tpl.html', []).run([
    '$templateCache',
    function ($templateCache) {
      $templateCache.put('about/about.tpl.html', '<div class="row-fluid">' + '  <h1 class="page-header">' + '    The Elevator Pitch' + '    <small>For the lazy and impatient.</small>' + '  </h1>' + '  <p>' + '    <code>ng-boilerplate</code> is an opinionated kickstarter for web' + '    development projects. It\'s an attempt to create a simple starter for new' + '    web sites and apps: just download it and start coding. The goal is to' + '    have everything you need to get started out of the box; of course it has' + '    slick styles and icons, but it also has a best practice directory structure' + '    to ensure maximum code reuse. And it\'s all tied together with a robust' + '    build system chock-full of some time-saving goodness.' + '  </p>' + '' + '  <h2>Why?</h2>' + '' + '  <p>' + '    Because my team and I make web apps, and ' + '    last year AngularJS became our client-side framework of choice. We start' + '    websites the same way every time: create a directory structure, copy and' + '    ever-so-slightly tweak some config files from an older project, and yada' + '    yada, etc., and so on and so forth. Why are we repeating ourselves? We wanted a starting point; a set of' + '    best practices that we could identify our projects as embodying and a set of' + '    time-saving wonderfulness, because time is money.' + '  </p>' + '' + '  <p>' + '    There are other similar projects out there, but none of them suited our' + '    needs. Some are awesome but were just too much, existing more as reference' + '    implementations, when we really just wanted a kickstarter. Others were just' + '    too little, with puny build systems and unscalable architectures.  So we' + '    designed <code>ng-boilerplate</code> to be just right.' + '  </p>' + '' + '  <h2>What ng-boilerplate Is Not</h2>' + '' + '  <p>' + '    This is not an example of an AngularJS app. This is a kickstarter. If' + '    you\'re looking for an example of what a complete, non-trivial AngularJS app' + '    that does something real looks like, complete with a REST backend and' + '    authentication and authorization, then take a look at <code><a' + '        href="https://github.com/angular-app/angular-app/">angular-app</a></code>, ' + '    which does just that, and does it well.' + '  </p>' + '' + '  <h1 class="page-header">' + '    So What\'s Included?' + '    <small>I\'ll try to be more specific than "awesomeness".</small>' + '  </h1>' + '  <p>' + '    This section is just a quick introduction to all the junk that comes' + '    pre-packaged with <code>ng-boilerplate</code>. For information on how to' + '    use it, see the <a' + '      href="https://github.com/joshdmiller/ng-boilerplate#readme">project page</a> at' + '    GitHub.' + '  </p>' + '' + '  <p>' + '    The high-altitude view is that the base project includes ' + '    <a href="http://getbootstrap.com">Twitter Bootstrap</a>' + '    styles to quickly produce slick-looking responsive web sites and apps. It also' + '    includes <a href="http://angular-ui.github.com/bootstrap">UI Bootstrap</a>,' + '    a collection of native AngularJS directives based on the aforementioned' + '    templates and styles. It also includes <a href="http://fortawesome.github.com/Font-Awesome/">Font Awesome</a>,' + '    a wicked-cool collection of font-based icons that work swimmingly with all' + '    manner of web projects; in fact, all images on the site are actually font-' + '    based icons from Font Awesome. Neat! Lastly, this also includes' + '    <a href="http://joshdmiller.github.com/angular-placeholders">Angular Placeholders</a>,' + '    a set of pure AngularJS directives to do client-side placeholder images and' + '    text to make mocking user interfaces super easy.' + '  </p>' + '' + '  <p>' + '    And everything just works (assuming there were no breaking changes in the' + '    latest release of Bootstrap). Boom. Like that.' + '  </p>' + '' + '  <p>' + '    And, of course, <code>ng-boilerplate</code> is built on <a href="http://angularjs.org">AngularJS</a>,' + '    by the far the best JavaScript framework out there! But if you don\'t know' + '    that already, then how did you get here? Well, no matter - just drink the' + '    Kool Aid. Do it. You know you want to.' + '  </p>' + '  ' + '  <h2>Twitter Bootstrap</h2>' + '' + '  <p>' + '    You already know about this, right? If not, <a' + '      href="http://getbootstrap.com">hop on over</a> and check it out; it\'s' + '    pretty sweet. Anyway, all that wonderful stylistic goodness comes built in.' + '    The LESS files are available for you to import in your main stylesheet as' + '    needed - no excess, no waste. There is also a dedicated place to override' + '    variables and mixins to suit your specific needs, so updating to the latest' + '    version of Bootstrap is as simple as: ' + '  </p>' + '' + '  <pre>$ cd vendor/twitter-bootstrap<br />$ git pull origin master</pre>' + '' + '  <p>' + '    Boom! And victory is ours.' + '  </p>' + '' + '  <h2>UI Bootstrap</h2>' + '' + '  <p>' + '    What\'s better than Bootstrap styles? Bootstrap directives!  The fantastic <a href="http://angular-ui.github.com/bootstrap">UI Bootstrap</a>' + '    library contains a set of native AngularJS directives that are endlessly' + '    extensible. You get the tabs, the tooltips, the accordions. You get your' + '    carousel, your modals, your pagination. And <i>more</i>.' + '    How about a quick demo? ' + '  </p>' + '' + '  <ul>' + '    <li class="dropdown">' + '      <a class="btn dropdown-toggle">' + '        Click me!' + '      </a>' + '      <ul class="dropdown-menu">' + '        <li ng-repeat="choice in dropdownDemoItems">' + '          <a>{{choice}}</a>' + '        </li>' + '      </ul>' + '    </li>' + '  </ul>' + '' + '  <p>' + '    Oh, and don\'t include jQuery;  ' + '    you don\'t need it.' + '    This is better.' + '    Don\'t be one of those people. <sup>*</sup>' + '  </p>' + '' + '  <p><small><sup>*</sup> Yes, there are exceptions.</small></p>' + '' + '  <h2>Font Awesome</h2>' + '' + '  <p>' + '    Font Awesome has earned its label. It\'s a set of open (!) icons that come' + '    distributed as a font (!) for super-easy, lightweight use. Font Awesome ' + '    works really well with Twitter Bootstrap, and so fits right in here.' + '  </p>' + '' + '  <p>' + '    There is not a single image on this site. All of the little images and icons ' + '    are drawn through Font Awesome! All it takes is a little class:' + '  </p>' + '' + '  <pre>&lt;i class="icon-flag"&gt;&lt/i&gt</pre>' + '' + '  <p>' + '    And you get one of these: <i class="icon-flag"> </i>. Neat!' + '  </p>' + '' + '  <h2>Placeholders</h2>' + '' + '  <p>' + '    Angular Placeholders is a simple library for mocking up text and images. You' + '    can automatically throw around some "lorem ipsum" text:' + '  </p>' + '' + '  <pre>&lt;p ph-txt="3s"&gt;&lt;/p&gt;</pre>' + '' + '  <p>' + '    Which gives you this:' + '  </p>' + '' + '  <div class="pre">' + '    &lt;p&gt;' + '    <p ph-txt="3s"></p>' + '    &lt;/p&gt;' + '  </div>' + '' + '  <p>' + '    Even more exciting, you can also create placeholder images, entirely ' + '    client-side! For example, this:' + '  </p>' + '  ' + '  <pre>' + '&lt;img ph-img="50x50" /&gt;<br />' + '&lt;img ph-img="50x50" class="img-polaroid" /&gt;<br />' + '&lt;img ph-img="50x50" class="img-rounded" /&gt;<br />' + '&lt;img ph-img="50x50" class="img-circle" /&gt;' + '  </pre>' + '' + '  <p>' + '    Gives you this:' + '  </p>' + '' + '  <div>' + '    <img ph-img="50x50" />' + '    <img ph-img="50x50" class="img-polaroid" />' + '    <img ph-img="50x50" class="img-rounded" />' + '    <img ph-img="50x50" class="img-circle" />' + '  </div>' + '' + '  <p>' + '    Which is awesome.' + '  </p>' + '' + '  <h1 class="page-header">' + '    The Roadmap' + '    <small>Really? What more could you want?</small>' + '  </h1>' + '' + '  <p>' + '    This is a project that is <i>not</i> broad in scope, so there\'s not really' + '    much of a wish list here. But I would like to see a couple of things:' + '  </p>' + '' + '  <p>' + '    I\'d like it to be a little simpler. I want this to be a universal starting' + '    point. If someone is starting a new AngularJS project, she should be able to' + '    clone, merge, or download its source and immediately start doing what she' + '    needs without renaming a bunch of files and methods or deleting spare parts' + '    ... like this page. This works for a first release, but I just think there' + '    is a little too much here right now.' + '  </p>' + '' + '  <p>' + '    I\'d also like to see a simple generator. Nothing like <a href="yeoman.io">' + '    Yeoman</a>, as there already is one of those, but just something that' + '    says "I want Bootstrap but not Font Awesome and my app is called \'coolApp\'.' + '    Gimme." Perhaps a custom download builder like UI Bootstrap' + '    has. Like that. Then again, perhaps some Yeoman generators wouldn\'t be out' + '    of line. I don\'t know. What do you think?' + '  </p>' + '' + '  <p>' + '    Naturally, I am open to all manner of ideas and suggestions. See the "Can I' + '    Help?" section below.' + '  </p>' + '' + '  <h2>The Tactical To Do List</h2>' + '' + '  <p>' + '    There isn\'t much of a demonstration of UI Bootstrap. I don\'t want to pollute' + '    the code with a demo for demo\'s sake, but I feel we should showcase it in' + '    <i>some</i> way.' + '  </p>' + '' + '  <p>' + '    <code>ng-boilerplate</code> should include end-to-end tests. This should' + '    happen soon. I just haven\'t had the time.' + '  </p>' + '' + '  <p>' + '    Lastly, this site should be prettier, but I\'m no web designer. Throw me a' + '    bone here, people!' + '  </p>' + '' + '  <h2>Can I Help?</h2>' + '' + '  <p>' + '    Yes, please!' + '  </p>' + '' + '  <p>' + '    This is an opinionated kickstarter, but the opinions are fluid and' + '    evidence-based. Don\'t like the way I did something? Think you know of a' + '    better way? Have an idea to make this more useful? Let me know! You can' + '    contact me through all the usual channels or you can open an issue on the' + '    GitHub page. If you\'re feeling ambitious, you can even submit a pull' + '    request - how thoughtful of you!' + '  </p>' + '' + '  <p>' + '    So join the team! We\'re good people.' + '  </p>' + '</div>' + '' + '');
    }
  ]);
  angular.module('app-templates', [
    'about/about.tpl.html',
    'home/home.tpl.html'
  ]);
  angular.module('component-templates', []);
  angular.module('home/home.tpl.html', []).run([
    '$templateCache',
    function ($templateCache) {
      $templateCache.put('home/home.tpl.html', '<div class="jumbotron">' + '  <h1>Non-Trivial AngularJS Made Easy</h1>' + '' + '  <p class="lead">' + '    Everything you need to kickstart AngularJS projects: a best-practice' + '    directory structure, an intelligent build system, and the best web design' + '    libraries around.' + '  </p>' + '' + '  <ul class="inline social-buttons">' + '    <li>' + '      <iframe ' + '        src="http://ghbtns.com/github-btn.html?user=joshdmiller&amp;repo=ng-boilerplate&amp;type=watch&amp;count=true" ' + '        allowtransparency="true" ' + '        frameborder="0" ' + '        scrolling="0" ' + '        width="110" ' + '        height="20">' + '      </iframe>' + '    </li>' + '    <li>' + '      <iframe ' + '        src="http://ghbtns.com/github-btn.html?user=joshdmiller&amp;repo=ng-boilerplate&amp;type=fork&amp;count=true" ' + '        allowtransparency="true" ' + '        frameborder="0" ' + '        scrolling="0" ' + '        width="95" ' + '        height="20">' + '      </iframe>' + '    </li>' + '    <li>' + '       <iframe allowtransparency="true" frameborder="0" scrolling="no"' + '        src="https://platform.twitter.com/widgets/tweet_button.html?url=http%3A%2F%2Fbit.ly%2FngBoilerplate&counturl=http%3A%2F%2Fjoshdmiller.github.com%2Fng-boilerplate&text=Check%20out%20ng-boilerplate%20-%20an%20awesome%20kickstarter%20for%20web%20projects%20%7C&hashtags=angularjs&via=joshdmiller&related=joshdmiller"' + '        style="width:130px; height:20px;"></iframe>' + '    </li>' + '    <li plus-one></li>' + '  </ul> ' + '  ' + '  <div class="btn-group">' + '    <a href="https://github.com/joshdmiller/ng-boilerplate#readme" class="btn btn-large">' + '      <i class="icon-book"></i>' + '      Read the Docs' + '    </a>' + '    <a href="https://github.com/joshdmiller/ng-boilerplate" class="btn btn-large btn-success">' + '      <i class="icon-download"></i>' + '      Download' + '    </a>' + '  </div>' + '' + '</div>' + '' + '<div class="marketing">' + '  <div class="row">' + '    <div class="span4">' + '      <h4><i class="icon-thumbs-up"></i> Good to Go!</h4>' + '      <p>' + '        Kickstarts your project quickly, with everything you need, so you can ' + '        focus on what matters: your app.' + '      </p>' + '    </div>' + '    <div class="span4">' + '      <h4><i class="icon-magic"></i> Complete Build System</h4>' + '      <p>' + '        A smart, <a href="http://gruntjs.com">Grunt</a>-based build system ' + '        designed to save you time and energy.' + '      </p>' + '    </div>' + '    <div class="span4">' + '      <h4><i class="icon-retweet"></i> Modularization</h4>' + '      <p>' + '        Supports a structure that maintains separation of concerns while' + '        ensuring maximum code reuse.' + '      </p>' + '    </div>' + '  </div>' + '  <div class="row">' + '    <div class="span4">' + '      <h4><i class="icon-star"></i> AngularJS</h4>' + '      <p>' + '        JavaScript framework that augments browser-based, single-page ' + '        applications with MVC functionality.' + '        <a href="http://angularjs.org">More &raquo;</a>' + '      </p>' + '    </div>' + '    <div class="span4">' + '      <h4><i class="icon-resize-small"></i> LESS CSS</h4>' + '      <p>' + '        The dynamic stylesheet language that extends CSS with efficiency.' + '        <a href="http://lesscss.org">More &raquo;</a>' + '      </p>' + '    </div>' + '    <div class="span4">' + '      <h4><i class="icon-twitter"></i> Twitter Bootstrap</h4>' + '      <p>' + '        Sleek, intuitive, and powerful front-end framework for faster and easier' + '        web development.' + '        <a href="http://getbootstrap.com">More &raquo;</a>' + '      </p>' + '    </div>' + '  </div>' + '  <div class="row">' + '    <div class="span4">' + '      <h4><i class="icon-circle"></i> Angular UI Bootstrap</h4>' + '      <p>' + '        Pure AngularJS components for Bootstrap written by the ' + '        <a href="https://github.com/angular-ui?tab=members">AngularUI Team</a>.' + '        <a href="http://angular-ui.github.com/bootstrap">More &raquo;</a>' + '      </p>' + '    </div>' + '    <div class="span4">' + '      <h4><i class="icon-flag"></i> Font Awesome</h4>' + '      <p>' + '        The iconic font designed for use with Twitter Bootstrap.' + '        <a href="http://fortawesome.github.com/Font-Awesome">' + '          More &raquo;' + '        </a>' + '      </p>' + '    </div>' + '    <div class="span4">' + '      <h4><i class="icon-asterisk"></i> Placeholders</h4>' + '      <p>' + '        Client-side image and text placeholder directives written in pure ' + '        AngularJS to make designing mock-ups wicked-fast.' + '        <a href="http://joshdmiller.github.com/angular-placeholders">' + '          More &raquo;' + '        </a>' + '      </p>' + '    </div>' + '  </div>' + '</div>' + '' + '');
    }
  ]);
  angular.module('ui.bootstrap', [
    'ui.bootstrap.tpls',
    'ui.bootstrap.transition',
    'ui.bootstrap.collapse',
    'ui.bootstrap.accordion',
    'ui.bootstrap.alert',
    'ui.bootstrap.buttons',
    'ui.bootstrap.carousel',
    'ui.bootstrap.dialog',
    'ui.bootstrap.dropdownToggle',
    'ui.bootstrap.modal',
    'ui.bootstrap.pagination',
    'ui.bootstrap.position',
    'ui.bootstrap.tooltip',
    'ui.bootstrap.popover',
    'ui.bootstrap.progressbar',
    'ui.bootstrap.rating',
    'ui.bootstrap.tabs',
    'ui.bootstrap.typeahead'
  ]), angular.module('ui.bootstrap.tpls', [
    'template/accordion/accordion-group.html',
    'template/accordion/accordion.html',
    'template/alert/alert.html',
    'template/carousel/carousel.html',
    'template/carousel/slide.html',
    'template/dialog/message.html',
    'template/pagination/pagination.html',
    'template/tooltip/tooltip-html-unsafe-popup.html',
    'template/tooltip/tooltip-popup.html',
    'template/popover/popover.html',
    'template/progressbar/bar.html',
    'template/progressbar/progress.html',
    'template/rating/rating.html',
    'template/tabs/pane.html',
    'template/tabs/tabs.html',
    'template/typeahead/typeahead.html'
  ]), angular.module('ui.bootstrap.transition', []).factory('$transition', [
    '$q',
    '$timeout',
    '$rootScope',
    function (t, e, n) {
      function o(t) {
        for (var e in t)
          if (void 0 !== i.style[e])
            return t[e];
      }
      var a = function (o, i, r) {
          r = r || {};
          var l = t.defer(), s = a[r.animation ? 'animationEndEventName' : 'transitionEndEventName'], c = function () {
              n.$apply(function () {
                o.unbind(s, c), l.resolve(o);
              });
            };
          return s && o.bind(s, c), e(function () {
            angular.isString(i) ? o.addClass(i) : angular.isFunction(i) ? i(o) : angular.isObject(i) && o.css(i), s || l.resolve(o);
          }), l.promise.cancel = function () {
            s && o.unbind(s, c), l.reject('Transition cancelled');
          }, l.promise;
        }, i = document.createElement('trans'), r = {
          WebkitTransition: 'webkitTransitionEnd',
          MozTransition: 'transitionend',
          OTransition: 'oTransitionEnd',
          transition: 'transitionend'
        }, l = {
          WebkitTransition: 'webkitAnimationEnd',
          MozTransition: 'animationend',
          OTransition: 'oAnimationEnd',
          transition: 'animationend'
        };
      return a.transitionEndEventName = o(r), a.animationEndEventName = o(l), a;
    }
  ]), angular.module('ui.bootstrap.collapse', ['ui.bootstrap.transition']).directive('collapse', [
    '$transition',
    function (t) {
      var e = function (t, e, n) {
        e.removeClass('collapse'), e.css({ height: n }), e[0].offsetWidth, e.addClass('collapse');
      };
      return {
        link: function (n, o, a) {
          var i, r = !0;
          n.$watch(function () {
            return o[0].scrollHeight;
          }, function () {
            0 !== o[0].scrollHeight && (i || (r ? e(n, o, o[0].scrollHeight + 'px') : e(n, o, 'auto')));
          }), n.$watch(a.collapse, function (t) {
            t ? u() : c();
          });
          var l, s = function (e) {
              return l && l.cancel(), l = t(o, e), l.then(function () {
                l = void 0;
              }, function () {
                l = void 0;
              }), l;
            }, c = function () {
              r ? (r = !1, i || e(n, o, 'auto')) : s({ height: o[0].scrollHeight + 'px' }).then(function () {
                i || e(n, o, 'auto');
              }), i = !1;
            }, u = function () {
              i = !0, r ? (r = !1, e(n, o, 0)) : (e(n, o, o[0].scrollHeight + 'px'), s({ height: '0' }));
            };
        }
      };
    }
  ]), angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse']).constant('accordionConfig', { closeOthers: !0 }).controller('AccordionController', [
    '$scope',
    '$attrs',
    'accordionConfig',
    function (t, e, n) {
      this.groups = [], this.closeOthers = function (o) {
        var a = angular.isDefined(e.closeOthers) ? t.$eval(e.closeOthers) : n.closeOthers;
        a && angular.forEach(this.groups, function (t) {
          t !== o && (t.isOpen = !1);
        });
      }, this.addGroup = function (t) {
        var e = this;
        this.groups.push(t), t.$on('$destroy', function () {
          e.removeGroup(t);
        });
      }, this.removeGroup = function (t) {
        var e = this.groups.indexOf(t);
        -1 !== e && this.groups.splice(this.groups.indexOf(t), 1);
      };
    }
  ]).directive('accordion', function () {
    return {
      restrict: 'EA',
      controller: 'AccordionController',
      transclude: !0,
      replace: !1,
      templateUrl: 'template/accordion/accordion.html'
    };
  }).directive('accordionGroup', [
    '$parse',
    '$transition',
    '$timeout',
    function (t) {
      return {
        require: '^accordion',
        restrict: 'EA',
        transclude: !0,
        replace: !0,
        templateUrl: 'template/accordion/accordion-group.html',
        scope: { heading: '@' },
        controller: [
          '$scope',
          function () {
            this.setHeading = function (t) {
              this.heading = t;
            };
          }
        ],
        link: function (e, n, o, a) {
          var i, r;
          a.addGroup(e), e.isOpen = !1, o.isOpen && (i = t(o.isOpen), r = i.assign, e.$watch(function () {
            return i(e.$parent);
          }, function (t) {
            e.isOpen = t;
          }), e.isOpen = i ? i(e.$parent) : !1), e.$watch('isOpen', function (t) {
            t && a.closeOthers(e), r && r(e.$parent, t);
          });
        }
      };
    }
  ]).directive('accordionHeading', function () {
    return {
      restrict: 'E',
      transclude: !0,
      template: '',
      replace: !0,
      require: '^accordionGroup',
      compile: function (t, e, n) {
        return function (t, e, o, a) {
          a.setHeading(n(t, function () {
          }));
        };
      }
    };
  }).directive('accordionTransclude', function () {
    return {
      require: '^accordionGroup',
      link: function (t, e, n, o) {
        t.$watch(function () {
          return o[n.accordionTransclude];
        }, function (t) {
          t && (e.html(''), e.append(t));
        });
      }
    };
  }), angular.module('ui.bootstrap.alert', []).directive('alert', function () {
    return {
      restrict: 'EA',
      templateUrl: 'template/alert/alert.html',
      transclude: !0,
      replace: !0,
      scope: {
        type: '=',
        close: '&'
      },
      link: function (t, e, n) {
        t.closeable = 'close' in n;
      }
    };
  }), angular.module('ui.bootstrap.buttons', []).constant('buttonConfig', {
    activeClass: 'active',
    toggleEvent: 'click'
  }).directive('btnRadio', [
    'buttonConfig',
    function (t) {
      var e = t.activeClass || 'active', n = t.toggleEvent || 'click';
      return {
        require: 'ngModel',
        link: function (t, o, a, i) {
          var r = t.$eval(a.btnRadio);
          t.$watch(function () {
            return i.$modelValue;
          }, function (t) {
            angular.equals(t, r) ? o.addClass(e) : o.removeClass(e);
          }), o.bind(n, function () {
            o.hasClass(e) || t.$apply(function () {
              i.$setViewValue(r);
            });
          });
        }
      };
    }
  ]).directive('btnCheckbox', [
    'buttonConfig',
    function (t) {
      var e = t.activeClass || 'active', n = t.toggleEvent || 'click';
      return {
        require: 'ngModel',
        link: function (t, o, a, i) {
          var r = t.$eval(a.btnCheckboxTrue), l = t.$eval(a.btnCheckboxFalse);
          r = angular.isDefined(r) ? r : !0, l = angular.isDefined(l) ? l : !1, t.$watch(function () {
            return i.$modelValue;
          }, function (t) {
            angular.equals(t, r) ? o.addClass(e) : o.removeClass(e);
          }), o.bind(n, function () {
            t.$apply(function () {
              i.$setViewValue(o.hasClass(e) ? l : r);
            });
          });
        }
      };
    }
  ]), angular.module('ui.bootstrap.carousel', ['ui.bootstrap.transition']).controller('CarouselController', [
    '$scope',
    '$timeout',
    '$transition',
    '$q',
    function (t, e, n) {
      function o() {
        function n() {
          i ? (t.next(), o()) : t.pause();
        }
        a && e.cancel(a);
        var r = +t.interval;
        !isNaN(r) && r >= 0 && (a = e(n, r));
      }
      var a, i, r = this, l = r.slides = [], s = -1;
      r.currentSlide = null, r.select = function (a, i) {
        function c() {
          r.currentSlide && angular.isString(i) && !t.noTransition && a.$element ? (a.$element.addClass(i), a.$element[0].offsetWidth = a.$element[0].offsetWidth, angular.forEach(l, function (t) {
            angular.extend(t, {
              direction: '',
              entering: !1,
              leaving: !1,
              active: !1
            });
          }), angular.extend(a, {
            direction: i,
            active: !0,
            entering: !0
          }), angular.extend(r.currentSlide || {}, {
            direction: i,
            leaving: !0
          }), t.$currentTransition = n(a.$element, {}), function (e, n) {
            t.$currentTransition.then(function () {
              u(e, n);
            }, function () {
              u(e, n);
            });
          }(a, r.currentSlide)) : u(a, r.currentSlide), r.currentSlide = a, s = p, o();
        }
        function u(e, n) {
          angular.extend(e, {
            direction: '',
            active: !0,
            leaving: !1,
            entering: !1
          }), angular.extend(n || {}, {
            direction: '',
            active: !1,
            leaving: !1,
            entering: !1
          }), t.$currentTransition = null;
        }
        var p = l.indexOf(a);
        void 0 === i && (i = p > s ? 'next' : 'prev'), a && a !== r.currentSlide && (t.$currentTransition ? (t.$currentTransition.cancel(), e(c)) : c());
      }, r.indexOfSlide = function (t) {
        return l.indexOf(t);
      }, t.next = function () {
        var t = (s + 1) % l.length;
        return r.select(l[t], 'next');
      }, t.prev = function () {
        var t = 0 > s - 1 ? l.length - 1 : s - 1;
        return r.select(l[t], 'prev');
      }, t.select = function (t) {
        r.select(t);
      }, t.isActive = function (t) {
        return r.currentSlide === t;
      }, t.slides = function () {
        return l;
      }, t.$watch('interval', o), t.play = function () {
        i || (i = !0, o());
      }, t.pause = function () {
        i = !1, a && e.cancel(a);
      }, r.addSlide = function (e, n) {
        e.$element = n, l.push(e), 1 === l.length || e.active ? (r.select(l[l.length - 1]), 1 == l.length && t.play()) : e.active = !1;
      }, r.removeSlide = function (t) {
        var e = l.indexOf(t);
        l.splice(e, 1), l.length > 0 && t.active && (e >= l.length ? r.select(l[e - 1]) : r.select(l[e]));
      };
    }
  ]).directive('carousel', [function () {
      return {
        restrict: 'EA',
        transclude: !0,
        replace: !0,
        controller: 'CarouselController',
        require: 'carousel',
        templateUrl: 'template/carousel/carousel.html',
        scope: {
          interval: '=',
          noTransition: '='
        }
      };
    }]).directive('slide', [function () {
      return {
        require: '^carousel',
        restrict: 'EA',
        transclude: !0,
        replace: !0,
        templateUrl: 'template/carousel/slide.html',
        scope: { active: '=' },
        link: function (t, e, n, o) {
          o.addSlide(t, e), t.$on('$destroy', function () {
            o.removeSlide(t);
          }), t.$watch('active', function (e) {
            e && o.select(t);
          });
        }
      };
    }]);
  var dialogModule = angular.module('ui.bootstrap.dialog', ['ui.bootstrap.transition']);
  dialogModule.controller('MessageBoxController', [
    '$scope',
    'dialog',
    'model',
    function (t, e, n) {
      t.title = n.title, t.message = n.message, t.buttons = n.buttons, t.close = function (t) {
        e.close(t);
      };
    }
  ]), dialogModule.provider('$dialog', function () {
    var t = {
        backdrop: !0,
        dialogClass: 'modal',
        backdropClass: 'modal-backdrop',
        transitionClass: 'fade',
        triggerClass: 'in',
        dialogOpenClass: 'modal-open',
        resolve: {},
        backdropFade: !1,
        dialogFade: !1,
        keyboard: !0,
        backdropClick: !0
      }, e = {}, n = { value: 0 };
    this.options = function (t) {
      e = t;
    }, this.$get = [
      '$http',
      '$document',
      '$compile',
      '$rootScope',
      '$controller',
      '$templateCache',
      '$q',
      '$transition',
      '$injector',
      function (o, a, i, r, l, s, c, u, p) {
        function d(t) {
          var e = angular.element('<div>');
          return e.addClass(t), e;
        }
        function f(n) {
          var o = this, a = this.options = angular.extend({}, t, e, n);
          this._open = !1, this.backdropEl = d(a.backdropClass), a.backdropFade && (this.backdropEl.addClass(a.transitionClass), this.backdropEl.removeClass(a.triggerClass)), this.modalEl = d(a.dialogClass), a.dialogFade && (this.modalEl.addClass(a.transitionClass), this.modalEl.removeClass(a.triggerClass)), this.handledEscapeKey = function (t) {
            27 === t.which && (o.close(), t.preventDefault(), o.$scope.$apply());
          }, this.handleBackDropClick = function (t) {
            o.close(), t.preventDefault(), o.$scope.$apply();
          }, this.handleLocationChange = function () {
            o.close();
          };
        }
        var g = a.find('body');
        return f.prototype.isOpen = function () {
          return this._open;
        }, f.prototype.open = function (t, e) {
          var n = this, o = this.options;
          if (t && (o.templateUrl = t), e && (o.controller = e), !o.template && !o.templateUrl)
            throw Error('Dialog.open expected template or templateUrl, neither found. Use options or open method to specify them.');
          return this._loadResolves().then(function (t) {
            var e = t.$scope = n.$scope = t.$scope ? t.$scope : r.$new();
            if (n.modalEl.html(t.$template), n.options.controller) {
              var o = l(n.options.controller, t);
              n.modalEl.children().data('ngControllerController', o);
            }
            i(n.modalEl)(e), n._addElementsToDom(), g.addClass(n.options.dialogOpenClass), setTimeout(function () {
              n.options.dialogFade && n.modalEl.addClass(n.options.triggerClass), n.options.backdropFade && n.backdropEl.addClass(n.options.triggerClass);
            }), n._bindEvents();
          }), this.deferred = c.defer(), this.deferred.promise;
        }, f.prototype.close = function (t) {
          function e(t) {
            t.removeClass(o.options.triggerClass);
          }
          function n() {
            o._open && o._onCloseComplete(t);
          }
          var o = this, a = this._getFadingElements();
          if (g.removeClass(o.options.dialogOpenClass), a.length > 0)
            for (var i = a.length - 1; i >= 0; i--)
              u(a[i], e).then(n);
          else
            this._onCloseComplete(t);
        }, f.prototype._getFadingElements = function () {
          var t = [];
          return this.options.dialogFade && t.push(this.modalEl), this.options.backdropFade && t.push(this.backdropEl), t;
        }, f.prototype._bindEvents = function () {
          this.options.keyboard && g.bind('keydown', this.handledEscapeKey), this.options.backdrop && this.options.backdropClick && this.backdropEl.bind('click', this.handleBackDropClick), this.$scope.$on('$locationChangeSuccess', this.handleLocationChange);
        }, f.prototype._unbindEvents = function () {
          this.options.keyboard && g.unbind('keydown', this.handledEscapeKey), this.options.backdrop && this.options.backdropClick && this.backdropEl.unbind('click', this.handleBackDropClick);
        }, f.prototype._onCloseComplete = function (t) {
          this._removeElementsFromDom(), this._unbindEvents(), this.deferred.resolve(t);
        }, f.prototype._addElementsToDom = function () {
          g.append(this.modalEl), this.options.backdrop && (0 === n.value && g.append(this.backdropEl), n.value++), this._open = !0;
        }, f.prototype._removeElementsFromDom = function () {
          this.modalEl.remove(), this.options.backdrop && (n.value--, 0 === n.value && this.backdropEl.remove()), this._open = !1;
        }, f.prototype._loadResolves = function () {
          var t, e = [], n = [], a = this;
          return this.options.template ? t = c.when(this.options.template) : this.options.templateUrl && (t = o.get(this.options.templateUrl, { cache: s }).then(function (t) {
            return t.data;
          })), angular.forEach(this.options.resolve || [], function (t, o) {
            n.push(o), e.push(angular.isString(t) ? p.get(t) : p.invoke(t));
          }), n.push('$template'), e.push(t), c.all(e).then(function (t) {
            var e = {};
            return angular.forEach(t, function (t, o) {
              e[n[o]] = t;
            }), e.dialog = a, e;
          });
        }, {
          dialog: function (t) {
            return new f(t);
          },
          messageBox: function (t, e, n) {
            return new f({
              templateUrl: 'template/dialog/message.html',
              controller: 'MessageBoxController',
              resolve: {
                model: function () {
                  return {
                    title: t,
                    message: e,
                    buttons: n
                  };
                }
              }
            });
          }
        };
      }
    ];
  }), angular.module('ui.bootstrap.dropdownToggle', []).directive('dropdownToggle', [
    '$document',
    '$location',
    '$window',
    function (t) {
      var e = null, n = angular.noop;
      return {
        restrict: 'CA',
        link: function (o, a) {
          o.$watch('$location.path', function () {
            n();
          }), a.parent().bind('click', function () {
            n();
          }), a.bind('click', function (o) {
            o.preventDefault(), o.stopPropagation();
            var i = a === e;
            e && n(), i || (a.parent().addClass('open'), e = a, n = function (o) {
              o && (o.preventDefault(), o.stopPropagation()), t.unbind('click', n), a.parent().removeClass('open'), n = angular.noop, e = null;
            }, t.bind('click', n));
          });
        }
      };
    }
  ]), angular.module('ui.bootstrap.modal', ['ui.bootstrap.dialog']).directive('modal', [
    '$parse',
    '$dialog',
    function (t, e) {
      return {
        restrict: 'EA',
        terminal: !0,
        link: function (n, o, a) {
          var i, r = angular.extend({}, n.$eval(a.uiOptions || a.bsOptions || a.options)), l = a.modal || a.show;
          r = angular.extend(r, {
            template: o.html(),
            resolve: {
              $scope: function () {
                return n;
              }
            }
          });
          var s = e.dialog(r);
          o.remove(), i = a.close ? function () {
            t(a.close)(n);
          } : function () {
            angular.isFunction(t(l).assign) && t(l).assign(n, !1);
          }, n.$watch(l, function (t) {
            t ? s.open().then(function () {
              i();
            }) : s.isOpen() && s.close();
          });
        }
      };
    }
  ]), angular.module('ui.bootstrap.pagination', []).constant('paginationConfig', {
    boundaryLinks: !1,
    directionLinks: !0,
    firstText: 'First',
    previousText: 'Previous',
    nextText: 'Next',
    lastText: 'Last'
  }).directive('pagination', [
    'paginationConfig',
    function (t) {
      return {
        restrict: 'EA',
        scope: {
          numPages: '=',
          currentPage: '=',
          maxSize: '=',
          onSelectPage: '&'
        },
        templateUrl: 'template/pagination/pagination.html',
        replace: !0,
        link: function (e, n, o) {
          function a(t, e, n, o) {
            return {
              number: t,
              text: e,
              active: n,
              disabled: o
            };
          }
          var i = angular.isDefined(o.boundaryLinks) ? e.$eval(o.boundaryLinks) : t.boundaryLinks, r = angular.isDefined(o.directionLinks) ? e.$eval(o.directionLinks) : t.directionLinks, l = angular.isDefined(o.firstText) ? o.firstText : t.firstText, s = angular.isDefined(o.previousText) ? o.previousText : t.previousText, c = angular.isDefined(o.nextText) ? o.nextText : t.nextText, u = angular.isDefined(o.lastText) ? o.lastText : t.lastText;
          e.$watch('numPages + currentPage + maxSize', function () {
            e.pages = [];
            var t = 1, n = e.numPages;
            e.maxSize && e.maxSize < e.numPages && (t = Math.max(e.currentPage - Math.floor(e.maxSize / 2), 1), n = t + e.maxSize - 1, n > e.numPages && (n = e.numPages, t = n - e.maxSize + 1));
            for (var o = t; n >= o; o++) {
              var p = a(o, o, e.isActive(o), !1);
              e.pages.push(p);
            }
            if (r) {
              var d = a(e.currentPage - 1, s, !1, e.noPrevious());
              e.pages.unshift(d);
              var f = a(e.currentPage + 1, c, !1, e.noNext());
              e.pages.push(f);
            }
            if (i) {
              var g = a(1, l, !1, e.noPrevious());
              e.pages.unshift(g);
              var m = a(e.numPages, u, !1, e.noNext());
              e.pages.push(m);
            }
            e.currentPage > e.numPages && e.selectPage(e.numPages);
          }), e.noPrevious = function () {
            return 1 === e.currentPage;
          }, e.noNext = function () {
            return e.currentPage === e.numPages;
          }, e.isActive = function (t) {
            return e.currentPage === t;
          }, e.selectPage = function (t) {
            !e.isActive(t) && t > 0 && e.numPages >= t && (e.currentPage = t, e.onSelectPage({ page: t }));
          };
        }
      };
    }
  ]), angular.module('ui.bootstrap.position', []).factory('$position', [
    '$document',
    '$window',
    function (t, e) {
      function n(t, n) {
        return t.currentStyle ? t.currentStyle[n] : e.getComputedStyle ? e.getComputedStyle(t)[n] : t.style[n];
      }
      function o(t) {
        return 'static' === (n(t, 'position') || 'static');
      }
      var a = function (e) {
        for (var n = t[0], a = e.offsetParent || n; a && a !== n && o(a);)
          a = a.offsetParent;
        return a || n;
      };
      return {
        position: function (e) {
          var n = this.offset(e), o = {
              top: 0,
              left: 0
            }, i = a(e[0]);
          return i != t[0] && (o = this.offset(angular.element(i)), o.top += i.clientTop, o.left += i.clientLeft), {
            width: e.prop('offsetWidth'),
            height: e.prop('offsetHeight'),
            top: n.top - o.top,
            left: n.left - o.left
          };
        },
        offset: function (n) {
          var o = n[0].getBoundingClientRect();
          return {
            width: n.prop('offsetWidth'),
            height: n.prop('offsetHeight'),
            top: o.top + (e.pageYOffset || t[0].body.scrollTop),
            left: o.left + (e.pageXOffset || t[0].body.scrollLeft)
          };
        }
      };
    }
  ]), angular.module('ui.bootstrap.tooltip', ['ui.bootstrap.position']).provider('$tooltip', function () {
    function t(t) {
      var e = /[A-Z]/g, n = '-';
      return t.replace(e, function (t, e) {
        return (e ? n : '') + t.toLowerCase();
      });
    }
    var e = {
        placement: 'top',
        animation: !0,
        popupDelay: 0
      }, n = {
        mouseenter: 'mouseleave',
        click: 'click',
        focus: 'blur'
      }, o = {};
    this.options = function (t) {
      angular.extend(o, t);
    }, this.$get = [
      '$window',
      '$compile',
      '$timeout',
      '$parse',
      '$document',
      '$position',
      function (a, i, r, l, s, c) {
        return function (a, u, p) {
          function d(t) {
            var e, o;
            return e = t || f.trigger || p, o = angular.isDefined(f.trigger) ? n[f.trigger] || e : n[e] || e, {
              show: e,
              hide: o
            };
          }
          var f = angular.extend({}, e, o), g = t(a), m = d(void 0), h = '<' + g + '-popup ' + 'title="{{tt_title}}" ' + 'content="{{tt_content}}" ' + 'placement="{{tt_placement}}" ' + 'animation="tt_animation()" ' + 'is-open="tt_isOpen"' + '>' + '</' + g + '-popup>';
          return {
            restrict: 'EA',
            scope: !0,
            link: function (t, e, n) {
              function o() {
                t.tt_isOpen ? g() : p();
              }
              function p() {
                t.tt_popupDelay ? y = r(v, t.tt_popupDelay) : t.$apply(v);
              }
              function g() {
                t.$apply(function () {
                  b();
                });
              }
              function v() {
                var n, o, a, i;
                if (t.tt_content) {
                  switch ($ && r.cancel($), C.css({
                      top: 0,
                      left: 0,
                      display: 'block'
                    }), f.appendToBody ? (k = k || s.find('body'), k.append(C)) : e.after(C), n = c.position(e), o = C.prop('offsetWidth'), a = C.prop('offsetHeight'), t.tt_placement) {
                  case 'right':
                    i = {
                      top: n.top + n.height / 2 - a / 2 + 'px',
                      left: n.left + n.width + 'px'
                    };
                    break;
                  case 'bottom':
                    i = {
                      top: n.top + n.height + 'px',
                      left: n.left + n.width / 2 - o / 2 + 'px'
                    };
                    break;
                  case 'left':
                    i = {
                      top: n.top + n.height / 2 - a / 2 + 'px',
                      left: n.left - o + 'px'
                    };
                    break;
                  default:
                    i = {
                      top: n.top - a + 'px',
                      left: n.left + n.width / 2 - o / 2 + 'px'
                    };
                  }
                  C.css(i), t.tt_isOpen = !0;
                }
              }
              function b() {
                t.tt_isOpen = !1, r.cancel(y), angular.isDefined(t.tt_animation) && t.tt_animation() ? $ = r(function () {
                  C.remove();
                }, 500) : C.remove();
              }
              var $, y, k, C = i(h)(t);
              t.tt_isOpen = !1, n.$observe(a, function (e) {
                t.tt_content = e;
              }), n.$observe(u + 'Title', function (e) {
                t.tt_title = e;
              }), n.$observe(u + 'Placement', function (e) {
                t.tt_placement = angular.isDefined(e) ? e : f.placement;
              }), n.$observe(u + 'Animation', function (e) {
                t.tt_animation = angular.isDefined(e) ? l(e) : function () {
                  return f.animation;
                };
              }), n.$observe(u + 'PopupDelay', function (e) {
                var n = parseInt(e, 10);
                t.tt_popupDelay = isNaN(n) ? f.popupDelay : n;
              }), n.$observe(u + 'Trigger', function (t) {
                e.unbind(m.show), e.unbind(m.hide), m = d(t), m.show === m.hide ? e.bind(m.show, o) : (e.bind(m.show, p), e.bind(m.hide, g));
              });
            }
          };
        };
      }
    ];
  }).directive('tooltipPopup', function () {
    return {
      restrict: 'E',
      replace: !0,
      scope: {
        content: '@',
        placement: '@',
        animation: '&',
        isOpen: '&'
      },
      templateUrl: 'template/tooltip/tooltip-popup.html'
    };
  }).directive('tooltip', [
    '$tooltip',
    function (t) {
      return t('tooltip', 'tooltip', 'mouseenter');
    }
  ]).directive('tooltipHtmlUnsafePopup', function () {
    return {
      restrict: 'E',
      replace: !0,
      scope: {
        content: '@',
        placement: '@',
        animation: '&',
        isOpen: '&'
      },
      templateUrl: 'template/tooltip/tooltip-html-unsafe-popup.html'
    };
  }).directive('tooltipHtmlUnsafe', [
    '$tooltip',
    function (t) {
      return t('tooltipHtmlUnsafe', 'tooltip', 'mouseenter');
    }
  ]), angular.module('ui.bootstrap.popover', ['ui.bootstrap.tooltip']).directive('popoverPopup', function () {
    return {
      restrict: 'EA',
      replace: !0,
      scope: {
        title: '@',
        content: '@',
        placement: '@',
        animation: '&',
        isOpen: '&'
      },
      templateUrl: 'template/popover/popover.html'
    };
  }).directive('popover', [
    '$compile',
    '$timeout',
    '$parse',
    '$window',
    '$tooltip',
    function (t, e, n, o, a) {
      return a('popover', 'popover', 'click');
    }
  ]), angular.module('ui.bootstrap.progressbar', ['ui.bootstrap.transition']).constant('progressConfig', {
    animate: !0,
    autoType: !1,
    stackedTypes: [
      'success',
      'info',
      'warning',
      'danger'
    ]
  }).controller('ProgressBarController', [
    '$scope',
    '$attrs',
    'progressConfig',
    function (t, e, n) {
      function o(t) {
        return r[t];
      }
      var a = angular.isDefined(e.animate) ? t.$eval(e.animate) : n.animate, i = angular.isDefined(e.autoType) ? t.$eval(e.autoType) : n.autoType, r = angular.isDefined(e.stackedTypes) ? t.$eval('[' + e.stackedTypes + ']') : n.stackedTypes;
      this.makeBar = function (t, e, n) {
        var r = angular.isObject(t) ? t.value : t || 0, l = angular.isObject(e) ? e.value : e || 0, s = angular.isObject(t) && angular.isDefined(t.type) ? t.type : i ? o(n || 0) : null;
        return {
          from: l,
          to: r,
          type: s,
          animate: a
        };
      }, this.addBar = function (e) {
        t.bars.push(e), t.totalPercent += e.to;
      }, this.clearBars = function () {
        t.bars = [], t.totalPercent = 0;
      }, this.clearBars();
    }
  ]).directive('progress', function () {
    return {
      restrict: 'EA',
      replace: !0,
      controller: 'ProgressBarController',
      scope: {
        value: '=',
        onFull: '&',
        onEmpty: '&'
      },
      templateUrl: 'template/progressbar/progress.html',
      link: function (t, e, n, o) {
        t.$watch('value', function (t, e) {
          if (o.clearBars(), angular.isArray(t))
            for (var n = 0, a = t.length; a > n; n++)
              o.addBar(o.makeBar(t[n], e[n], n));
          else
            o.addBar(o.makeBar(t, e));
        }, !0), t.$watch('totalPercent', function (e) {
          e >= 100 ? t.onFull() : 0 >= e && t.onEmpty();
        }, !0);
      }
    };
  }).directive('progressbar', [
    '$transition',
    function (t) {
      return {
        restrict: 'EA',
        replace: !0,
        scope: {
          width: '=',
          old: '=',
          type: '=',
          animate: '='
        },
        templateUrl: 'template/progressbar/bar.html',
        link: function (e, n) {
          e.$watch('width', function (o) {
            e.animate ? (n.css('width', e.old + '%'), t(n, { width: o + '%' })) : n.css('width', o + '%');
          });
        }
      };
    }
  ]), angular.module('ui.bootstrap.rating', []).constant('ratingConfig', { max: 5 }).directive('rating', [
    'ratingConfig',
    '$parse',
    function (t, e) {
      return {
        restrict: 'EA',
        scope: { value: '=' },
        templateUrl: 'template/rating/rating.html',
        replace: !0,
        link: function (n, o, a) {
          var i = angular.isDefined(a.max) ? n.$eval(a.max) : t.max;
          n.range = [];
          for (var r = 1; i >= r; r++)
            n.range.push(r);
          n.rate = function (t) {
            n.readonly || (n.value = t);
          }, n.enter = function (t) {
            n.readonly || (n.val = t);
          }, n.reset = function () {
            n.val = angular.copy(n.value);
          }, n.reset(), n.$watch('value', function (t) {
            n.val = t;
          }), n.readonly = !1, a.readonly && n.$parent.$watch(e(a.readonly), function (t) {
            n.readonly = !!t;
          });
        }
      };
    }
  ]), angular.module('ui.bootstrap.tabs', []).controller('TabsController', [
    '$scope',
    '$element',
    function (t) {
      var e = t.panes = [];
      this.select = t.select = function (t) {
        angular.forEach(e, function (t) {
          t.selected = !1;
        }), t.selected = !0;
      }, this.addPane = function (n) {
        e.length || t.select(n), e.push(n);
      }, this.removePane = function (n) {
        var o = e.indexOf(n);
        e.splice(o, 1), n.selected && e.length > 0 && t.select(e[e.length > o ? o : o - 1]);
      };
    }
  ]).directive('tabs', function () {
    return {
      restrict: 'EA',
      transclude: !0,
      scope: {},
      controller: 'TabsController',
      templateUrl: 'template/tabs/tabs.html',
      replace: !0
    };
  }).directive('pane', [
    '$parse',
    function (t) {
      return {
        require: '^tabs',
        restrict: 'EA',
        transclude: !0,
        scope: { heading: '@' },
        link: function (e, n, o, a) {
          var i, r;
          e.selected = !1, o.active && (i = t(o.active), r = i.assign, e.$watch(function () {
            return i(e.$parent);
          }, function (t) {
            e.selected = t;
          }), e.selected = i ? i(e.$parent) : !1), e.$watch('selected', function (t) {
            t && a.select(e), r && r(e.$parent, t);
          }), a.addPane(e), e.$on('$destroy', function () {
            a.removePane(e);
          });
        },
        templateUrl: 'template/tabs/pane.html',
        replace: !0
      };
    }
  ]), angular.module('ui.bootstrap.typeahead', ['ui.bootstrap.position']).factory('typeaheadParser', [
    '$parse',
    function (t) {
      var e = /^\s*(.*?)(?:\s+as\s+(.*?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+(.*)$/;
      return {
        parse: function (n) {
          var o = n.match(e);
          if (!o)
            throw Error('Expected typeahead specification in form of \'_modelValue_ (as _label_)? for _item_ in _collection_\' but got \'' + n + '\'.');
          return {
            itemName: o[3],
            source: t(o[4]),
            viewMapper: t(o[2] || o[1]),
            modelMapper: t(o[1])
          };
        }
      };
    }
  ]).directive('typeahead', [
    '$compile',
    '$parse',
    '$q',
    '$document',
    '$position',
    'typeaheadParser',
    function (t, e, n, o, a, i) {
      var r = [
          9,
          13,
          27,
          38,
          40
        ];
      return {
        require: 'ngModel',
        link: function (l, s, c, u) {
          var p, d = l.$eval(c.typeaheadMinLength) || 1, f = i.parse(c.typeahead), g = l.$eval(c.typeaheadEditable) !== !1, m = e(c.typeaheadLoading).assign || angular.noop, h = angular.element('<typeahead-popup matches=\'matches\' active=\'activeIdx\' select=\'select(activeIdx)\' query=\'query\' position=\'position\'></typeahead-popup>'), v = l.$new();
          l.$on('$destroy', function () {
            v.$destroy();
          });
          var b = function () {
              v.matches = [], v.activeIdx = -1;
            }, $ = function (t) {
              var e = { $viewValue: t };
              m(l, !0), n.when(f.source(v, e)).then(function (n) {
                if (t === u.$viewValue) {
                  if (n.length > 0) {
                    v.activeIdx = 0, v.matches.length = 0;
                    for (var o = 0; n.length > o; o++)
                      e[f.itemName] = n[o], v.matches.push({
                        label: f.viewMapper(v, e),
                        model: n[o]
                      });
                    v.query = t, v.position = a.position(s), v.position.top = v.position.top + s.prop('offsetHeight');
                  } else
                    b();
                  m(l, !1);
                }
              }, function () {
                b(), m(l, !1);
              });
            };
          b(), v.query = void 0, u.$parsers.push(function (t) {
            return b(), p ? t : (t && t.length >= d && $(t), g ? t : void 0);
          }), u.$render = function () {
            var t = {};
            t[f.itemName] = p || u.$viewValue, s.val(f.viewMapper(v, t) || u.$viewValue), p = void 0;
          }, v.select = function (t) {
            var e = {};
            e[f.itemName] = p = v.matches[t].model, u.$setViewValue(f.modelMapper(v, e)), u.$render();
          }, s.bind('keydown', function (t) {
            0 !== v.matches.length && -1 !== r.indexOf(t.which) && (t.preventDefault(), 40 === t.which ? (v.activeIdx = (v.activeIdx + 1) % v.matches.length, v.$digest()) : 38 === t.which ? (v.activeIdx = (v.activeIdx ? v.activeIdx : v.matches.length) - 1, v.$digest()) : 13 === t.which || 9 === t.which ? v.$apply(function () {
              v.select(v.activeIdx);
            }) : 27 === t.which && (t.stopPropagation(), b(), v.$digest()));
          }), o.bind('click', function () {
            b(), v.$digest();
          }), s.after(t(h)(v));
        }
      };
    }
  ]).directive('typeaheadPopup', function () {
    return {
      restrict: 'E',
      scope: {
        matches: '=',
        query: '=',
        active: '=',
        position: '=',
        select: '&'
      },
      replace: !0,
      templateUrl: 'template/typeahead/typeahead.html',
      link: function (t) {
        t.isOpen = function () {
          return t.matches.length > 0;
        }, t.isActive = function (e) {
          return t.active == e;
        }, t.selectActive = function (e) {
          t.active = e;
        }, t.selectMatch = function (e) {
          t.select({ activeIdx: e });
        };
      }
    };
  }).filter('typeaheadHighlight', function () {
    function t(t) {
      return t.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    }
    return function (e, n) {
      return n ? e.replace(RegExp(t(n), 'gi'), '<strong>$&</strong>') : n;
    };
  }), angular.module('template/accordion/accordion-group.html', []).run([
    '$templateCache',
    function (t) {
      t.put('template/accordion/accordion-group.html', '<div class="accordion-group">\n  <div class="accordion-heading" ><a class="accordion-toggle" ng-click="isOpen = !isOpen" accordion-transclude="heading">{{heading}}</a></div>\n  <div class="accordion-body" collapse="!isOpen">\n    <div class="accordion-inner" ng-transclude></div>  </div>\n</div>');
    }
  ]), angular.module('template/accordion/accordion.html', []).run([
    '$templateCache',
    function (t) {
      t.put('template/accordion/accordion.html', '<div class="accordion" ng-transclude></div>');
    }
  ]), angular.module('template/alert/alert.html', []).run([
    '$templateCache',
    function (t) {
      t.put('template/alert/alert.html', '<div class=\'alert\' ng-class=\'type && "alert-" + type\'>\n    <button ng-show=\'closeable\' type=\'button\' class=\'close\' ng-click=\'close()\'>&times;</button>\n    <div ng-transclude></div>\n</div>\n');
    }
  ]), angular.module('template/carousel/carousel.html', []).run([
    '$templateCache',
    function (t) {
      t.put('template/carousel/carousel.html', '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel">\n    <ol class="carousel-indicators" ng-show="slides().length > 1">\n        <li ng-repeat="slide in slides()" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a ng-click="prev()" class="carousel-control left" ng-show="slides().length > 1">&lsaquo;</a>\n    <a ng-click="next()" class="carousel-control right" ng-show="slides().length > 1">&rsaquo;</a>\n</div>\n');
    }
  ]), angular.module('template/carousel/slide.html', []).run([
    '$templateCache',
    function (t) {
      t.put('template/carousel/slide.html', '<div ng-class="{\n    \'active\': leaving || (active && !entering),\n    \'prev\': (next || active) && direction==\'prev\',\n    \'next\': (next || active) && direction==\'next\',\n    \'right\': direction==\'prev\',\n    \'left\': direction==\'next\'\n  }" class="item" ng-transclude></div>\n');
    }
  ]), angular.module('template/dialog/message.html', []).run([
    '$templateCache',
    function (t) {
      t.put('template/dialog/message.html', '<div class="modal-header">\n\t<h1>{{ title }}</h1>\n</div>\n<div class="modal-body">\n\t<p>{{ message }}</p>\n</div>\n<div class="modal-footer">\n\t<button ng-repeat="btn in buttons" ng-click="close(btn.result)" class=btn ng-class="btn.cssClass">{{ btn.label }}</button>\n</div>\n');
    }
  ]), angular.module('template/pagination/pagination.html', []).run([
    '$templateCache',
    function (t) {
      t.put('template/pagination/pagination.html', '<div class="pagination"><ul>\n  <li ng-repeat="page in pages" ng-class="{active: page.active, disabled: page.disabled}"><a ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  </ul>\n</div>\n');
    }
  ]), angular.module('template/tooltip/tooltip-html-unsafe-popup.html', []).run([
    '$templateCache',
    function (t) {
      t.put('template/tooltip/tooltip-html-unsafe-popup.html', '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind-html-unsafe="content"></div>\n</div>\n');
    }
  ]), angular.module('template/tooltip/tooltip-popup.html', []).run([
    '$templateCache',
    function (t) {
      t.put('template/tooltip/tooltip-popup.html', '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n');
    }
  ]), angular.module('template/popover/popover.html', []).run([
    '$templateCache',
    function (t) {
      t.put('template/popover/popover.html', '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n');
    }
  ]), angular.module('template/progressbar/bar.html', []).run([
    '$templateCache',
    function (t) {
      t.put('template/progressbar/bar.html', '<div class="bar" ng-class=\'type && "bar-" + type\'></div>');
    }
  ]), angular.module('template/progressbar/progress.html', []).run([
    '$templateCache',
    function (t) {
      t.put('template/progressbar/progress.html', '<div class="progress"><progressbar ng-repeat="bar in bars" width="bar.to" old="bar.from" animate="bar.animate" type="bar.type"></progressbar></div>');
    }
  ]), angular.module('template/rating/rating.html', []).run([
    '$templateCache',
    function (t) {
      t.put('template/rating/rating.html', '<span ng-mouseleave="reset()">\n\t<i ng-repeat="number in range" ng-mouseenter="enter(number)" ng-click="rate(number)" ng-class="{\'icon-star\': number <= val, \'icon-star-empty\': number > val}"></i>\n</span>\n');
    }
  ]), angular.module('template/tabs/pane.html', []).run([
    '$templateCache',
    function (t) {
      t.put('template/tabs/pane.html', '<div class="tab-pane" ng-class="{active: selected}" ng-show="selected" ng-transclude></div>\n');
    }
  ]), angular.module('template/tabs/tabs.html', []).run([
    '$templateCache',
    function (t) {
      t.put('template/tabs/tabs.html', '<div class="tabbable">\n  <ul class="nav nav-tabs">\n    <li ng-repeat="pane in panes" ng-class="{active:pane.selected}">\n      <a ng-click="select(pane)">{{pane.heading}}</a>\n    </li>\n  </ul>\n  <div class="tab-content" ng-transclude></div>\n</div>\n');
    }
  ]), angular.module('template/typeahead/match.html', []).run([
    '$templateCache',
    function (t) {
      t.put('template/typeahead/match.html', '<a tabindex="-1" ng-bind-html-unsafe="match.label | typeaheadHighlight:query"></a>');
    }
  ]), angular.module('template/typeahead/typeahead.html', []).run([
    '$templateCache',
    function (t) {
      t.put('template/typeahead/typeahead.html', '<ul class="typeahead dropdown-menu" ng-style="{display: isOpen()&&\'block\' || \'none\', top: position.top+\'px\', left: position.left+\'px\'}">\n    <li ng-repeat="match in matches" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)">\n        <a tabindex="-1" ng-click="selectMatch($index)" ng-bind-html-unsafe="match.label | typeaheadHighlight:query"></a>\n    </li>\n</ul>');
    }
  ]);
  angular.module('placeholders', [
    'placeholders.img',
    'placeholders.txt'
  ]), angular.module('placeholders.img', []).directive('phImg', function () {
    return {
      restrict: 'A',
      scope: { dimensions: '@phImg' },
      link: function (e, t, n) {
        function s() {
          var t = [
              e.size.h,
              e.size.w
            ].sort(), n = Math.round(t[1] / 16);
          return Math.max(i.text_size, n);
        }
        function o() {
          r = r || document.createElement('canvas');
          var t = r.getContext('2d'), n, o;
          return r.width = e.size.w, r.height = e.size.h, t.fillStyle = i.fill_color, t.fillRect(0, 0, e.size.w, e.size.h), n = s(), o = e.dimensions, t.fillStyle = i.text_color, t.textAlign = 'center', t.textBaseline = 'middle', t.font = 'bold ' + n + 'pt sans-serif', t.measureText(o).width / e.size.w > 1 && (n = i.text_size / (t.measureText(o).width / e.size.w), t.font = 'bold ' + n + 'pt sans-serif'), t.fillText(e.dimensions, e.size.w / 2, e.size.h / 2), r.toDataURL('image/png');
        }
        var r, i = {
            text_size: 10,
            fill_color: '#EEEEEE',
            text_color: '#AAAAAA'
          };
        e.$watch('dimensions', function () {
          if (!angular.isDefined(e.dimensions))
            return;
          var n = e.dimensions.match(/^(\d+)x(\d+)$/), r;
          if (!n) {
            console.error('Expected \'000x000\'. Got ' + e.dimensions);
            return;
          }
          e.size = {
            w: n[1],
            h: n[2]
          }, t.prop('title', e.dimensions), t.prop('alt', e.dimensions), r = o(), t.prop('tagName') === 'IMG' ? t.prop('src', r) : t.css('background-image', 'url("' + r + '")');
        });
      }
    };
  }), angular.module('placeholders.txt', []).factory('TextGeneratorService', function () {
    function t(e, t) {
      return Math.floor(Math.random() * (t - e + 1)) + e;
    }
    var e = [
        'lorem',
        'ipsum',
        'dolor',
        'sit',
        'amet,',
        'consectetur',
        'adipiscing',
        'elit',
        'ut',
        'aliquam,',
        'purus',
        'sit',
        'amet',
        'luctus',
        'venenatis,',
        'lectus',
        'magna',
        'fringilla',
        'urna,',
        'porttitor',
        'rhoncus',
        'dolor',
        'purus',
        'non',
        'enim',
        'praesent',
        'elementum',
        'facilisis',
        'leo,',
        'vel',
        'fringilla',
        'est',
        'ullamcorper',
        'eget',
        'nulla',
        'facilisi',
        'etiam',
        'dignissim',
        'diam',
        'quis',
        'enim',
        'lobortis',
        'scelerisque',
        'fermentum',
        'dui',
        'faucibus',
        'in',
        'ornare',
        'quam',
        'viverra',
        'orci',
        'sagittis',
        'eu',
        'volutpat',
        'odio',
        'facilisis',
        'mauris',
        'sit',
        'amet',
        'massa',
        'vitae',
        'tortor',
        'condimentum',
        'lacinia',
        'quis',
        'vel',
        'eros',
        'donec',
        'ac',
        'odio',
        'tempor',
        'orci',
        'dapibus',
        'ultrices',
        'in',
        'iaculis',
        'nunc',
        'sed',
        'augue',
        'lacus,',
        'viverra',
        'vitae',
        'congue',
        'eu,',
        'consequat',
        'ac',
        'felis',
        'donec',
        'et',
        'odio',
        'pellentesque',
        'diam',
        'volutpat',
        'commodo',
        'sed',
        'egestas',
        'egestas',
        'fringilla',
        'phasellus',
        'faucibus',
        'scelerisque',
        'eleifend',
        'donec',
        'pretium',
        'vulputate',
        'sapien',
        'nec',
        'sagittis',
        'aliquam',
        'malesuada',
        'bibendum',
        'arcu',
        'vitae',
        'elementum',
        'curabitur',
        'vitae',
        'nunc',
        'sed',
        'velit',
        'dignissim',
        'sodales',
        'ut',
        'eu',
        'sem',
        'integer',
        'vitae',
        'justo',
        'eget',
        'magna',
        'fermentum',
        'iaculis',
        'eu',
        'non',
        'diam',
        'phasellus',
        'vestibulum',
        'lorem',
        'sed',
        'risus',
        'ultricies',
        'tristique',
        'nulla',
        'aliquet',
        'enim',
        'tortor,',
        'at',
        'auctor',
        'urna',
        'nunc',
        'id',
        'cursus',
        'metus',
        'aliquam',
        'eleifend',
        'mi',
        'in',
        'nulla',
        'posuere',
        'sollicitudin',
        'aliquam',
        'ultrices',
        'sagittis',
        'orci,',
        'a',
        'scelerisque',
        'purus',
        'semper',
        'eget',
        'duis',
        'at',
        'tellus',
        'at',
        'urna',
        'condimentum',
        'mattis',
        'pellentesque',
        'id',
        'nibh',
        'tortor,',
        'id',
        'aliquet',
        'lectus',
        'proin',
        'nibh',
        'nisl,',
        'condimentum',
        'id',
        'venenatis',
        'a,',
        'condimentum',
        'vitae',
        'sapien',
        'pellentesque',
        'habitant',
        'morbi',
        'tristique',
        'senectus',
        'et',
        'netus',
        'et',
        'malesuada',
        'fames',
        'ac',
        'turpis',
        'egestas',
        'sed',
        'tempus,',
        'urna',
        'et',
        'pharetra',
        'pharetra,',
        'massa',
        'massa',
        'ultricies',
        'mi,',
        'quis',
        'hendrerit',
        'dolor',
        'magna',
        'eget',
        'est',
        'lorem',
        'ipsum',
        'dolor',
        'sit',
        'amet,',
        'consectetur',
        'adipiscing',
        'elit',
        'pellentesque',
        'habitant',
        'morbi',
        'tristique',
        'senectus',
        'et',
        'netus',
        'et',
        'malesuada',
        'fames',
        'ac',
        'turpis',
        'egestas',
        'integer',
        'eget',
        'aliquet',
        'nibh',
        'praesent',
        'tristique',
        'magna',
        'sit',
        'amet',
        'purus',
        'gravida',
        'quis',
        'blandit',
        'turpis',
        'cursus',
        'in',
        'hac',
        'habitasse',
        'platea',
        'dictumst',
        'quisque',
        'sagittis,',
        'purus',
        'sit',
        'amet',
        'volutpat',
        'consequat,',
        'mauris',
        'nunc',
        'congue',
        'nisi,',
        'vitae',
        'suscipit',
        'tellus',
        'mauris',
        'a',
        'diam',
        'maecenas',
        'sed',
        'enim',
        'ut',
        'sem',
        'viverra',
        'aliquet',
        'eget',
        'sit',
        'amet',
        'tellus',
        'cras',
        'adipiscing',
        'enim',
        'eu',
        'turpis',
        'egestas',
        'pretium',
        'aenean',
        'pharetra,',
        'magna',
        'ac',
        'placerat',
        'vestibulum,',
        'lectus',
        'mauris',
        'ultrices',
        'eros,',
        'in',
        'cursus',
        'turpis',
        'massa',
        'tincidunt',
        'dui',
        'ut',
        'ornare',
        'lectus',
        'sit',
        'amet',
        'est',
        'placerat',
        'in',
        'egestas',
        'erat',
        'imperdiet',
        'sed',
        'euismod',
        'nisi',
        'porta',
        'lorem',
        'mollis',
        'aliquam',
        'ut',
        'porttitor',
        'leo',
        'a',
        'diam',
        'sollicitudin',
        'tempor',
        'id',
        'eu',
        'nisl',
        'nunc',
        'mi',
        'ipsum,',
        'faucibus',
        'vitae',
        'aliquet',
        'nec,',
        'ullamcorper',
        'sit',
        'amet',
        'risus',
        'nullam',
        'eget',
        'felis',
        'eget',
        'nunc',
        'lobortis',
        'mattis',
        'aliquam',
        'faucibus',
        'purus',
        'in',
        'massa',
        'tempor',
        'nec',
        'feugiat',
        'nisl',
        'pretium',
        'fusce',
        'id',
        'velit',
        'ut',
        'tortor',
        'pretium',
        'viverra',
        'suspendisse',
        'potenti',
        'nullam',
        'ac',
        'tortor',
        'vitae',
        'purus',
        'faucibus',
        'ornare',
        'suspendisse',
        'sed',
        'nisi',
        'lacus,',
        'sed',
        'viverra',
        'tellus',
        'in',
        'hac',
        'habitasse',
        'platea',
        'dictumst',
        'vestibulum',
        'rhoncus',
        'est',
        'pellentesque',
        'elit',
        'ullamcorper',
        'dignissim',
        'cras',
        'tincidunt',
        'lobortis',
        'feugiat',
        'vivamus',
        'at',
        'augue',
        'eget',
        'arcu',
        'dictum',
        'varius',
        'duis',
        'at',
        'consectetur',
        'lorem',
        'donec',
        'massa',
        'sapien,',
        'faucibus',
        'et',
        'molestie',
        'ac,',
        'feugiat',
        'sed',
        'lectus',
        'vestibulum',
        'mattis',
        'ullamcorper',
        'velit',
        'sed',
        'ullamcorper',
        'morbi',
        'tincidunt',
        'ornare',
        'massa,',
        'eget',
        'egestas',
        'purus',
        'viverra',
        'accumsan',
        'in',
        'nisl',
        'nisi,',
        'scelerisque',
        'eu',
        'ultrices',
        'vitae,',
        'auctor',
        'eu',
        'augue',
        'ut',
        'lectus',
        'arcu,',
        'bibendum',
        'at',
        'varius',
        'vel,',
        'pharetra',
        'vel',
        'turpis',
        'nunc',
        'eget',
        'lorem',
        'dolor,',
        'sed',
        'viverra',
        'ipsum',
        'nunc',
        'aliquet',
        'bibendum',
        'enim,',
        'facilisis',
        'gravida',
        'neque',
        'convallis',
        'a',
        'cras',
        'semper',
        'auctor',
        'neque,',
        'vitae',
        'tempus',
        'quam',
        'pellentesque',
        'nec',
        'nam',
        'aliquam',
        'sem',
        'et',
        'tortor',
        'consequat',
        'id',
        'porta',
        'nibh',
        'venenatis',
        'cras',
        'sed',
        'felis',
        'eget',
        'velit',
        'aliquet',
        'sagittis',
        'id',
        'consectetur',
        'purus',
        'ut',
        'faucibus',
        'pulvinar',
        'elementum',
        'integer',
        'enim',
        'neque,',
        'volutpat',
        'ac',
        'tincidunt',
        'vitae,',
        'semper',
        'quis',
        'lectus',
        'nulla',
        'at',
        'volutpat',
        'diam',
        'ut',
        'venenatis',
        'tellus',
        'in',
        'metus',
        'vulputate',
        'eu',
        'scelerisque',
        'felis',
        'imperdiet',
        'proin',
        'fermentum',
        'leo',
        'vel',
        'orci',
        'porta',
        'non',
        'pulvinar',
        'neque',
        'laoreet',
        'suspendisse',
        'interdum',
        'consectetur',
        'libero,',
        'id',
        'faucibus',
        'nisl',
        'tincidunt',
        'eget',
        'nullam',
        'non',
        'nisi',
        'est,',
        'sit',
        'amet',
        'facilisis',
        'magna',
        'etiam',
        'tempor,',
        'orci',
        'eu',
        'lobortis',
        'elementum,',
        'nibh',
        'tellus',
        'molestie',
        'nunc,',
        'non',
        'blandit',
        'massa',
        'enim',
        'nec',
        'dui',
        'nunc',
        'mattis',
        'enim',
        'ut',
        'tellus',
        'elementum',
        'sagittis',
        'vitae',
        'et',
        'leo',
        'duis',
        'ut',
        'diam',
        'quam',
        'nulla',
        'porttitor',
        'massa',
        'id',
        'neque',
        'aliquam',
        'vestibulum',
        'morbi',
        'blandit',
        'cursus',
        'risus,',
        'at',
        'ultrices',
        'mi',
        'tempus',
        'imperdiet',
        'nulla',
        'malesuada',
        'pellentesque',
        'elit',
        'eget',
        'gravida',
        'cum',
        'sociis',
        'natoque',
        'penatibus',
        'et',
        'magnis',
        'dis',
        'parturient',
        'montes,',
        'nascetur',
        'ridiculus',
        'mus',
        'mauris',
        'vitae',
        'ultricies',
        'leo',
        'integer',
        'malesuada',
        'nunc',
        'vel',
        'risus',
        'commodo',
        'viverra',
        'maecenas',
        'accumsan,',
        'lacus',
        'vel',
        'facilisis',
        'volutpat,',
        'est',
        'velit',
        'egestas',
        'dui,',
        'id',
        'ornare',
        'arcu',
        'odio',
        'ut',
        'sem',
        'nulla',
        'pharetra',
        'diam',
        'sit',
        'amet',
        'nisl',
        'suscipit',
        'adipiscing',
        'bibendum',
        'est',
        'ultricies',
        'integer',
        'quis',
        'auctor',
        'elit',
        'sed',
        'vulputate',
        'mi',
        'sit',
        'amet',
        'mauris',
        'commodo',
        'quis',
        'imperdiet',
        'massa',
        'tincidunt',
        'nunc',
        'pulvinar',
        'sapien',
        'et',
        'ligula',
        'ullamcorper',
        'malesuada',
        'proin',
        'libero',
        'nunc,',
        'consequat',
        'interdum',
        'varius',
        'sit',
        'amet,',
        'mattis',
        'vulputate',
        'enim',
        'nulla',
        'aliquet',
        'porttitor',
        'lacus,',
        'luctus',
        'accumsan',
        'tortor',
        'posuere',
        'ac',
        'ut',
        'consequat',
        'semper',
        'viverra',
        'nam',
        'libero',
        'justo,',
        'laoreet',
        'sit',
        'amet',
        'cursus',
        'sit',
        'amet,',
        'dictum',
        'sit',
        'amet',
        'justo',
        'donec',
        'enim',
        'diam,',
        'vulputate',
        'ut',
        'pharetra',
        'sit',
        'amet,',
        'aliquam',
        'id',
        'diam',
        'maecenas',
        'ultricies',
        'mi',
        'eget',
        'mauris',
        'pharetra',
        'et',
        'ultrices',
        'neque',
        'ornare',
        'aenean',
        'euismod',
        'elementum',
        'nisi,',
        'quis',
        'eleifend',
        'quam',
        'adipiscing',
        'vitae',
        'proin',
        'sagittis,',
        'nisl',
        'rhoncus',
        'mattis',
        'rhoncus,',
        'urna',
        'neque',
        'viverra',
        'justo,',
        'nec',
        'ultrices',
        'dui',
        'sapien',
        'eget',
        'mi',
        'proin',
        'sed',
        'libero',
        'enim,',
        'sed',
        'faucibus',
        'turpis',
        'in',
        'eu',
        'mi',
        'bibendum',
        'neque',
        'egestas',
        'congue',
        'quisque',
        'egestas',
        'diam',
        'in',
        'arcu',
        'cursus',
        'euismod',
        'quis',
        'viverra',
        'nibh',
        'cras',
        'pulvinar',
        'mattis',
        'nunc,',
        'sed',
        'blandit',
        'libero',
        'volutpat',
        'sed',
        'cras',
        'ornare',
        'arcu',
        'dui',
        'vivamus',
        'arcu',
        'felis,',
        'bibendum',
        'ut',
        'tristique',
        'et,',
        'egestas',
        'quis',
        'ipsum',
        'suspendisse',
        'ultrices',
        'fusce',
        'ut',
        'placerat',
        'orci',
        'nulla',
        'pellentesque',
        'dignissim',
        'enim,',
        'sit',
        'amet',
        'venenatis',
        'urna',
        'cursus',
        'eget',
        'nunc',
        'scelerisque',
        'viverra',
        'mauris,',
        'in',
        'aliquam',
        'sem',
        'fringilla',
        'ut',
        'morbi',
        'tincidunt',
        'augue',
        'interdum',
        'velit',
        'euismod',
        'in',
        'pellentesque',
        'massa',
        'placerat',
        'duis',
        'ultricies',
        'lacus',
        'sed',
        'turpis',
        'tincidunt',
        'id',
        'aliquet',
        'risus',
        'feugiat',
        'in',
        'ante',
        'metus,',
        'dictum',
        'at',
        'tempor',
        'commodo,',
        'ullamcorper',
        'a',
        'lacus',
        'vestibulum',
        'sed',
        'arcu',
        'non',
        'odio',
        'euismod',
        'lacinia',
        'at',
        'quis',
        'risus',
        'sed',
        'vulputate',
        'odio',
        'ut',
        'enim',
        'blandit',
        'volutpat',
        'maecenas',
        'volutpat',
        'blandit',
        'aliquam',
        'etiam',
        'erat',
        'velit,',
        'scelerisque',
        'in',
        'dictum',
        'non,',
        'consectetur',
        'a',
        'erat',
        'nam',
        'at',
        'lectus',
        'urna',
        'duis',
        'convallis',
        'convallis',
        'tellus,',
        'id',
        'interdum',
        'velit',
        'laoreet',
        'id',
        'donec',
        'ultrices',
        'tincidunt',
        'arcu,',
        'non',
        'sodales',
        'neque',
        'sodales',
        'ut',
        'etiam',
        'sit',
        'amet',
        'nisl',
        'purus,',
        'in',
        'mollis',
        'nunc',
        'sed',
        'id',
        'semper',
        'risus',
        'in',
        'hendrerit',
        'gravida',
        'rutrum',
        'quisque',
        'non',
        'tellus',
        'orci,',
        'ac',
        'auctor',
        'augue',
        'mauris',
        'augue',
        'neque,',
        'gravida',
        'in',
        'fermentum',
        'et,',
        'sollicitudin',
        'ac',
        'orci',
        'phasellus',
        'egestas',
        'tellus',
        'rutrum',
        'tellus',
        'pellentesque',
        'eu',
        'tincidunt',
        'tortor',
        'aliquam',
        'nulla',
        'facilisi',
        'cras',
        'fermentum,',
        'odio',
        'eu',
        'feugiat',
        'pretium,',
        'nibh',
        'ipsum',
        'consequat',
        'nisl,',
        'vel',
        'pretium',
        'lectus',
        'quam',
        'id',
        'leo',
        'in',
        'vitae',
        'turpis',
        'massa',
        'sed',
        'elementum',
        'tempus',
        'egestas',
        'sed',
        'sed',
        'risus',
        'pretium',
        'quam',
        'vulputate',
        'dignissim',
        'suspendisse',
        'in',
        'est',
        'ante',
        'in',
        'nibh',
        'mauris,',
        'cursus',
        'mattis',
        'molestie',
        'a,',
        'iaculis',
        'at',
        'erat',
        'pellentesque',
        'adipiscing',
        'commodo',
        'elit,',
        'at',
        'imperdiet',
        'dui',
        'accumsan',
        'sit',
        'amet',
        'nulla',
        'facilisi',
        'morbi',
        'tempus',
        'iaculis',
        'urna,',
        'id',
        'volutpat',
        'lacus',
        'laoreet',
        'non',
        'curabitur',
        'gravida',
        'arcu',
        'ac',
        'tortor',
        'dignissim',
        'convallis',
        'aenean',
        'et',
        'tortor',
        'at',
        'risus',
        'viverra',
        'adipiscing',
        'at',
        'in',
        'tellus',
        'integer',
        'feugiat',
        'scelerisque',
        'varius',
        'morbi',
        'enim',
        'nunc,',
        'faucibus',
        'a',
        'pellentesque',
        'sit',
        'amet,',
        'porttitor',
        'eget',
        'dolor',
        'morbi',
        'non',
        'arcu',
        'risus,',
        'quis',
        'varius',
        'quam',
        'quisque',
        'id',
        'diam',
        'vel',
        'quam',
        'elementum',
        'pulvinar',
        'etiam',
        'non',
        'quam',
        'lacus',
        'suspendisse',
        'faucibus',
        'interdum',
        'posuere',
        'lorem',
        'ipsum',
        'dolor',
        'sit',
        'amet,',
        'consectetur',
        'adipiscing',
        'elit',
        'duis',
        'tristique',
        'sollicitudin',
        'nibh',
        'sit',
        'amet',
        'commodo',
        'nulla',
        'facilisi',
        'nullam',
        'vehicula',
        'ipsum',
        'a',
        'arcu',
        'cursus',
        'vitae',
        'congue',
        'mauris',
        'rhoncus',
        'aenean',
        'vel',
        'elit',
        'scelerisque',
        'mauris',
        'pellentesque',
        'pulvinar',
        'pellentesque',
        'habitant',
        'morbi',
        'tristique',
        'senectus',
        'et',
        'netus',
        'et',
        'malesuada',
        'fames',
        'ac',
        'turpis',
        'egestas',
        'maecenas',
        'pharetra',
        'convallis',
        'posuere',
        'morbi',
        'leo',
        'urna,',
        'molestie',
        'at',
        'elementum',
        'eu,',
        'facilisis',
        'sed',
        'odio',
        'morbi',
        'quis',
        'commodo',
        'odio',
        'aenean',
        'sed',
        'adipiscing',
        'diam',
        'donec',
        'adipiscing',
        'tristique',
        'risus',
        'nec',
        'feugiat',
        'in',
        'fermentum',
        'posuere',
        'urna',
        'nec',
        'tincidunt',
        'praesent',
        'semper',
        'feugiat',
        'nibh',
        'sed',
        'pulvinar',
        'proin',
        'gravida',
        'hendrerit',
        'lectus',
        'a',
        'molestie',
        'gravida',
        'dictum'
      ];
    return {
      createSentence: function (n) {
        var r, i;
        return n = n || t(5, 20), r = t(0, e.length - n - 1), i = e.slice(r, r + n).join(' ').replace(/\,$/g, '') + '.', i = i.charAt(0).toUpperCase() + i.slice(1), i;
      },
      createSentences: function (e) {
        var n = [], r = 0;
        e = e || t(3, 5);
        for (r = 0; r < e; r++)
          n.push(this.createSentence());
        return n.join(' ');
      },
      createParagraph: function (e) {
        var t = this.createSentences(e);
        return '<p>' + t + '</p>';
      },
      createParagraphs: function (e, n) {
        var r = [], i = 0;
        e = e || t(3, 7);
        for (i = 0; i < e; i++)
          r.push(this.createParagraph(n));
        return r.join('\n');
      }
    };
  }).directive('phTxt', [
    'TextGeneratorService',
    function (e) {
      return {
        restrict: 'EA',
        controller: [
          '$scope',
          '$element',
          '$attrs',
          function (t, n, r) {
            function o() {
              var t;
              s || !i ? t = e.createParagraphs(s, i) : t = e.createSentences(i), n.html(t);
            }
            var i, s;
            r.$observe('phTxt', function (e) {
              var t, n;
              t = e.match(/(\d+)p/), n = e.match(/(\d+)s/), t !== null ? s = parseInt(t[1], 10) : s = !1, n !== null ? i = parseInt(n[1], 10) : i = !1, o();
            }), r.phTxt || o();
          }
        ]
      };
    }
  ]);
  angular.module('ui.route', []).directive('uiRoute', [
    '$location',
    '$parse',
    function ($location, $parse) {
      return {
        restrict: 'AC',
        scope: true,
        compile: function (tElement, tAttrs) {
          var useProperty;
          if (tAttrs.uiRoute) {
            useProperty = 'uiRoute';
          } else if (tAttrs.ngHref) {
            useProperty = 'ngHref';
          } else if (tAttrs.href) {
            useProperty = 'href';
          } else {
            throw new Error('uiRoute missing a route or href property on ' + tElement[0]);
          }
          return function ($scope, elm, attrs) {
            var modelSetter = $parse(attrs.ngModel || attrs.routeModel || '$uiRoute').assign;
            var watcher = angular.noop;
            function staticWatcher(newVal) {
              if ((hash = newVal.indexOf('#')) > -1)
                newVal = newVal.substr(hash + 1);
              watcher = function watchHref() {
                modelSetter($scope, $location.path().indexOf(newVal) > -1);
              };
              watcher();
            }
            function regexWatcher(newVal) {
              if ((hash = newVal.indexOf('#')) > -1)
                newVal = newVal.substr(hash + 1);
              watcher = function watchRegex() {
                var regexp = new RegExp('^' + newVal + '$', ['i']);
                modelSetter($scope, regexp.test($location.path()));
              };
              watcher();
            }
            switch (useProperty) {
            case 'uiRoute':
              if (attrs.uiRoute)
                regexWatcher(attrs.uiRoute);
              else
                attrs.$observe('uiRoute', regexWatcher);
              break;
            case 'ngHref':
              if (attrs.ngHref)
                staticWatcher(attrs.ngHref);
              else
                attrs.$observe('ngHref', staticWatcher);
              break;
            case 'href':
              staticWatcher(attrs.href);
            }
            $scope.$on('$routeChangeSuccess', function () {
              watcher();
            });
          };
        }
      };
    }
  ]);
}(window, window.angular));
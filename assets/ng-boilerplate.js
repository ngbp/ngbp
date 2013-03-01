/**
 * ng-boilerplate - v0.1.0-SNAPSHOT - 2013-02-28
 * http://bit.ly/ng-boilerplate
 *
 * Copyright (c) 2013 Josh David Miller
 * Licensed MIT <https://raw.github.com/joshdmiller/ng-boilerplate/master/LICENSE>
 */
(function ( window, angular, undefined ) {

angular.module( 'ngBoilerplate.about', [
  'placeholders',
  'ui.bootstrap',
  'titleService'
])

.config([ '$routeProvider', function config( $routeProvider ) {
  $routeProvider.when( '/about', {
    controller: 'AboutCtrl',
    templateUrl: 'about/about.tpl.html'
  });
}])

.controller( 'AboutCtrl', [ '$scope', 'titleService', function AboutCtrl( $scope, titleService ) {
  titleService.setTitle( 'What is It?' );
  
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
}])

;

angular.module( 'ngBoilerplate', [
  'app-templates',
  'component-templates',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'activeIfCurrent'
])

.config( function myAppConfig ( $routeProvider ) {
  $routeProvider.otherwise({ redirectTo: '/home' });
})

.run([ 'titleService', function run ( titleService ) {
  titleService.setSuffix( ' | ngBoilerplate' );
}])

.controller( 'AppCtrl', [ '$scope', '$location', function AppCtrl ( $scope, $location ) {
}])

;


/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'ngBoilerplate.home', [
  'titleService'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config([ '$routeProvider', function config( $routeProvider ) {
  $routeProvider.when( '/home', {
    controller: 'HomeCtrl',
    templateUrl: 'home/home.tpl.html'
  });
}])

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', [ '$scope', 'titleService', function HomeController( $scope, titleService ) {
  titleService.setTitle( 'Home' );
}])

;


angular.module( 'activeIfCurrent', [])

.directive( 'activeIfCurrent', [ '$location', function( $location ) {
  return {
    scope: true,
    link: function( scope, element, attrs ) {
      var check = function check () {
        var el = element.find( 'a' );
        var path = $location.path();
        var href = el.attr( 'href' );
        if ( path === href || '#' + path === href ) {
          element.addClass( 'active' );
        } else {
          element.removeClass( 'active' );
        }
      };

      scope.$on( '$routeChangeSuccess', check );
      scope.$on( '$locationChangeSuccess', check );
    }
  };
}]);


angular.module("placeholders",["placeholders.img","placeholders.txt"]),angular.module("placeholders.img",[]).directive("phImg",function(){return{restrict:"A",scope:{dimensions:"@phImg"},link:function(e,t,n){function s(){var t=[e.size.h,e.size.w].sort(),n=Math.round(t[1]/16);return Math.max(i.text_size,n)}function o(){r=r||document.createElement("canvas");var t=r.getContext("2d"),n,o;return r.width=e.size.w,r.height=e.size.h,t.fillStyle=i.fill_color,t.fillRect(0,0,e.size.w,e.size.h),n=s(),o=e.dimensions,t.fillStyle=i.text_color,t.textAlign="center",t.textBaseline="middle",t.font="bold "+n+"pt sans-serif",t.measureText(o).width/e.size.w>1&&(n=i.text_size/(t.measureText(o).width/e.size.w),t.font="bold "+n+"pt sans-serif"),t.fillText(e.dimensions,e.size.w/2,e.size.h/2),r.toDataURL("image/png")}var r,i={text_size:10,fill_color:"#EEEEEE",text_color:"#AAAAAA"};e.$watch("dimensions",function(){if(!angular.isDefined(e.dimensions))return;var n=e.dimensions.match(/^(\d+)x(\d+)$/),r;if(!n){console.error("Expected '000x000'. Got "+e.dimensions);return}e.size={w:n[1],h:n[2]},t.prop("title",e.dimensions),t.prop("alt",e.dimensions),r=o(),t.prop("tagName")==="IMG"?t.prop("src",r):t.css("background-image",'url("'+r+'")')})}}}),angular.module("placeholders.txt",[]).factory("TextGeneratorService",function(){function t(e,t){return Math.floor(Math.random()*(t-e+1))+e}var e=["lorem","ipsum","dolor","sit","amet,","consectetur","adipiscing","elit","ut","aliquam,","purus","sit","amet","luctus","venenatis,","lectus","magna","fringilla","urna,","porttitor","rhoncus","dolor","purus","non","enim","praesent","elementum","facilisis","leo,","vel","fringilla","est","ullamcorper","eget","nulla","facilisi","etiam","dignissim","diam","quis","enim","lobortis","scelerisque","fermentum","dui","faucibus","in","ornare","quam","viverra","orci","sagittis","eu","volutpat","odio","facilisis","mauris","sit","amet","massa","vitae","tortor","condimentum","lacinia","quis","vel","eros","donec","ac","odio","tempor","orci","dapibus","ultrices","in","iaculis","nunc","sed","augue","lacus,","viverra","vitae","congue","eu,","consequat","ac","felis","donec","et","odio","pellentesque","diam","volutpat","commodo","sed","egestas","egestas","fringilla","phasellus","faucibus","scelerisque","eleifend","donec","pretium","vulputate","sapien","nec","sagittis","aliquam","malesuada","bibendum","arcu","vitae","elementum","curabitur","vitae","nunc","sed","velit","dignissim","sodales","ut","eu","sem","integer","vitae","justo","eget","magna","fermentum","iaculis","eu","non","diam","phasellus","vestibulum","lorem","sed","risus","ultricies","tristique","nulla","aliquet","enim","tortor,","at","auctor","urna","nunc","id","cursus","metus","aliquam","eleifend","mi","in","nulla","posuere","sollicitudin","aliquam","ultrices","sagittis","orci,","a","scelerisque","purus","semper","eget","duis","at","tellus","at","urna","condimentum","mattis","pellentesque","id","nibh","tortor,","id","aliquet","lectus","proin","nibh","nisl,","condimentum","id","venenatis","a,","condimentum","vitae","sapien","pellentesque","habitant","morbi","tristique","senectus","et","netus","et","malesuada","fames","ac","turpis","egestas","sed","tempus,","urna","et","pharetra","pharetra,","massa","massa","ultricies","mi,","quis","hendrerit","dolor","magna","eget","est","lorem","ipsum","dolor","sit","amet,","consectetur","adipiscing","elit","pellentesque","habitant","morbi","tristique","senectus","et","netus","et","malesuada","fames","ac","turpis","egestas","integer","eget","aliquet","nibh","praesent","tristique","magna","sit","amet","purus","gravida","quis","blandit","turpis","cursus","in","hac","habitasse","platea","dictumst","quisque","sagittis,","purus","sit","amet","volutpat","consequat,","mauris","nunc","congue","nisi,","vitae","suscipit","tellus","mauris","a","diam","maecenas","sed","enim","ut","sem","viverra","aliquet","eget","sit","amet","tellus","cras","adipiscing","enim","eu","turpis","egestas","pretium","aenean","pharetra,","magna","ac","placerat","vestibulum,","lectus","mauris","ultrices","eros,","in","cursus","turpis","massa","tincidunt","dui","ut","ornare","lectus","sit","amet","est","placerat","in","egestas","erat","imperdiet","sed","euismod","nisi","porta","lorem","mollis","aliquam","ut","porttitor","leo","a","diam","sollicitudin","tempor","id","eu","nisl","nunc","mi","ipsum,","faucibus","vitae","aliquet","nec,","ullamcorper","sit","amet","risus","nullam","eget","felis","eget","nunc","lobortis","mattis","aliquam","faucibus","purus","in","massa","tempor","nec","feugiat","nisl","pretium","fusce","id","velit","ut","tortor","pretium","viverra","suspendisse","potenti","nullam","ac","tortor","vitae","purus","faucibus","ornare","suspendisse","sed","nisi","lacus,","sed","viverra","tellus","in","hac","habitasse","platea","dictumst","vestibulum","rhoncus","est","pellentesque","elit","ullamcorper","dignissim","cras","tincidunt","lobortis","feugiat","vivamus","at","augue","eget","arcu","dictum","varius","duis","at","consectetur","lorem","donec","massa","sapien,","faucibus","et","molestie","ac,","feugiat","sed","lectus","vestibulum","mattis","ullamcorper","velit","sed","ullamcorper","morbi","tincidunt","ornare","massa,","eget","egestas","purus","viverra","accumsan","in","nisl","nisi,","scelerisque","eu","ultrices","vitae,","auctor","eu","augue","ut","lectus","arcu,","bibendum","at","varius","vel,","pharetra","vel","turpis","nunc","eget","lorem","dolor,","sed","viverra","ipsum","nunc","aliquet","bibendum","enim,","facilisis","gravida","neque","convallis","a","cras","semper","auctor","neque,","vitae","tempus","quam","pellentesque","nec","nam","aliquam","sem","et","tortor","consequat","id","porta","nibh","venenatis","cras","sed","felis","eget","velit","aliquet","sagittis","id","consectetur","purus","ut","faucibus","pulvinar","elementum","integer","enim","neque,","volutpat","ac","tincidunt","vitae,","semper","quis","lectus","nulla","at","volutpat","diam","ut","venenatis","tellus","in","metus","vulputate","eu","scelerisque","felis","imperdiet","proin","fermentum","leo","vel","orci","porta","non","pulvinar","neque","laoreet","suspendisse","interdum","consectetur","libero,","id","faucibus","nisl","tincidunt","eget","nullam","non","nisi","est,","sit","amet","facilisis","magna","etiam","tempor,","orci","eu","lobortis","elementum,","nibh","tellus","molestie","nunc,","non","blandit","massa","enim","nec","dui","nunc","mattis","enim","ut","tellus","elementum","sagittis","vitae","et","leo","duis","ut","diam","quam","nulla","porttitor","massa","id","neque","aliquam","vestibulum","morbi","blandit","cursus","risus,","at","ultrices","mi","tempus","imperdiet","nulla","malesuada","pellentesque","elit","eget","gravida","cum","sociis","natoque","penatibus","et","magnis","dis","parturient","montes,","nascetur","ridiculus","mus","mauris","vitae","ultricies","leo","integer","malesuada","nunc","vel","risus","commodo","viverra","maecenas","accumsan,","lacus","vel","facilisis","volutpat,","est","velit","egestas","dui,","id","ornare","arcu","odio","ut","sem","nulla","pharetra","diam","sit","amet","nisl","suscipit","adipiscing","bibendum","est","ultricies","integer","quis","auctor","elit","sed","vulputate","mi","sit","amet","mauris","commodo","quis","imperdiet","massa","tincidunt","nunc","pulvinar","sapien","et","ligula","ullamcorper","malesuada","proin","libero","nunc,","consequat","interdum","varius","sit","amet,","mattis","vulputate","enim","nulla","aliquet","porttitor","lacus,","luctus","accumsan","tortor","posuere","ac","ut","consequat","semper","viverra","nam","libero","justo,","laoreet","sit","amet","cursus","sit","amet,","dictum","sit","amet","justo","donec","enim","diam,","vulputate","ut","pharetra","sit","amet,","aliquam","id","diam","maecenas","ultricies","mi","eget","mauris","pharetra","et","ultrices","neque","ornare","aenean","euismod","elementum","nisi,","quis","eleifend","quam","adipiscing","vitae","proin","sagittis,","nisl","rhoncus","mattis","rhoncus,","urna","neque","viverra","justo,","nec","ultrices","dui","sapien","eget","mi","proin","sed","libero","enim,","sed","faucibus","turpis","in","eu","mi","bibendum","neque","egestas","congue","quisque","egestas","diam","in","arcu","cursus","euismod","quis","viverra","nibh","cras","pulvinar","mattis","nunc,","sed","blandit","libero","volutpat","sed","cras","ornare","arcu","dui","vivamus","arcu","felis,","bibendum","ut","tristique","et,","egestas","quis","ipsum","suspendisse","ultrices","fusce","ut","placerat","orci","nulla","pellentesque","dignissim","enim,","sit","amet","venenatis","urna","cursus","eget","nunc","scelerisque","viverra","mauris,","in","aliquam","sem","fringilla","ut","morbi","tincidunt","augue","interdum","velit","euismod","in","pellentesque","massa","placerat","duis","ultricies","lacus","sed","turpis","tincidunt","id","aliquet","risus","feugiat","in","ante","metus,","dictum","at","tempor","commodo,","ullamcorper","a","lacus","vestibulum","sed","arcu","non","odio","euismod","lacinia","at","quis","risus","sed","vulputate","odio","ut","enim","blandit","volutpat","maecenas","volutpat","blandit","aliquam","etiam","erat","velit,","scelerisque","in","dictum","non,","consectetur","a","erat","nam","at","lectus","urna","duis","convallis","convallis","tellus,","id","interdum","velit","laoreet","id","donec","ultrices","tincidunt","arcu,","non","sodales","neque","sodales","ut","etiam","sit","amet","nisl","purus,","in","mollis","nunc","sed","id","semper","risus","in","hendrerit","gravida","rutrum","quisque","non","tellus","orci,","ac","auctor","augue","mauris","augue","neque,","gravida","in","fermentum","et,","sollicitudin","ac","orci","phasellus","egestas","tellus","rutrum","tellus","pellentesque","eu","tincidunt","tortor","aliquam","nulla","facilisi","cras","fermentum,","odio","eu","feugiat","pretium,","nibh","ipsum","consequat","nisl,","vel","pretium","lectus","quam","id","leo","in","vitae","turpis","massa","sed","elementum","tempus","egestas","sed","sed","risus","pretium","quam","vulputate","dignissim","suspendisse","in","est","ante","in","nibh","mauris,","cursus","mattis","molestie","a,","iaculis","at","erat","pellentesque","adipiscing","commodo","elit,","at","imperdiet","dui","accumsan","sit","amet","nulla","facilisi","morbi","tempus","iaculis","urna,","id","volutpat","lacus","laoreet","non","curabitur","gravida","arcu","ac","tortor","dignissim","convallis","aenean","et","tortor","at","risus","viverra","adipiscing","at","in","tellus","integer","feugiat","scelerisque","varius","morbi","enim","nunc,","faucibus","a","pellentesque","sit","amet,","porttitor","eget","dolor","morbi","non","arcu","risus,","quis","varius","quam","quisque","id","diam","vel","quam","elementum","pulvinar","etiam","non","quam","lacus","suspendisse","faucibus","interdum","posuere","lorem","ipsum","dolor","sit","amet,","consectetur","adipiscing","elit","duis","tristique","sollicitudin","nibh","sit","amet","commodo","nulla","facilisi","nullam","vehicula","ipsum","a","arcu","cursus","vitae","congue","mauris","rhoncus","aenean","vel","elit","scelerisque","mauris","pellentesque","pulvinar","pellentesque","habitant","morbi","tristique","senectus","et","netus","et","malesuada","fames","ac","turpis","egestas","maecenas","pharetra","convallis","posuere","morbi","leo","urna,","molestie","at","elementum","eu,","facilisis","sed","odio","morbi","quis","commodo","odio","aenean","sed","adipiscing","diam","donec","adipiscing","tristique","risus","nec","feugiat","in","fermentum","posuere","urna","nec","tincidunt","praesent","semper","feugiat","nibh","sed","pulvinar","proin","gravida","hendrerit","lectus","a","molestie","gravida","dictum"];return{createSentence:function(n){var r,i;return n=n||t(5,20),r=t(0,e.length-n-1),i=e.slice(r,r+n).join(" ").replace(/\,$/g,"")+".",i=i.charAt(0).toUpperCase()+i.slice(1),i},createSentences:function(e){var n=[],r=0;e=e||t(3,5);for(r=0;r<e;r++)n.push(this.createSentence());return n.join(" ")},createParagraph:function(e){var t=this.createSentences(e);return"<p>"+t+"</p>"},createParagraphs:function(e,n){var r=[],i=0;e=e||t(3,7);for(i=0;i<e;i++)r.push(this.createParagraph(n));return r.join("\n")}}}).directive("phTxt",["TextGeneratorService",function(e){return{restrict:"EA",controller:["$scope","$element","$attrs",function(t,n,r){function o(){var t;s||!i?t=e.createParagraphs(s,i):t=e.createSentences(i),n.html(t)}var i,s;r.$observe("phTxt",function(e){var t,n;t=e.match(/(\d+)p/),n=e.match(/(\d+)s/),t!==null?s=parseInt(t[1],10):s=!1,n!==null?i=parseInt(n[1],10):i=!1,o()}),r.phTxt||o()}]}}]);
angular.module( 'titleService', [])

.factory( 'titleService', [ '$document', function ( $document ) {
  var suffix, title;
  
  var titleService = {
    setSuffix: function setSuffix ( s ) {
      suffix = s;
    },
    getSuffix: function getSuffix () {
      return suffix;
    },
    setTitle: function setTitle ( t ) {
      if ( angular.isDefined( suffix ) ) {
        title = t + suffix;
      } else {
        title = t;
      }

      $document.prop( 'title', title );
    },
    getTitle: function getTitle () {
      return $document.prop( 'title' );
    }
  };

  return titleService;
}]);


angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.carousel","ui.bootstrap.collapse","ui.bootstrap.dialog","ui.bootstrap.dropdownToggle","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.popover","ui.bootstrap.tabs","ui.bootstrap.tooltip","ui.bootstrap.transition"]);

angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/dialog/message.html","template/pagination/pagination.html","template/popover/popover.html","template/tabs/pane.html","template/tabs/tabs.html","template/tooltip/tooltip-popup.html"]);

angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse'])

.constant('accordionConfig', {
  closeOthers: true
})

.controller('AccordionController', ['$scope', '$attrs', 'accordionConfig', function ($scope, $attrs, accordionConfig) {
  
  // This array keeps track of the accordion groups
  this.groups = [];

  // Ensure that all the groups in this accordion are closed, unless close-others explicitly says not to
  this.closeOthers = function(openGroup) {
    var closeOthers = angular.isDefined($attrs.closeOthers) ? $scope.$eval($attrs.closeOthers) : accordionConfig.closeOthers;
    if ( closeOthers ) {
      angular.forEach(this.groups, function (group) {
        if ( group !== openGroup ) {
          group.isOpen = false;
        }
      });
    }
  };
  
  // This is called from the accordion-group directive to add itself to the accordion
  this.addGroup = function(groupScope) {
    var that = this;
    this.groups.push(groupScope);

    groupScope.$on('$destroy', function (event) {
      that.removeGroup(groupScope);
    });
  };

  // This is called from the accordion-group directive when to remove itself
  this.removeGroup = function(group) {
    var index = this.groups.indexOf(group);
    if ( index !== -1 ) {
      this.groups.splice(this.groups.indexOf(group), 1);
    }
  };

}]);

// The accordion directive simply sets up the directive controller
// and adds an accordion CSS class to itself element.
angular.module('ui.bootstrap.accordion').directive('accordion', function () {
  return {
    restrict:'EA',
    controller:'AccordionController',
    transclude: true,
    replace: false,
    templateUrl: 'template/accordion/accordion.html'
  };
});

// The accordion-group directive indicates a block of html that will expand and collapse in an accordion
angular.module('ui.bootstrap.accordion').directive('accordionGroup', ['$parse', '$transition', '$timeout', function($parse, $transition, $timeout) {
  return {
    require:'^accordion',         // We need this directive to be inside an accordion
    restrict:'EA',
    transclude:true,              // It transcludes the contents of the directive into the template
    replace: true,                // The element containing the directive will be replaced with the template
    templateUrl:'template/accordion/accordion-group.html',
    scope:{ heading:'@' },        // Create an isolated scope and interpolate the heading attribute onto this scope
    link: function(scope, element, attrs, accordionCtrl) {
      var getIsOpen, setIsOpen;

      accordionCtrl.addGroup(scope);

      scope.isOpen = false;
      
      if ( attrs.isOpen ) {
        getIsOpen = $parse(attrs.isOpen);
        setIsOpen = getIsOpen.assign;

        scope.$watch(
          function watchIsOpen() { return getIsOpen(scope.$parent); },
          function updateOpen(value) { scope.isOpen = value; }
        );
        
        scope.isOpen = getIsOpen ? getIsOpen(scope.$parent) : false;
      }

      scope.$watch('isOpen', function(value) {
        if ( value ) {
          accordionCtrl.closeOthers(scope);
        }
        if ( setIsOpen ) {
          setIsOpen(scope.$parent, value);
        }
      });

    }
  };
}]);

angular.module("ui.bootstrap.alert", []).directive('alert', function () {
  return {
    restrict:'EA',
    templateUrl:'template/alert/alert.html',
    transclude:true,
    replace:true,
    scope:{
      type:'=',
      close:'&'
    }
  };
});
/*
*
*    Angular Bootstrap Carousel 
*
*      The carousel has all of the function that the original Bootstrap carousel has, except for animations.
*      
*      For no interval set the interval to non-number, or milliseconds of desired interval
*      Template: <carousel interval="none"><slide>{{anything}}</slide></carousel>
*      To change the carousel's active slide set the active attribute to true
*      Template: <carousel interval="none"><slide active="someModel">{{anything}}</slide></carousel>
*/
angular.module('ui.bootstrap.carousel', ['ui.bootstrap.transition'])
.controller('CarouselController', ['$scope', '$timeout', '$transition', '$q', function ($scope, $timeout, $transition, $q) {
  var self = this,
    slides = self.slides = [],
    currentIndex = -1,
    currentTimeout, isPlaying;
  self.currentSlide = null;

  /* direction: "prev" or "next" */
  self.select = function(nextSlide, direction) {
    var nextIndex = slides.indexOf(nextSlide);
    //Decide direction if it's not given
    if (direction === undefined) {
      direction = nextIndex > currentIndex ? "next" : "prev";
    }
    if (nextSlide && nextSlide !== self.currentSlide) {
      if ($scope.$currentTransition) {
        $scope.$currentTransition.cancel();
        //Timeout so ng-class in template has time to fix classes for finished slide
        $timeout(goNext);
      } else {
        goNext();
      }
    }
    function goNext() {
      //If we have a slide to transition from and we have a transition type and we're allowed, go
      if (self.currentSlide && angular.isString(direction) && !$scope.noTransition && nextSlide.$element) { 
        //We shouldn't do class manip in here, but it's the same weird thing bootstrap does. need to fix sometime
        nextSlide.$element.addClass(direction);
        nextSlide.$element[0].offsetWidth = nextSlide.$element[0].offsetWidth; //force reflow

        //Set all other slides to stop doing their stuff for the new transition
        angular.forEach(slides, function(slide) {
          angular.extend(slide, {direction: '', entering: false, leaving: false, active: false});
        });
        angular.extend(nextSlide, {direction: direction, active: true, entering: true});
        angular.extend(self.currentSlide||{}, {direction: direction, leaving: true});

        $scope.$currentTransition = $transition(nextSlide.$element, {});
        //We have to create new pointers inside a closure since next & current will change
        (function(next,current) {
          $scope.$currentTransition.then(
            function(){ transitionDone(next, current); },
            function(){ transitionDone(next, current); }
          );
        }(nextSlide, self.currentSlide));
      } else {
        transitionDone(nextSlide, self.currentSlide);
      }
      self.currentSlide = nextSlide;
      currentIndex = nextIndex;
      //every time you change slides, reset the timer
      restartTimer();
    }
    function transitionDone(next, current) {
      angular.extend(next, {direction: '', active: true, leaving: false, entering: false});
      angular.extend(current||{}, {direction: '', active: false, leaving: false, entering: false});
      $scope.$currentTransition = null;
    }
  };

  /* Allow outside people to call indexOf on slides array */
  self.indexOfSlide = function(slide) {
    return slides.indexOf(slide);
  };

  $scope.next = function() {
    var newIndex = (currentIndex + 1) % slides.length;
    return self.select(slides[newIndex], 'next');
  };

  $scope.prev = function() {
    var newIndex = currentIndex - 1 < 0 ? slides.length - 1 : currentIndex - 1;
    return self.select(slides[newIndex], 'prev');
  };

  $scope.$watch('interval', restartTimer);
  function restartTimer() {
    if (currentTimeout) {
      $timeout.cancel(currentTimeout);
    }
    function go() {
      if (isPlaying) {
        $scope.next();
        restartTimer();
      } else {
        $scope.pause();
      }
    }
    var interval = +$scope.interval;
    if (!isNaN(interval) && interval>=0) {
      currentTimeout = $timeout(go, interval);
    }
  }
  $scope.play = function() {
    if (!isPlaying) {
      isPlaying = true;
      restartTimer();
    }
  };
  $scope.pause = function() {
    isPlaying = false;
    if (currentTimeout) {
      $timeout.cancel(currentTimeout);
    }
  };

  self.addSlide = function(slide, element) {
    slide.$element = element;
    slides.push(slide);
    //if this is the first slide or the slide is set to active, select it
    if(slides.length === 1 || slide.active) {
      self.select(slides[slides.length-1]);
      if (slides.length == 1) {
        $scope.play();
      }
    } else {
      slide.active = false;
    }
  };

  self.removeSlide = function(slide) {
    //get the index of the slide inside the carousel
    var index = slides.indexOf(slide);
    slides.splice(index, 1);
    if (slides.length > 0 && slide.active) {
      if (index >= slides.length) {
        self.select(slides[index-1]);
      } else {
        self.select(slides[index]);
      }
    }
  };
}])
.directive('carousel', [function() {
  return {
    restrict: 'EA',
    transclude: true,
    replace: true,
    controller: 'CarouselController',
    require: 'carousel',
    templateUrl: 'template/carousel/carousel.html',
    scope: {
      interval: '=',
      noTransition: '='
    }
  };
}])
.directive('slide', [function() {
  return {
    require: '^carousel',
    restrict: 'EA',
    transclude: true,
    replace: true,
    templateUrl: 'template/carousel/slide.html',
    scope: {
      active: '='
    },
    link: function (scope, element, attrs, carouselCtrl) {
      carouselCtrl.addSlide(scope, element);
      //when the scope is destroyed then remove the slide from the current slides array
      scope.$on('$destroy', function() {
        carouselCtrl.removeSlide(scope);
      });

      scope.$watch('active', function(active) {
        if (active) {
          carouselCtrl.select(scope);
        }
      });
    }
  };
}]);

angular.module('ui.bootstrap.collapse',['ui.bootstrap.transition'])

// The collapsible directive indicates a block of html that will expand and collapse
.directive('collapse', ['$transition', function($transition) {
  // CSS transitions don't work with height: auto, so we have to manually change the height to a
  // specific value and then once the animation completes, we can reset the height to auto.
  // Unfortunately if you do this while the CSS transitions are specified (i.e. in the CSS class
  // "collapse") then you trigger a change to height 0 in between.
  // The fix is to remove the "collapse" CSS class while changing the height back to auto - phew!
  var fixUpHeight = function(scope, element, height) {
    // We remove the collapse CSS class to prevent a transition when we change to height: auto
    element.removeClass('collapse');
    element.css({ height: height });
    // It appears that  reading offsetWidth makes the browser realise that we have changed the
    // height already :-/
    var x = element[0].offsetWidth;
    element.addClass('collapse');
  };

  return {
    link: function(scope, element, attrs) {

      var isCollapsed;
      var initialAnimSkip = true;
      scope.$watch(function (){ return element[0].scrollHeight; }, function (value) {
        //The listener is called when scollHeight changes
        //It actually does on 2 scenarios: 
        // 1. Parent is set to display none
        // 2. angular bindings inside are resolved
        //When we have a change of scrollHeight we are setting again the correct height if the group is opened
        if (element[0].scrollHeight !== 0) {
          if (!isCollapsed) {
            fixUpHeight(scope, element, element[0].scrollHeight + 'px');
          }
        }
      });
      
      scope.$watch(attrs.collapse, function(value) {
        if (value) {
          collapse();
        } else {
          expand();
        }
      });
      

      var currentTransition;
      var doTransition = function(change) {
        if ( currentTransition ) {
          currentTransition.cancel();
        }
        currentTransition = $transition(element,change);
        currentTransition.then(
          function() { currentTransition = undefined; },
          function() { currentTransition = undefined; }
        );
        return currentTransition;
      };

      var expand = function() {
        if (initialAnimSkip) {
          initialAnimSkip = false;
          if ( !isCollapsed ) {
            fixUpHeight(scope, element, 'auto');
          }
        } else {
          doTransition({ height : element[0].scrollHeight + 'px' })
          .then(function() {
            // This check ensures that we don't accidentally update the height if the user has closed
            // the group while the animation was still running
            if ( !isCollapsed ) {
              fixUpHeight(scope, element, 'auto');
            }
          });
        }
        isCollapsed = false;
      };
      
      var collapse = function() {
        isCollapsed = true;
        if (initialAnimSkip) {
          initialAnimSkip = false;
          fixUpHeight(scope, element, 0);
        } else {
          fixUpHeight(scope, element, element[0].scrollHeight + 'px');
          doTransition({'height':'0'});
        }
      };
    }
  };
}]);

// The `$dialogProvider` can be used to configure global defaults for your
// `$dialog` service.
var dialogModule = angular.module('ui.bootstrap.dialog', ['ui.bootstrap.transition']);

dialogModule.controller('MessageBoxController', ['$scope', 'dialog', 'model', function($scope, dialog, model){
  $scope.title = model.title;
  $scope.message = model.message;
  $scope.buttons = model.buttons;
  $scope.close = function(res){
    dialog.close(res);
  };
}]);

dialogModule.provider("$dialog", function(){

  // The default options for all dialogs.
	var defaults = {
		backdrop: true,
		modalClass: 'modal',
		backdropClass: 'modal-backdrop',
    transitionClass: 'fade',
    triggerClass: 'in',
		resolve:{},
		backdropFade: false,
		modalFade:false,
		keyboard: true, // close with esc key
		backdropClick: true // only in conjunction with backdrop=true
    /* other options: template, templateUrl, controller */
	};

	var globalOptions = {};

  // The `options({})` allows global configuration of all dialogs in the application.
  //
  //      var app = angular.module('App', ['ui.bootstrap.dialog'], function($dialogProvider){
  //        // don't close dialog when backdrop is clicked by default
  //        $dialogProvider.options({backdropClick: false});
  //      });
	this.options = function(value){
		globalOptions = value;
	};

  // Returns the actual `$dialog` service that is injected in controllers
	this.$get = ["$http", "$document", "$compile", "$rootScope", "$controller", "$templateCache", "$q", "$transition",
  function ($http, $document, $compile, $rootScope, $controller, $templateCache, $q, $transition) {

		var body = $document.find('body');

		function createElement(clazz) {
			var el = angular.element("<div>");
			el.addClass(clazz);
			return el;
		}

    // The `Dialog` class represents a modal dialog. The dialog class can be invoked by providing an options object
    // containing at lest template or templateUrl and controller:
    // 
    //     var d = new Dialog({templateUrl: 'foo.html', controller: 'BarController'});
    // 
    // Dialogs can also be created using templateUrl and controller as distinct arguments:
    //
    //     var d = new Dialog('path/to/dialog.html', MyDialogController);
		function Dialog(opts) {

      var self = this, options = this.options = angular.extend({}, defaults, globalOptions, opts);

      this.backdropEl = createElement(options.backdropClass);
      if(options.backdropFade){
        this.backdropEl.addClass(options.transitionClass);
        this.backdropEl.removeClass(options.triggerClass);
      }

      this.modalEl = createElement(options.modalClass);
      if(options.modalFade){
        this.modalEl.addClass(options.transitionClass);
        this.modalEl.removeClass(options.triggerClass);
      }

      this.handledEscapeKey = function(e) {
        if (e.which === 27) {
          self.close();
          e.preventDefault();
          self.$scope.$apply();
        }
      };

      this.handleBackDropClick = function(e) {
        self.close();
        e.preventDefault();
        self.$scope.$apply();
      };
    }

    // The `isOpen()` method returns wether the dialog is currently visible.
    Dialog.prototype.isOpen = function(){
      return this._open;
    };

    // The `open(templateUrl, controller)` method opens the dialog.
    // Use the `templateUrl` and `controller` arguments if specifying them at dialog creation time is not desired.
    Dialog.prototype.open = function(templateUrl, controller){
      var self = this, options = this.options;

      if(templateUrl){
        options.templateUrl = templateUrl;
      }
      if(controller){
        options.controller = controller;
      }
      
      if(!(options.template || options.templateUrl)) {
        throw new Error('Dialog.open expected template or templateUrl, neither found. Use options or open method to specify them.');
      }

      this._loadResolves().then(function(locals) {
        var $scope = locals.$scope = self.$scope = $rootScope.$new();

        self.modalEl.html(locals.$template);

        if (self.options.controller) {
          var ctrl = $controller(self.options.controller, locals);
          self.modalEl.contents().data('ngControllerController', ctrl);
        }

        $compile(self.modalEl.contents())($scope);
        self._addElementsToDom();

        // trigger tranisitions
        setTimeout(function(){
          if(self.options.modalFade){ self.modalEl.addClass(self.options.triggerClass); }
          if(self.options.backdropFade){ self.backdropEl.addClass(self.options.triggerClass); }
        });

        self._bindEvents();
      });

      this.deferred = $q.defer();
      return this.deferred.promise;
    };

    // closes the dialog and resolves the promise returned by the `open` method with the specified result.
    Dialog.prototype.close = function(result){
      var self = this;
      var fadingElements = this._getFadingElements();

      if(fadingElements.length > 0){
        for (var i = fadingElements.length - 1; i >= 0; i--) {
          $transition(fadingElements[i], removeTriggerClass).then(onCloseComplete);
        }
        return;
      }

      this._onCloseComplete(result);

      function removeTriggerClass(el){
        el.removeClass(self.options.triggerClass);
      }

      function onCloseComplete(){
        if(self._open){
          self._onCloseComplete(result);
        }
      }
    };

    Dialog.prototype._getFadingElements = function(){
      var elements = [];
      if(this.options.modalFade){
        elements.push(this.modalEl);
      }
      if(this.options.backdropFade){
        elements.push(this.backdropEl);
      }

      return elements;
    };

    Dialog.prototype._bindEvents = function() {
      if(this.options.keyboard){ body.bind('keydown', this.handledEscapeKey); }
      if(this.options.backdrop && this.options.backdropClick){ this.backdropEl.bind('click', this.handleBackDropClick); }
    };

    Dialog.prototype._unbindEvents = function() {
      if(this.options.keyboard){ body.unbind('keydown', this.handledEscapeKey); }
      if(this.options.backdrop && this.options.backdropClick){ this.backdropEl.unbind('click', this.handleBackDropClick); }
    };

    Dialog.prototype._onCloseComplete = function(result) {
      this._removeElementsFromDom();
      this._unbindEvents();

      this.deferred.resolve(result);
    };

    Dialog.prototype._addElementsToDom = function(){
      body.append(this.modalEl);
      if(this.options.backdrop) { body.append(this.backdropEl); }
      this._open = true;
    };

    Dialog.prototype._removeElementsFromDom = function(){
      this.modalEl.remove();
      if(this.options.backdrop) { this.backdropEl.remove(); }
      this._open = false;
    };

    // Loads all `options.resolve` members to be used as locals for the controller associated with the dialog.
    Dialog.prototype._loadResolves = function(){
      var values = [], keys = [], templatePromise, self = this;

      if (this.options.template) {
        templatePromise = $q.when(this.options.template);
      } else if (this.options.templateUrl) {
        templatePromise = $http.get(this.options.templateUrl, {cache:$templateCache})
        .then(function(response) { return response.data; });
      }

      angular.forEach(this.options.resolve || [], function(value, key) {
        keys.push(key);
        values.push(value);
      });

      keys.push('$template');
      values.push(templatePromise);

      return $q.all(values).then(function(values) {
        var locals = {};
        angular.forEach(values, function(value, index) {
          locals[keys[index]] = value;
        });
        locals.dialog = self;
        return locals;
      });
    };

    // The actual `$dialog` service that is injected in controllers.
    return {
      // Creates a new `Dialog` with the specified options.
      dialog: function(opts){
        return new Dialog(opts);
      },
      // creates a new `Dialog` tied to the default message box template and controller.
      //
      // Arguments `title` and `message` are rendered in the modal header and body sections respectively.
      // The `buttons` array holds an object with the following members for each button to include in the
      // modal footer section:
      //
      // * `result`: the result to pass to the `close` method of the dialog when the button is clicked
      // * `label`: the label of the button
      // * `cssClass`: additional css class(es) to apply to the button for styling
      messageBox: function(title, message, buttons){
        return new Dialog({templateUrl: 'template/dialog/message.html', controller: 'MessageBoxController', resolve: {model: {
          title: title,
          message: message,
          buttons: buttons
        }}});
      }
    };
  }];
});

/*
 * dropdownToggle - Provides dropdown menu functionality in place of bootstrap js
 * @restrict class or attribute
 * @example:
   <li class="dropdown">
     <a class="dropdown-toggle">My Dropdown Menu</a>
     <ul class="dropdown-menu">
       <li ng-repeat="choice in dropChoices">
         <a ng-href="{{choice.href}}">{{choice.text}}</a>
       </li>
     </ul>
   </li>
 */

angular.module('ui.bootstrap.dropdownToggle', []).directive('dropdownToggle', 
['$document', '$location', '$window', function ($document, $location, $window) {
  var openElement = null, close;
  return {
    restrict: 'CA',
    link: function(scope, element, attrs) {
      scope.$watch(function dropdownTogglePathWatch(){return $location.path();}, function dropdownTogglePathWatchAction() {
        if (close) { close(); }
      });

      element.parent().bind('click', function(event) {
        if (close) { close(); }
      });

      element.bind('click', function(event) {
        event.preventDefault();
        event.stopPropagation();

        var iWasOpen = false;

        if (openElement) {
          iWasOpen = openElement === element;
          close();
        }

        if (!iWasOpen){
          element.parent().addClass('open');
          openElement = element;

          close = function (event) {
            if (event) {
              event.preventDefault();
              event.stopPropagation();
            }
            $document.unbind('click', close);
            element.parent().removeClass('open');
            close = null;
            openElement = null;
          };

          $document.bind('click', close);
        }
      });
    }
  };
}]);

angular.module('ui.bootstrap.modal', []).directive('modal', ['$parse',function($parse) {
  var backdropEl;
  var body = angular.element(document.getElementsByTagName('body')[0]);
  var defaultOpts = {
    backdrop: true,
    escape: true
  };
  return {
    restrict: 'EA',
    link: function(scope, elm, attrs) {
      var opts = angular.extend(defaultOpts, scope.$eval(attrs.uiOptions || attrs.bsOptions || attrs.options));
      var shownExpr = attrs.modal || attrs.show;
      var setClosed;

      if (attrs.close) {
        setClosed = function() {
          scope.$apply(attrs.close);
        };
      } else {
        setClosed = function() {
          scope.$apply(function() {
            $parse(shownExpr).assign(scope, false);
          });
        };
      }
      elm.addClass('modal');

      if (opts.backdrop && !backdropEl) {
        backdropEl = angular.element('<div class="modal-backdrop"></div>');
        backdropEl.css('display','none');
        body.append(backdropEl);
      }
      
      function setShown(shown) {
        scope.$apply(function() {
          model.assign(scope, shown);
        });
      }

      function escapeClose(evt) {
        if (evt.which === 27) { setClosed(); }
      }
      function clickClose() { 
        setClosed();
      }
      
      function close() {
        if (opts.escape) { body.unbind('keyup', escapeClose); }
        if (opts.backdrop) {
          backdropEl.css('display', 'none').removeClass('in');
          backdropEl.unbind('click', clickClose);
        }
        elm.css('display', 'none').removeClass('in');
        body.removeClass('modal-open');
      }
      function open() {
        if (opts.escape) { body.bind('keyup', escapeClose); }
        if (opts.backdrop) {
          backdropEl.css('display', 'block').addClass('in');
          if(opts.backdrop != "static") {
            backdropEl.bind('click', clickClose);
          }
        }
        elm.css('display', 'block').addClass('in');
        body.addClass('modal-open');
      }

      scope.$watch(shownExpr, function(isShown, oldShown) {
        if (isShown) {
          open();
        } else {
          close();
        }
      });
    }
  };
}]);

angular.module('ui.bootstrap.pagination', [])

.directive('pagination', function() {
  return {
    restrict: 'EA',
    scope: {
      numPages: '=',
      currentPage: '=',
      maxSize: '=',
      onSelectPage: '&',
      nextText: '@',
      previousText: '@'
    },
    templateUrl: 'template/pagination/pagination.html',
    replace: true,
    link: function(scope) {
      scope.$watch('numPages + currentPage + maxSize', function() {
        scope.pages = [];
        
        //set the default maxSize to numPages
        var maxSize = ( scope.maxSize && scope.maxSize < scope.numPages ) ? scope.maxSize : scope.numPages;
        var startPage = scope.currentPage - Math.floor(maxSize/2);
        
        //adjust the startPage within boundary
        if(startPage < 1) {
            startPage = 1;
        }
        if ((startPage + maxSize - 1) > scope.numPages) {
            startPage = startPage - ((startPage + maxSize - 1) - scope.numPages );
        }

        for(var i=0; i < maxSize && i < scope.numPages ;i++) {
          scope.pages.push(startPage + i);
        }
        if ( scope.currentPage > scope.numPages ) {
          scope.selectPage(scope.numPages);
        }
      });
      scope.noPrevious = function() {
        return scope.currentPage === 1;
      };
      scope.noNext = function() {
        return scope.currentPage === scope.numPages;
      };
      scope.isActive = function(page) {
        return scope.currentPage === page;
      };

      scope.selectPage = function(page) {
        if ( ! scope.isActive(page) ) {
          scope.currentPage = page;
          scope.onSelectPage({ page: page });
        }
      };

      scope.selectPrevious = function() {
        if ( !scope.noPrevious() ) {
          scope.selectPage(scope.currentPage-1);
        }
      };
      scope.selectNext = function() {
        if ( !scope.noNext() ) {
          scope.selectPage(scope.currentPage+1);
        }
      };
    }
  };
});
/**
 * The following features are still outstanding: popup delay, animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, html popovers, and selector delegatation.
 */
angular.module( 'ui.bootstrap.popover', [] )
.directive( 'popoverPopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: { popoverTitle: '@', popoverContent: '@', placement: '@', animation: '&', isOpen: '&' },
    templateUrl: 'template/popover/popover.html'
  };
})
.directive( 'popover', [ '$compile', '$timeout', '$parse', function ( $compile, $timeout, $parse ) {
  
  var template = 
    '<popover-popup '+
      'popover-title="{{tt_title}}" '+
      'popover-content="{{tt_popover}}" '+
      'placement="{{tt_placement}}" '+
      'animation="tt_animation()" '+
      'is-open="tt_isOpen"'+
      '>'+
    '</popover-popup>';
  
  return {
    scope: true,
    link: function ( scope, element, attr ) {
      var popover = $compile( template )( scope ), 
          transitionTimeout;

      attr.$observe( 'popover', function ( val ) {
        scope.tt_popover = val;
      });

      attr.$observe( 'popoverTitle', function ( val ) {
        scope.tt_title = val;
      });

      attr.$observe( 'popoverPlacement', function ( val ) {
        // If no placement was provided, default to 'top'.
        scope.tt_placement = val || 'top';
      });

      attr.$observe( 'popoverAnimation', function ( val ) {
        scope.tt_animation = $parse( val );
      });

      // By default, the popover is not open.
      scope.tt_isOpen = false;
      
      // Calculate the current position and size of the directive element.
      function getPosition() {
        return {
          width: element.prop( 'offsetWidth' ),
          height: element.prop( 'offsetHeight' ),
          top: element.prop( 'offsetTop' ),
          left: element.prop( 'offsetLeft' )
        };
      }
      
      // Show the popover popup element.
      function show() {
        var position,
            ttWidth,
            ttHeight,
            ttPosition;
          
        // If there is a pending remove transition, we must cancel it, lest the
        // toolip be mysteriously removed.
        if ( transitionTimeout ) {
          $timeout.cancel( transitionTimeout );
        }
        
        // Set the initial positioning.
        popover.css({ top: 0, left: 0, display: 'block' });
        
        // Now we add it to the DOM because need some info about it. But it's not 
        // visible yet anyway.
        element.after( popover );
        
        // Get the position of the directive element.
        position = getPosition();
        
        // Get the height and width of the popover so we can center it.
        ttWidth = popover.prop( 'offsetWidth' );
        ttHeight = popover.prop( 'offsetHeight' );
        
        // Calculate the popover's top and left coordinates to center it with
        // this directive.
        switch ( scope.tt_placement ) {
          case 'right':
            ttPosition = {
              top: (position.top + position.height / 2 - ttHeight / 2) + 'px',
              left: (position.left + position.width) + 'px'
            };
            break;
          case 'bottom':
            ttPosition = {
              top: (position.top + position.height) + 'px',
              left: (position.left + position.width / 2 - ttWidth / 2) + 'px'
            };
            break;
          case 'left':
            ttPosition = {
              top: (position.top + position.height / 2 - ttHeight / 2) + 'px',
              left: (position.left - ttWidth) + 'px'
            };
            break;
          default:
            ttPosition = {
              top: (position.top - ttHeight) + 'px',
              left: (position.left + position.width / 2 - ttWidth / 2) + 'px'
            };
            break;
        }
        
        // Now set the calculated positioning.
        popover.css( ttPosition );
          
        // And show the popover.
        scope.tt_isOpen = true;
      }
      
      // Hide the popover popup element.
      function hide() {
        // First things first: we don't show it anymore.
        //popover.removeClass( 'in' );
        scope.tt_isOpen = false;
        
        // And now we remove it from the DOM. However, if we have animation, we 
        // need to wait for it to expire beforehand.
        // FIXME: this is a placeholder for a port of the transitions library.
        if ( angular.isDefined( scope.tt_animation ) && scope.tt_animation() ) {
          transitionTimeout = $timeout( function () { popover.remove(); }, 500 );
        } else {
          popover.remove();
        }
      }
      
      // Register the event listeners.
      element.bind( 'click', function() {
        if(scope.tt_isOpen){
            scope.$apply( hide );
        } else {
            scope.$apply( show );
        }

      });
    }
  };
}]);


angular.module('ui.bootstrap.tabs', [])
.controller('TabsController', ['$scope', '$element', function($scope, $element) {
  var panes = $scope.panes = [];

  this.select = $scope.select = function selectPane(pane) {
    angular.forEach(panes, function(pane) {
      pane.selected = false;
    });
    pane.selected = true;
  };

  this.addPane = function addPane(pane) {
    if (!panes.length) {
      $scope.select(pane);
    }
    panes.push(pane);
  };

  this.removePane = function removePane(pane) { 
    var index = panes.indexOf(pane);
    panes.splice(index, 1);
    //Select a new pane if removed pane was selected 
    if (pane.selected && panes.length > 0) {
      $scope.select(panes[index < panes.length ? index : index-1]);
    }
  };
}])
.directive('tabs', function() {
  return {
    restrict: 'EA',
    transclude: true,
    scope: {},
    controller: 'TabsController',
    templateUrl: 'template/tabs/tabs.html',
    replace: true
  };
})
.directive('pane', ['$parse', function($parse) {
  return {
    require: '^tabs',
    restrict: 'EA',
    transclude: true,
    scope:{
      heading:'@'
    },
    link: function(scope, element, attrs, tabsCtrl) {
      var getSelected, setSelected;
      scope.selected = false;
      if (attrs.active) {
        getSelected = $parse(attrs.active);
        setSelected = getSelected.assign;
        scope.$watch(
          function watchSelected() {return getSelected(scope.$parent);},
          function updateSelected(value) {scope.selected = value;}
        );
        scope.selected = getSelected ? getSelected(scope.$parent) : false;
      }
      scope.$watch('selected', function(selected) {
        if(selected) {
          tabsCtrl.select(scope);
        }
        if(setSelected) {
          setSelected(scope.$parent, selected);
        }
      });

      tabsCtrl.addPane(scope);
      scope.$on('$destroy', function() {
        tabsCtrl.removePane(scope);
      });
    },
    templateUrl: 'template/tabs/pane.html',
    replace: true
  };
}]);

/**
 * The following features are still outstanding: popup delay, animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, html tooltips, and selector delegatation.
 */
angular.module( 'ui.bootstrap.tooltip', [] )
.directive( 'tooltipPopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: { tooltipTitle: '@', placement: '@', animation: '&', isOpen: '&' },
    templateUrl: 'template/tooltip/tooltip-popup.html'
  };
})
.directive( 'tooltip', [ '$compile', '$timeout', '$parse', function ( $compile, $timeout, $parse ) {
  
  var template = 
    '<tooltip-popup '+
      'tooltip-title="{{tt_tooltip}}" '+
      'placement="{{tt_placement}}" '+
      'animation="tt_animation()" '+
      'is-open="tt_isOpen"'+
      '>'+
    '</tooltip-popup>';
  
  return {
    scope: true,
    link: function ( scope, element, attr ) {
      var tooltip = $compile( template )( scope ), 
          transitionTimeout;

      attr.$observe( 'tooltip', function ( val ) {
        scope.tt_tooltip = val;
      });

      attr.$observe( 'tooltipPlacement', function ( val ) {
        // If no placement was provided, default to 'top'.
        scope.tt_placement = val || 'top';
      });

      attr.$observe( 'tooltipAnimation', function ( val ) {
        scope.tt_animation = $parse( val );
      });

      // By default, the tooltip is not open.
      scope.tt_isOpen = false;
      
      // Calculate the current position and size of the directive element.
      function getPosition() {
        return {
          width: element.prop( 'offsetWidth' ),
          height: element.prop( 'offsetHeight' ),
          top: element.prop( 'offsetTop' ),
          left: element.prop( 'offsetLeft' )
        };
      }
      
      // Show the tooltip popup element.
      function show() {
        var position,
            ttWidth,
            ttHeight,
            ttPosition;
          
        // If there is a pending remove transition, we must cancel it, lest the
        // toolip be mysteriously removed.
        if ( transitionTimeout ) {
          $timeout.cancel( transitionTimeout );
        }
        
        // Set the initial positioning.
        tooltip.css({ top: 0, left: 0, display: 'block' });
        
        // Now we add it to the DOM because need some info about it. But it's not 
        // visible yet anyway.
        element.after( tooltip );
        
        // Get the position of the directive element.
        position = getPosition();
        
        // Get the height and width of the tooltip so we can center it.
        ttWidth = tooltip.prop( 'offsetWidth' );
        ttHeight = tooltip.prop( 'offsetHeight' );
        
        // Calculate the tooltip's top and left coordinates to center it with
        // this directive.
        switch ( scope.tt_placement ) {
          case 'right':
            ttPosition = {
              top: (position.top + position.height / 2 - ttHeight / 2) + 'px',
              left: (position.left + position.width) + 'px'
            };
            break;
          case 'bottom':
            ttPosition = {
              top: (position.top + position.height) + 'px',
              left: (position.left + position.width / 2 - ttWidth / 2) + 'px'
            };
            break;
          case 'left':
            ttPosition = {
              top: (position.top + position.height / 2 - ttHeight / 2) + 'px',
              left: (position.left - ttWidth) + 'px'
            };
            break;
          default:
            ttPosition = {
              top: (position.top - ttHeight) + 'px',
              left: (position.left + position.width / 2 - ttWidth / 2) + 'px'
            };
            break;
        }
        
        // Now set the calculated positioning.
        tooltip.css( ttPosition );
          
        // And show the tooltip.
        scope.tt_isOpen = true;
      }
      
      // Hide the tooltip popup element.
      function hide() {
        // First things first: we don't show it anymore.
        //tooltip.removeClass( 'in' );
        scope.tt_isOpen = false;
        
        // And now we remove it from the DOM. However, if we have animation, we 
        // need to wait for it to expire beforehand.
        // FIXME: this is a placeholder for a port of the transitions library.
        if ( angular.isDefined( scope.tt_animation ) && scope.tt_animation() ) {
          transitionTimeout = $timeout( function () { tooltip.remove(); }, 500 );
        } else {
          tooltip.remove();
        }
      }
      
      // Register the event listeners.
      element.bind( 'mouseenter', function() {
        scope.$apply( show );
      });
      element.bind( 'mouseleave', function() {
        scope.$apply( hide );
      });
    }
  };
}]);


angular.module('ui.bootstrap.transition', [])

/**
 * $transition service provides a consistent interface to trigger CSS 3 transitions and to be informed when they complete.
 * @param  {DOMElement} element  The DOMElement that will be animated.
 * @param  {string|object|function} trigger  The thing that will cause the transition to start:
 *   - As a string, it represents the css class to be added to the element.
 *   - As an object, it represents a hash of style attributes to be applied to the element.
 *   - As a function, it represents a function to be called that will cause the transition to occur.
 * @return {Promise}  A promise that is resolved when the transition finishes.
 */
.factory('$transition', ['$q', '$timeout', '$rootScope', function($q, $timeout, $rootScope) {

  var $transition = function(element, trigger, options) {
    options = options || {};
    var deferred = $q.defer();
    var endEventName = $transition[options.animation ? "animationEndEventName" : "transitionEndEventName"];

    var transitionEndHandler = function(event) {
      $rootScope.$apply(function() {
        element.unbind(endEventName, transitionEndHandler);
        deferred.resolve(element);
      });
    };

    if (endEventName) {
      element.bind(endEventName, transitionEndHandler);
    }

    // Wrap in a timeout to allow the browser time to update the DOM before the transition is to occur
    $timeout(function() {
      if ( angular.isString(trigger) ) {
        element.addClass(trigger);
      } else if ( angular.isFunction(trigger) ) {
        trigger(element);
      } else if ( angular.isObject(trigger) ) {
        element.css(trigger);
      }
      //If browser does not support transitions, instantly resolve
      if ( !endEventName ) {
        deferred.resolve(element);
      }
    });

    // Add our custom cancel function to the promise that is returned
    // We can call this if we are about to run a new transition, which we know will prevent this transition from ending,
    // i.e. it will therefore never raise a transitionEnd event for that transition
    deferred.promise.cancel = function() {
      if ( endEventName ) {
        element.unbind(endEventName, transitionEndHandler);
      }
      deferred.reject('Transition cancelled');
    };

    return deferred.promise;
  };

  // Work out the name of the transitionEnd event
  var transElement = document.createElement('trans');
  var transitionEndEventNames = {
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'transitionend',
    'OTransition': 'oTransitionEnd',
    'msTransition': 'MSTransitionEnd',
    'transition': 'transitionend'
  };
  var animationEndEventNames = {
    'WebkitTransition': 'webkitAnimationEnd',
    'MozTransition': 'animationend',
    'OTransition': 'oAnimationEnd',
    'msTransition': 'MSAnimationEnd',
    'transition': 'animationend'
  };
  function findEndEventName(endEventNames) {
    for (var name in endEventNames){
      if (transElement.style[name] !== undefined) {
        return endEventNames[name];
      }
    }
  }
  $transition.transitionEndEventName = findEndEventName(transitionEndEventNames);
  $transition.animationEndEventName = findEndEventName(animationEndEventNames);
  return $transition;
}]);

angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function($templateCache){
  $templateCache.put("template/accordion/accordion-group.html",
    "<div class=\"accordion-group\">" +
    "  <div class=\"accordion-heading\" ><a class=\"accordion-toggle\" ng-click=\"isOpen = !isOpen\">{{heading}}</a></div>" +
    "  <div class=\"accordion-body\" collapse=\"!isOpen\">" +
    "    <div class=\"accordion-inner\" ng-transclude></div>  </div>" +
    "</div>");
}]);

angular.module("template/accordion/accordion.html", []).run(["$templateCache", function($templateCache){
  $templateCache.put("template/accordion/accordion.html",
    "<div class=\"accordion\" ng-transclude></div>");
}]);

angular.module("template/alert/alert.html", []).run(["$templateCache", function($templateCache){
  $templateCache.put("template/alert/alert.html",
    "<div class='alert' ng-class='type && \"alert-\" + type'>" +
    "    <button type='button' class='close' ng-click='close()'>&times;</button>" +
    "    <div ng-transclude></div>" +
    "</div>");
}]);

angular.module("template/carousel/carousel.html", []).run(["$templateCache", function($templateCache){
  $templateCache.put("template/carousel/carousel.html",
    "<div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel\">" +
    "    <div class=\"carousel-inner\" ng-transclude></div>" +
    "    <a ng-click=\"prev()\" class=\"carousel-control left\">&lsaquo;</a>" +
    "    <a ng-click=\"next()\" class=\"carousel-control right\">&rsaquo;</a>" +
    "</div>" +
    "");
}]);

angular.module("template/carousel/slide.html", []).run(["$templateCache", function($templateCache){
  $templateCache.put("template/carousel/slide.html",
    "<div ng-class=\"{" +
    "    'active': leaving || (active && !entering)," +
    "    'prev': (next || active) && direction=='prev'," +
    "    'next': (next || active) && direction=='next'," +
    "    'right': direction=='prev'," +
    "    'left': direction=='next'" +
    "  }\" class=\"item\" ng-transclude></div>" +
    "");
}]);

angular.module("template/dialog/message.html", []).run(["$templateCache", function($templateCache){
  $templateCache.put("template/dialog/message.html",
    "<div class=\"modal-header\">" +
    "	<h1>{{ title }}</h1>" +
    "</div>" +
    "<div class=\"modal-body\">" +
    "	<p>{{ message }}</p>" +
    "</div>" +
    "<div class=\"modal-footer\">" +
    "	<button ng-repeat=\"btn in buttons\" ng-click=\"close(btn.result)\" class=btn ng-class=\"btn.cssClass\">{{ btn.label }}</button>" +
    "</div>" +
    "");
}]);

angular.module("template/pagination/pagination.html", []).run(["$templateCache", function($templateCache){
  $templateCache.put("template/pagination/pagination.html",
    "<div class=\"pagination\"><ul>" +
    "  <li ng-class=\"{disabled: noPrevious()}\"><a ng-click=\"selectPrevious()\">{{previousText || 'Previous'}}</a></li>" +
    "  <li ng-repeat=\"page in pages\" ng-class=\"{active: isActive(page)}\"><a ng-click=\"selectPage(page)\">{{page}}</a></li>" +
    "  <li ng-class=\"{disabled: noNext()}\"><a ng-click=\"selectNext()\">{{nextText || 'Next'}}</a></li>" +
    "  </ul>" +
    "</div>" +
    "");
}]);

angular.module("template/popover/popover.html", []).run(["$templateCache", function($templateCache){
  $templateCache.put("template/popover/popover.html",
    "<div class=\"popover {{placement}}\" ng-class=\"{ in: isOpen(), fade: animation() }\">" +
    "  <div class=\"arrow\"></div>" +
    "" +
    "  <div class=\"popover-inner\">" +
    "      <h3 class=\"popover-title\" ng-bind=\"popoverTitle\" ng-show=\"popoverTitle\"></h3>" +
    "      <div class=\"popover-content\" ng-bind=\"popoverContent\"></div>" +
    "  </div>" +
    "</div>" +
    "");
}]);

angular.module("template/tabs/pane.html", []).run(["$templateCache", function($templateCache){
  $templateCache.put("template/tabs/pane.html",
    "<div class=\"tab-pane\" ng-class=\"{active: selected}\" ng-show=\"selected\" ng-transclude></div>" +
    "");
}]);

angular.module("template/tabs/tabs.html", []).run(["$templateCache", function($templateCache){
  $templateCache.put("template/tabs/tabs.html",
    "<div class=\"tabbable\">" +
    "  <ul class=\"nav nav-tabs\">" +
    "    <li ng-repeat=\"pane in panes\" ng-class=\"{active:pane.selected}\">" +
    "      <a href=\"\" ng-click=\"select(pane)\">{{pane.heading}}</a>" +
    "    </li>" +
    "  </ul>" +
    "  <div class=\"tab-content\" ng-transclude></div>" +
    "</div>" +
    "");
}]);

angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function($templateCache){
  $templateCache.put("template/tooltip/tooltip-popup.html",
    "<div class=\"tooltip {{placement}}\" ng-class=\"{ in: isOpen(), fade: animation() }\">" +
    "  <div class=\"tooltip-arrow\"></div>" +
    "  <div class=\"tooltip-inner\" ng-bind=\"tooltipTitle\"></div>" +
    "</div>" +
    "");
}]);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"row-fluid\">" +
    "  <h1 class=\"page-header\">" +
    "    The Elevator Pitch" +
    "    <small>For the lazy and impatient.</small>" +
    "  </h1>" +
    "  <p>" +
    "    <code>ng-boilerplate</code> is an opinionated kickstarter for web" +
    "    development projects. It's an attempt to create a simple starter for new" +
    "    web sites and apps: just download it and start coding. The goal is to" +
    "    have everything you need to get started out of the box; of course it has" +
    "    slick styles and icons, but it also has a best practice directory structure" +
    "    to ensure maximum code reuse. And it's all tied together with a robust" +
    "    build system chock-full of some time-saving goodness." +
    "  </p>" +
    "" +
    "  <h2>Why?</h2>" +
    "" +
    "  <p>" +
    "    Because my team and I make web apps, and " +
    "    last year AngularJS became our client-side framework of choice. We start" +
    "    websites the same way every time: create a directory structure, copy and" +
    "    ever-so-slightly tweak some config files from an older project, and yada" +
    "    yada, etc., and so on and so forth. Why are we repeating ourselves? We wanted a starting point; a set of" +
    "    best practices that we could identify our projects as embodying and a set of" +
    "    time-saving wonderfulness, because time is money." +
    "  </p>" +
    "" +
    "  <p>" +
    "    There are other similar projects out there, but none of them suited our" +
    "    needs. Some are awesome but were just too much, existing more as reference" +
    "    implementations, when we really just wanted a kickstarter. Others were just" +
    "    too little, with puny build systems and unscalable architectures.  So we" +
    "    designed <code>ng-boilerplate</code> to be just right." +
    "  </p>" +
    "" +
    "  <h2>What ng-boilerplate Is Not</h2>" +
    "" +
    "  <p>" +
    "    This is not an example of an AngularJS app. This is a kickstarter. If" +
    "    you're looking for an example of what a complete, non-trivial AngularJS app" +
    "    that does something real looks like, complete with a REST backend and" +
    "    authentication and authorization, then take a look at <code><a" +
    "        href=\"https://github.com/angular-app/angular-app/\">angular-app</a></code>, " +
    "    which does just that, and does it well." +
    "  </p>" +
    "" +
    "  <h1 class=\"page-header\">" +
    "    So What's Included?" +
    "    <small>I'll try to be more specific than \"awesomeness\".</small>" +
    "  </h1>" +
    "  <p>" +
    "    This section is just a quick introduction to all the junk that comes" +
    "    pre-packaged with <code>ng-boilerplate</code>. For information on how to" +
    "    use it, see the <a" +
    "      href=\"https://github.com/joshdmiller/ng-boilerplate#readme\">project page</a> at" +
    "    GitHub." +
    "  </p>" +
    "" +
    "  <p>" +
    "    The high-altitude view is that the base project includes " +
    "    <a href=\"http://getbootstrap.com\">Twitter Bootstrap</a>" +
    "    styles to quickly produce slick-looking responsive web sites and apps. It also" +
    "    includes <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>," +
    "    a collection of native AngularJS directives based on the aforementioned" +
    "    templates and styles. It also includes <a href=\"http://fortawesome.github.com/Font-Awesome/\">Font Awesome</a>," +
    "    a wicked-cool collection of font-based icons that work swimmingly with all" +
    "    manner of web projects; in fact, all images on the site are actually font-" +
    "    based icons from Font Awesome. Neat! Lastly, this also includes" +
    "    <a href=\"http://joshdmiller.github.com/angular-placeholders\">Angular Placeholders</a>," +
    "    a set of pure AngularJS directives to do client-side placeholder images and" +
    "    text to make mocking user interfaces super easy." +
    "  </p>" +
    "" +
    "  <p>" +
    "    And everything just works (assuming there were no breaking changes in the" +
    "    latest release of Bootstrap). Boom. Like that." +
    "  </p>" +
    "" +
    "  <p>" +
    "    And, of course, <code>ng-boilerplate</code> is built on <a href=\"http://angularjs.org\">AngularJS</a>," +
    "    by the far the best JavaScript framework out there! But if you don't know" +
    "    that already, then how did you get here? Well, no matter - just drink the" +
    "    Kool Aid. Do it. You know you want to." +
    "  </p>" +
    "  " +
    "  <h2>Twitter Bootstrap</h2>" +
    "" +
    "  <p>" +
    "    You already know about this, right? If not, <a" +
    "      href=\"http://getbootstrap.com\">hop on over</a> and check it out; it's" +
    "    pretty sweet. Anyway, all that wonderful stylistic goodness comes built in." +
    "    The LESS files are available for you to import in your main stylesheet as" +
    "    needed - no excess, no waste. There is also a dedicated place to override" +
    "    variables and mixins to suit your specific needs, so updating to the latest" +
    "    version of Bootstrap is as simple as: " +
    "  </p>" +
    "" +
    "  <pre>$ cd vendor/twitter-bootstrap<br />$ git pull origin master</pre>" +
    "" +
    "  <p>" +
    "    Boom! And victory is ours." +
    "  </p>" +
    "" +
    "  <h2>UI Bootstrap</h2>" +
    "" +
    "  <p>" +
    "    What's better than Bootstrap styles? Bootstrap directives!  The fantastic <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>" +
    "    library contains a set of native AngularJS directives that are endlessly" +
    "    extensible. You get the tabs, the tooltips, the accordions. You get your" +
    "    carousel, your modals, your pagination. And <i>more</i>." +
    "    How about a quick demo? " +
    "  </p>" +
    "" +
    "  <ul>" +
    "    <li class=\"dropdown\">" +
    "      <a class=\"btn dropdown-toggle\">" +
    "        Click me!" +
    "      </a>" +
    "      <ul class=\"dropdown-menu\">" +
    "        <li ng-repeat=\"choice in dropdownDemoItems\">" +
    "          <a>{{choice}}</a>" +
    "        </li>" +
    "      </ul>" +
    "    </li>" +
    "  </ul>" +
    "" +
    "  <p>" +
    "    Oh, and don't include jQuery;  " +
    "    you don't need it." +
    "    This is better." +
    "    Don't be one of those people. <sup>*</sup>" +
    "  </p>" +
    "" +
    "  <p><small><sup>*</sup> Yes, there are exceptions.</small></p>" +
    "" +
    "  <h2>Font Awesome</h2>" +
    "" +
    "  <p>" +
    "    Font Awesome has earned its label. It's a set of open (!) icons that come" +
    "    distributed as a font (!) for super-easy, lightweight use. Font Awesome " +
    "    works really well with Twitter Bootstrap, and so fits right in here." +
    "  </p>" +
    "" +
    "  <p>" +
    "    There is not a single image on this site. All of the little images and icons " +
    "    are drawn through Font Awesome! All it takes is a little class:" +
    "  </p>" +
    "" +
    "  <pre>&lt;i class=\"icon-flag\"&gt;&lt/i&gt</pre>" +
    "" +
    "  <p>" +
    "    And you get one of these: <i class=\"icon-flag\"> </i>. Neat!" +
    "  </p>" +
    "" +
    "  <h2>Placeholders</h2>" +
    "" +
    "  <p>" +
    "    Angular Placeholders is a simple library for mocking up text and images. You" +
    "    can automatically throw around some \"lorem ipsum\" text:" +
    "  </p>" +
    "" +
    "  <pre>&lt;p ph-txt=\"3s\"&gt;&lt;/p&gt;</pre>" +
    "" +
    "  <p>" +
    "    Which gives you this:" +
    "  </p>" +
    "" +
    "  <div class=\"pre\">" +
    "    &lt;p&gt;" +
    "    <p ph-txt=\"3s\"></p>" +
    "    &lt;/p&gt;" +
    "  </div>" +
    "" +
    "  <p>" +
    "    Even more exciting, you can also create placeholder images, entirely " +
    "    client-side! For example, this:" +
    "  </p>" +
    "  " +
    "  <pre>" +
    "&lt;img ph-img=\"50x50\" /&gt;<br />" +
    "&lt;img ph-img=\"50x50\" class=\"img-polaroid\" /&gt;<br />" +
    "&lt;img ph-img=\"50x50\" class=\"img-rounded\" /&gt;<br />" +
    "&lt;img ph-img=\"50x50\" class=\"img-circle\" /&gt;" +
    "  </pre>" +
    "" +
    "  <p>" +
    "    Gives you this:" +
    "  </p>" +
    "" +
    "  <div>" +
    "    <img ph-img=\"50x50\" />" +
    "    <img ph-img=\"50x50\" class=\"img-polaroid\" />" +
    "    <img ph-img=\"50x50\" class=\"img-rounded\" />" +
    "    <img ph-img=\"50x50\" class=\"img-circle\" />" +
    "  </div>" +
    "" +
    "  <p>" +
    "    Which is awesome." +
    "  </p>" +
    "" +
    "  <h1 class=\"page-header\">" +
    "    The Roadmap" +
    "    <small>Really? What more could you want?</small>" +
    "  </h1>" +
    "" +
    "  <p>" +
    "    This is a project that is <i>not</i> broad in scope, so there's not really" +
    "    much of a wish list here. But I would like to see a couple of things:" +
    "  </p>" +
    "" +
    "  <p>" +
    "    I'd like it to be a little simpler. I want this to be a universal starting" +
    "    point. If someone is starting a new AngularJS project, she should be able to" +
    "    clone, merge, or download its source and immediately start doing what she" +
    "    needs without renaming a bunch of files and methods or deleting spare parts" +
    "    ... like this page. This works for a first release, but I just think there" +
    "    is a little too much here right now." +
    "  </p>" +
    "" +
    "  <p>" +
    "    I'd also like to see a simple generator. Nothing like <a href=\"yeoman.io\">" +
    "    Yeoman</a>, as there already is one of those, but just something that" +
    "    says \"I want Bootstrap but not Font Awesome and my app is called 'coolApp'." +
    "    Gimme.\" Perhaps a custom download builder like UI Bootstrap" +
    "    has. Like that. Then again, perhaps some Yeoman generators wouldn't be out" +
    "    of line. I don't know. What do you think?" +
    "  </p>" +
    "" +
    "  <p>" +
    "    Naturally, I am open to all manner of ideas and suggestions. See the \"Can I" +
    "    Help?\" section below." +
    "  </p>" +
    "" +
    "  <h2>The Tactical To Do List</h2>" +
    "" +
    "  <p>" +
    "    There isn't much of a demonstration of UI Bootstrap. I don't want to pollute" +
    "    the code with a demo for demo's sake, but I feel we should showcase it in" +
    "    <i>some</i> way." +
    "  </p>" +
    "" +
    "  <p>" +
    "    <code>ng-boilerplate</code> should include end-to-end tests. This should" +
    "    happen soon. I just haven't had the time." +
    "  </p>" +
    "" +
    "  <p>" +
    "    Lastly, this site should be prettier, but I'm no web designer. Throw me a" +
    "    bone here, people!" +
    "  </p>" +
    "" +
    "  <h2>Can I Help?</h2>" +
    "" +
    "  <p>" +
    "    Yes, please!" +
    "  </p>" +
    "" +
    "  <p>" +
    "    This is an opinionated kickstarter, but the opinions are fluid and" +
    "    evidence-based. Don't like the way I did something? Think you know of a" +
    "    better way? Have an idea to make this more useful? Let me know! You can" +
    "    contact me through all the usual channels or you can open an issue on the" +
    "    GitHub page. If you're feeling ambitious, you can even submit a pull" +
    "    request - how thoughtful of you!" +
    "  </p>" +
    "" +
    "  <p>" +
    "    So join the team! We're good people." +
    "  </p>" +
    "</div>" +
    "" +
    "");
}]);

angular.module('app-templates', ['about/about.tpl.html', 'home/home.tpl.html']);

angular.module('component-templates', []);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"jumbotron\">" +
    "  <h1>Non-Trivial AngularJS Made Easy</h1>" +
    "" +
    "  <p class=\"lead\">" +
    "    Everything you need to kickstart AngularJS projects: a best-practice" +
    "    directory structure, an intelligent build system, and the best web design" +
    "    libraries around." +
    "  </p>" +
    "" +
    "  <ul class=\"inline social-buttons\">" +
    "    <li>" +
    "      <iframe " +
    "        src=\"http://ghbtns.com/github-btn.html?user=joshdmiller&amp;repo=ng-boilerplate&amp;type=watch&amp;count=true\" " +
    "        allowtransparency=\"true\" " +
    "        frameborder=\"0\" " +
    "        scrolling=\"0\" " +
    "        width=\"110\" " +
    "        height=\"20\">" +
    "      </iframe>" +
    "    </li>" +
    "    <li>" +
    "      <iframe " +
    "        src=\"http://ghbtns.com/github-btn.html?user=joshdmiller&amp;repo=ng-boilerplate&amp;type=fork&amp;count=true\" " +
    "        allowtransparency=\"true\" " +
    "        frameborder=\"0\" " +
    "        scrolling=\"0\" " +
    "        width=\"95\" " +
    "        height=\"20\">" +
    "      </iframe>" +
    "    </li>" +
    "    <li>" +
    "       <iframe allowtransparency=\"true\" frameborder=\"0\" scrolling=\"no\"" +
    "        src=\"https://platform.twitter.com/widgets/tweet_button.html?url=http%3A%2F%2Fbit.ly%2Fng-boilerplate&counturl=http%3A%2F%2Fjoshdmiller.github.com%2Fng-boilerplate&text=Check%20out%20ng-boilerplate%20-%20an%20awesome%20kickstarter%20for%20web%20projects%20%7C&hashtags=angularjs&via=joshdmiller&related=joshdmiller\"" +
    "        style=\"width:130px; height:20px;\"></iframe>" +
    "    </li>" +
    "    <li>" +
    "      <script type=\"text/javascript\" src=\"https://apis.google.com/js/plusone.js\"></script>" +
    "      <div class=\"g-plusone\" data-size=\"medium\" data-annotation=\"inline\" data-width=\"300\" data-href=\"http://bit.ly/ng-boilerplate\"></div>" +
    "    </li>" +
    "  </ul> " +
    "  " +
    "  <div class=\"btn-group\">" +
    "    <a href=\"https://github.com/joshdmiller/ng-boilerplate#readme\" class=\"btn btn-large\">" +
    "      <i class=\"icon-book\"></i>" +
    "      Read the Docs" +
    "    </a>" +
    "    <a href=\"https://github.com/joshdmiller/ng-boilerplate\" class=\"btn btn-large btn-success\">" +
    "      <i class=\"icon-download\"></i>" +
    "      Download" +
    "    </a>" +
    "  </div>" +
    "" +
    "</div>" +
    "" +
    "<div class=\"marketing\">" +
    "  <div class=\"row\">" +
    "    <div class=\"span4\">" +
    "      <h4><i class=\"icon-thumbs-up\"></i> Good to Go!</h4>" +
    "      <p>" +
    "        Kickstarts your project quickly, with everything you need, so you can " +
    "        focus on what matters: your app." +
    "      </p>" +
    "    </div>" +
    "    <div class=\"span4\">" +
    "      <h4><i class=\"icon-magic\"></i> Complete Build System</h4>" +
    "      <p>" +
    "        A smart, <a href=\"http://gruntjs.org\">Grunt</a>-based build system " +
    "        designed to save you time and energy." +
    "      </p>" +
    "    </div>" +
    "    <div class=\"span4\">" +
    "      <h4><i class=\"icon-retweet\"></i> Modularization</h4>" +
    "      <p>" +
    "        Supports a structure that maintains separation of concerns while" +
    "        ensuring maximum code reuse." +
    "      </p>" +
    "    </div>" +
    "  </div>" +
    "  <div class=\"row\">" +
    "    <div class=\"span4\">" +
    "      <h4><i class=\"icon-star\"></i> AngularJS</h4>" +
    "      <p>" +
    "        JavaScript framework that augments browser-based, single-page " +
    "        applications with MVC functionality." +
    "        <a href=\"http://angularjs.org\">More &raquo;</a>" +
    "      </p>" +
    "    </div>" +
    "    <div class=\"span4\">" +
    "      <h4><i class=\"icon-resize-small\"></i> LESS CSS</h4>" +
    "      <p>" +
    "        The dynamic stylesheet language that extends CSS with efficiency." +
    "        <a href=\"http://lesscss.org\">More &raquo;</a>" +
    "      </p>" +
    "    </div>" +
    "    <div class=\"span4\">" +
    "      <h4><i class=\"icon-twitter\"></i> Twitter Bootstrap</h4>" +
    "      <p>" +
    "        Sleek, intuitive, and powerful front-end framework for faster and easier" +
    "        web development." +
    "        <a href=\"http://getbootstrap.com\">More &raquo;</a>" +
    "      </p>" +
    "    </div>" +
    "  </div>" +
    "  <div class=\"row\">" +
    "    <div class=\"span4\">" +
    "      <h4><i class=\"icon-circle\"></i> Angular UI Bootstrap</h4>" +
    "      <p>" +
    "        Pure AngularJS components for Bootstrap written by the " +
    "        <a href=\"https://github.com/angular-ui?tab=members\">AngularUI Team</a>." +
    "        <a href=\"http://angular-ui.github.com/bootstrap\">More &raquo;</a>" +
    "      </p>" +
    "    </div>" +
    "    <div class=\"span4\">" +
    "      <h4><i class=\"icon-flag\"></i> Font Awesome</h4>" +
    "      <p>" +
    "        The iconic font designed for use with Twitter Bootstrap." +
    "        <a href=\"http://fortawesome.github.com/Font-Awesome\">" +
    "          More &raquo;" +
    "        </a>" +
    "      </p>" +
    "    </div>" +
    "    <div class=\"span4\">" +
    "      <h4><i class=\"icon-asterisk\"></i> Placeholders</h4>" +
    "      <p>" +
    "        Client-side image and text placeholder directives written in pure " +
    "        AngularJS to make designing mock-ups wicked-fast." +
    "        <a href=\"http://joshdmiller.github.com/angular-placeholders\">" +
    "          More &raquo;" +
    "        </a>" +
    "      </p>" +
    "    </div>" +
    "  </div>" +
    "</div>" +
    "" +
    "");
}]);

})( window, window.angular );

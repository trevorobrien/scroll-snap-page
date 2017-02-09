$(function(){
  var WIN = $(window);
  var DOC = $(document);
  var initialized = false;



  // Smooth Touch Scrolljacking
  // var  containerTop =     0, // keeps track of amount scrolled without actually scrolling
  // moved =                 0, // amount your finger moved during touchmove
  // touchStartY =           0,
  // isTouchDevice =         false, // set to true on touchstart
  // touchInterval;

  // // Initialize
  // pageResize();
  // scrollHandler();
  // // Page events
  // WIN.on('resize',pageResize);
  // WIN.on('scroll',scrollHandler);
  // // Touch events
  // WIN.on('touchstart',function(e){
  //   isTouchDevice = true;
  //   touchInterval = setInterval(redraw, 10);
  //   moved = 0;
  //   var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
  //   touchStartY = touch.pageY;
  // })
  // WIN.on('touchmove',function(e){
  //   e.preventDefault();
  //   var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
  //   moved = touch.pageY-touchStartY;
  //   containerTop -= moved;
  //   touchStartY = touch.pageY;
  // })
  // WIN.on('touchend',function(e){
  //   moved*=.95;
  //   containerTop -= moved;
  //   if(Math.abs(moved) < .2){
  //     clearInterval(touchInterval);
  //   }
  // })
  // function pageResize (e) {
  //   WIN_H = WIN.height();
  //   WIN_W = WIN.width();
    
  //   initialized = true;
  // }
  // function scrollHandler(){
  //   if(isTouchDevice){
  //     scrollTop = Math.max(0,containerTop);
  //   }else{
  //     scrollTop = WIN.scrollTop();
  //   }
  // }



  // // Touch Scroll
  // function redraw() {
  //   if(isTouchDevice){
  //     window.requestAnimationFrame(function() {
  //       scrollHandler();
  //     });
  //   }
  // }

  $(window).scroll(function() {
    if ($(document).scrollTop() > 40) {
      $('.sub-menu').addClass('nav-up');
      // alert('hello1')
    } else {
      $('.sub-menu').removeClass('nav-up');
    }
  });

  // $('.hamburger').on('click',function (e) {
  //   $('.overlay').addClass('in');
  // })

  // $('.close').on('click',function (e) {
  //   $('.overlay').removeClass('in');
  // })


  $(window).scroll(function() {
    $('.sale-name').css('top', ($('.carousel-image').height() - $('body').scrollTop() / 4));
  }); 
})

  var nav = document.querySelector('.hamburger');
  var close = document.querySelector('.close');


  var toggleState = function (elem, one, two) {
    var elem = document.querySelector(elem);
    // elem.className += "";
    elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
  };

  nav.onclick = function (e) {
    toggleState('.overlay', 'closed', 'open');
    e.preventDefault();
  };

  close.onclick = function (e) {
    toggleState('.overlay', 'closed', 'open');
    e.preventDefault();
  };

  var prefix = getBrowserPrefix();
  var hidden = hiddenProperty(prefix);
  var visibilityState = visibilityState(prefix);
  var visibilityEvent = visibilityEvent(prefix);

  document.addEventListener(visibilityEvent, function(event) {
          if (document[hidden]) {
              $('.overlay').addClass('in');
              console.log('in')
              
          } else {
              console.log('out')
          }
    });

  // Get Browser-Specifc Prefix
  function getBrowserPrefix() {
     
    // Check for the unprefixed property.
    if ('hidden' in document) {
      return null;
    }
   
    // All the possible prefixes.
    var browserPrefixes = ['moz', 'ms', 'o', 'webkit'];
   
    for (var i = 0; i < browserPrefixes.length; i++) {
      var prefix = browserPrefixes[i] + 'Hidden';
      if (prefix in document) {
        return browserPrefixes[i];
      }
    }
   
    // The API is not supported in browser.
    return null;
  }
   
  // Get Browser Specific Hidden Property
  function hiddenProperty(prefix) {
    if (prefix) {
      return prefix + 'Hidden';
    } else {
      return 'hidden';
    }
  }
   
  // Get Browser Specific Visibility State
  function visibilityState(prefix) {
    if (prefix) {
      return prefix + 'VisibilityState';
    } else {
      return 'visibilityState';
    }
  }
   
  // Get Browser Specific Event
  function visibilityEvent(prefix) {
    if (prefix) {
      return prefix + 'visibilitychange';
    } else {
      return 'visibilitychange';
    }
  }
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
      $('.sub-menu').addClass('sub-menu-up');
      // alert('hello1')
    } else {
      $('.sub-menu').removeClass('sub-menu-up');
    }
  });
  $(window).scroll(function() {
    if ($(document).scrollTop() > 45) {
      $('.nav').addClass('nav-fade');
      // alert('hello1')
    } else {
      $('.nav').removeClass('nav-fade');
    }
  });

  setTimeout(function() {
      showCurrent();
  }, 3000);


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

  var counter = 0, // to keep track of current slide
      $items = $('.diy-slideshow figure'), // a collection of all of the slides, caching for performance
      numItems = $items.length; // total number of slides
  console.log($items)

  // this function is what cycles the slides, showing the next or previous slide and hiding all the others
  var showCurrent = function(){
    var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show  
    console.log(itemToShow)
    $items.removeClass('show'); // remove .show from whichever element currently has it
    $items.eq(itemToShow).addClass('show'); 
    counter++;
    { setTimeout(function() { showCurrent() }, 6000); }   
  };

  // add click events to prev & next buttons 
  $('.next').on('click', function(){
      counter++;
      showCurrent(); 
  });
  $('.prev').on('click', function(){
      counter--;
      showCurrent(); 
  });

 
  // if touch events are supported then add swipe interactions using TouchSwipe https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
  if('ontouchstart' in window){
    console.log('true')
    $('.diy-slideshow').swipe({
      swipeLeft:function() {
        counter++;
        showCurrent(); 
      },
      swipeRight:function() {
        counter--;
        showCurrent(); 
      }
    });
  }


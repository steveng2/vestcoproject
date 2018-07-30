/*
===============================================================
                            SERVICES
===============================================================
*/

$(function() {
  // animation on scroll
  new WOW().init();
});

/*
===============================================================
                            Work
===============================================================
*/
$(function() {
  $("#work").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }
  });

});

/*SS
===============================================================
                            TEAM
===============================================================
*/
$(function() {
  $("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    responsive : {
              // breakpoint from 0 up
              0 : {
                items: 1

              },
              // breakpoint from 480 up
              480 : {
                items: 2
              },
              // breakpoint from 768 up
              768 : {
                items: 3

              }


          }
  });

});

/*
===============================================================
                            TESTINONIAL
===============================================================
*/
$(function() {
  $("#customers-testimonials").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });

});

/*
===============================================================
                            STATS
===============================================================
*/
$(function() {
  $(".counter").counterUp({
    delay: 10,
    time: 2000

  });
});

/*SS
===============================================================
                             CLIENTS
===============================================================
*/
$(function() {
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    responsive : {
              // breakpoint from 0 up
              0 : {
                items: 1

              },
              // breakpoint from 480 up
              480 : {
                items: 2
              },
              // breakpoint from 768 up
              768 : {
                items: 3

              }


          }
  });

});

/*
===============================================================
                        NAViGATION
===============================================================
*/
$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() < 50) {
      //hide nav
      $("nav").removeClass("vestco-top-nav");
      $("#back-to-top").fadeOut();
    } else {
      // show nav
      $("nav").addClass("vestco-top-nav");
      $("#back-to-top").fadeIn();
    }
  });
});

// Smooth scrolling
$(function() {
  $("a.smooth-scroll").click(function(event) {
    event.preventDefault();
    //Get/return id likke #about, #work
    var section = $(this).attr("href");
    $('html, body').animate({
      scrollTop: $(section).offset().top - 64
    }, 1250, "easeInOutExpo");
  });
});

// Close Mobile menu on click
$(function(){

  $(".navbar-collapse ul li a").on("click touch", function() {
    $(".navbar-toggle").click();
  });

});

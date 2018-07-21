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
    autoplayHoverPause: true
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
    autoplayHoverPause: true
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
    } else {
      // show nav
      $("nav").addClass("vestco-top-nav");
    }
  });
});

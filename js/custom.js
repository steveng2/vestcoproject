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

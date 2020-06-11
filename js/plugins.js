$(document).ready(function () {
  $(".navbar a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
  $(window).scroll(function () {
    var height = $(window).scrollTop();

    if (height >= 200) {
      $(".navbar").addClass("affix");
    } else {
      $(".navbar").removeClass("affix");
    }
  });

  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  var owl = $("#owl1");

  owl.owlCarousel({
    loop: true,
    autoplay: true,
    items: 3,

    nav: true,
    // dots: true,
    rtl: true,
    // autoplayTimeout: 4000,
    // navSpeed: 4000,
    touchDrage: false,
    mouseDrag: false,
    smartSpeed: 450,
    responsiveClass: "true",
    // autoplaySpeed: 4000,
    responsive: {
      0: {
        items: 1,
      },
      481: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        // animateOut: "fadeOut",
        // animateIn: "fadeIn",
        items: 1,
      },
    },
    // itemsMobile disabled - inherit from itemsTablet option
  });

  var owl2 = $("#owl2");

  owl2.owlCarousel({
    autoplay: true,
    loop: true,
    items: 6,
    ltr: true,
    stagePadding: 40,
    dots: false,
    nav: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
      },
      481: {
        items: 1,
        stagePadding: 0,
      },
      768: {
        items: 2,
        stagePadding: 0,
      },
      992: {
        items: 2,
        width: 240,
        stagePadding: 0,
      },
    },
    // itemsMobile disabled - inherit from itemsTablet option
  });
});

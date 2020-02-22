// full background animate
$(document).ready(function(e) {
  $(".fullBackground").fullClip({
    images: [
      "imgs/background.jpg",
      "imgs/background2.jpg",
      "imgs/background3.jpg"
    ],
    transitionTime: 1000,
    wait: 6000
  });
});
// Read more and read less toggle

$(document).ready(function() {
  $(".read").click(function() {
    $(this)
      .prev()
      .toggle();
    $(this)
      .siblings(".dots")
      .toggle();
    if ($(this).text() == "Read More") {
      $(this).text("Read Less");
    } else {
      $(this).text("Read More");
    }
  });
});

// active class added

$(document).on("click", "ul li", function() {
  $(this)
    .addClass("active")
    .siblings()
    .removeClass("active");
});

// for progress bar
$(function() {
  $('.chart').easyPieChart({
    barColor: "#00a99d",
    scaleColor: false,
    lineWidth: 4
  });
});
// owl client slider

$(".owl-carousel").owlCarousel({
  items: 4.3,
  loop: true,
  margin: 150,
  animateOut: "fadeOut",
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 2,
      margin: 70
    },
    1000: {
      items: 4
    }
  }
});

// nav buttons for slider

var owl = $(".owl-carousel");
owl.owlCarousel();
// Go to the next item
$(".fa-caret-right").click(function() {
  owl.trigger("next.owl.carousel", [800]);
});
// Go to the previous item
$(".fa-caret-left").click(function() {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger("prev.owl.carousel", [800]);
});

// burger menu

$(document).ready(function(e) {
  $(".menu").click(function() {
    $(".menu").toggleClass("active2");
    $(".navbar-menu").toggleClass("active2");
  });
});

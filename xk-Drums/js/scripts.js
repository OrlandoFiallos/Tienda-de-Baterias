// Scroll Library init

AOS.init();

// Carousel Init
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, options);
});

var options = {
  indicator: true,
  numVisible: 5,
  padding: 15,
};

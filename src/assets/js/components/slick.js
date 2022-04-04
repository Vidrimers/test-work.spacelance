//= ../../../../node_modules/slick-carousel/slick/slick.js
// https://github.com/kenwheeler/slick/

console.log("this is slick component");

let work__items = $(".work__items");

work__items.slick({
  dots: false,
  arrows: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  speed: 800,
  adaptiveHeight: false,
  // centerMode: true,
  // variableWidth: false,
  responsive: [
    { 
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
})

$(".work__arrow-left").on("click", function (event) {
  event.preventDefault();

  work__items.slick('slickPrev');
});
$(".work__arrow-right").on("click", function (event) {
  event.preventDefault();

  work__items.slick('slickNext');
});
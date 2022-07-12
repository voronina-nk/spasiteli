$(document).ready(function () {
  $('.reviews__carousel').slick({
    // infinite: true,
    speed: 800,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"> </button>',
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendArrows: $('.reviews__nav'),
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        }
      }
    ]
  });
});

let toogleMenu = document.querySelector('.toogle_menu'),
    menu = document.querySelector('.promo__header-menu');

toogleMenu.onclick = function (e) {
    e.preventDefault;
    toogleMenu.classList.toggle('toogle_menu_active');
    menu.classList.toggle('promo__header-menu_active');
}




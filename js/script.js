$(document).ready(function () {
  $('.reviews__carousel').slick({
    // infinite: false,
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
  menu = document.querySelector('.promo__header-menu'),
  body = document.querySelector('body');

toogleMenu.onclick = function (e) {
  e.preventDefault;
  toogleMenu.classList.toggle('toogle_menu_active');
  menu.classList.toggle('promo__header-menu_active');
  body.classList.toggle('hidden');
}


$(document).ready(function () {
  $('.book__carousel').slick({
    // infinite: false,
    speed: 800,
    arrows: false,
    autoplay: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendArrows: $('.book__nav'),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          adaptiveHeight: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          adaptiveHeight: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
          dots: true
        }
      }

    ]
  });
});


$(document).ready(function () {
  $('.carousel__item a').magnificPopup({ type: 'image' });
});

function toggleActive(item) {
  $(item).each(function (i) {
    $(this).on('click', function (e) {
      e.preventDefault(); //отменяем стоящее по умолчанию событие
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    });
  });
}

toggleActive('.js-open');
toggleActive('.js-close');

$('.button[data-modal=consultation]').on('click', function () {
  $('.overlay, #consultation').fadeIn('slow');
});

$('.modal__close').on('click', function () {
  $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
});


$('.button_mini').each(function (i) {
  $(this).on('click', function () {
    $('.overlay, #order').fadeIn('slow');
    $('#order .modal__desc').text($('.catalog-item h3').eq(i).text());
  });
});




function formValidate(form) {

  $(form).validate({
    rules: {
      // назначаем полям  обязательные правила  для заполнения
      name: {
        required: true,
        minlength: 2
      },
      // 
      email: {
        required: true,
        email: true
      },
      reviews: {
        required: true,
        minlength: 10
      }
    },

    messages: {
      name: {
        required: "Введите имя",
        minlength: jQuery.validator.format("Требуется не менее {0} символов")
      },
      email: {
        required: "Введите ваш почтовый адрес",
        email: "Адрес не соответствует name@domain.com"
      },
      reviews: {
        required: "Введите ваш отзыв",
        minlength: jQuery.validator.format("Требуется не менее {0} символов")
      }

    }
  });
}

// Вызываем функцию для каждого айдишника
formValidate(".feed-form");



$('form').submit(function (e) {
  e.preventDefault();
  if ($(this).valid()) {
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize(),
      beforeSend: function () {
        $('.ginger_btn').prop('disabled', true);
        
      }
    }).done(function () {
      
      $(this).find("input").val("");

      $('#reviews-form').modal('hide');
      $('#success').modal('show');

      $('.ginger_btn').prop('disabled', false);
      $('form').trigger("reset")

    }).fail(function () {
      $('#reviews-form').modal('hide');
      $('#error').modal('show');
    })

  }

});



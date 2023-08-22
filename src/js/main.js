$(function () {

  $('.product__tabs-title').on('click', function (e) {
    e.preventDefault();
    $('.product__tabs-title').removeClass('product__tabs-title--active');
    $(this).addClass('product__tabs-title--active');
    $('.product__tabs-item').removeClass('product__tabs-item--active');
    $($(this).attr('href')).addClass('product__tabs-item--active');

  });

  $('.filter-content__btn').on('click', function () {
    $('.filter-content__btn').removeClass('filter-content__btn--active');
    $(this).addClass('filter-content__btn--active');
  });

  $('.filter-content__btn--list').on('click', function () {
    $('.product-item').addClass('product-item--list');
    $('.shop__items').removeClass('shop__items--grid');
  });

  $('.filter-content__btn--grid').on('click', function () {
    $('.product-item').removeClass('product-item--list');
    $('.shop__items').addClass('shop__items--grid');
  });

  $('.pagination__link').on('click', function () {
    $('.pagination__link').removeClass('pagination__link--active');
    $(this).addClass('pagination__link--active');
  });

  $('.filter-content__select').styler();
  
  $('.product__control-input').styler();

  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.blog-item__slider').slick({
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="9px" height="14px" viewBox="0 0 9 14" version="1.1"><g id="surface1"><path d="M 1.164062 6.382812 C 0.8125 6.722656 0.8125 7.277344 1.164062 7.621094 L 5.664062 11.996094 C 6.015625 12.335938 6.585938 12.335938 6.9375 11.996094 C 7.289062 11.652344 7.289062 11.097656 6.9375 10.757812 L 3.074219 7 L 6.9375 3.242188 C 7.289062 2.902344 7.289062 2.347656 6.9375 2.003906 C 6.585938 1.664062 6.011719 1.664062 5.660156 2.003906 L 1.160156 6.378906 Z M 1.164062 6.382812 "/></g></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="9px" height="14px" viewBox="0 0 9 14" version="1.1"><g id="surface1"><path d="M 7.835938 6.382812 C 8.1875 6.722656 8.1875 7.277344 7.835938 7.621094 L 3.335938 11.996094 C 2.984375 12.335938 2.414062 12.335938 2.0625 11.996094 C 1.710938 11.652344 1.710938 11.097656 2.0625 10.757812 L 5.925781 7 L 2.0625 3.242188 C 1.710938 2.902344 1.710938 2.347656 2.0625 2.003906 C 2.414062 1.664062 2.988281 1.664062 3.339844 2.003906 L 7.839844 6.378906 Z M 7.835938 6.382812 "/></g></svg></button>'
  });

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    vertical: true
  });
  
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    arrows: false,
    draggable: false,
    fade: true
  });

  $(".product-item__rating, .product__rating, .review__rating").rateYo({
    starWidth: "18px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true
  });

  $(".price-filter__input").ionRangeSlider({
    type: "double",
    prefix: "$",
    hide_min_max: true,
    hide_from_to: true,

    onStart: function (data) {
      $('.price-filter__price-from').text(data.from);
      $('.price-filter__price-to').text(data.to);
    },

    onChange: function (data) {
      $('.price-filter__price-from').text(data.from);
      $('.price-filter__price-to').text(data.to);
    }
  });

});

Fancybox.bind('[data-fancybox]', {

});

function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.querySelector(id);
  const daysSpan = clock.querySelector('.promo__days');
  const hoursSpan = clock.querySelector('.promo__hours');
  const minutesSpan = clock.querySelector('.promo__minutes');
  const secondsSpan = clock.querySelector('.promo__seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('.promo__timer', deadline);
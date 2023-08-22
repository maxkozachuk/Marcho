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
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"width="18px" height="18px" viewBox="0 0 18 18" version="1.1"><g><path d="M 17.664062 6.675781 C 17.53125 6.28125 17.1875 5.996094 16.78125 5.933594 L 12.007812 5.203125 L 9.863281 0.636719 C 9.679688 0.246094 9.289062 0 8.859375 0 C 8.429688 0 8.039062 0.246094 7.859375 0.636719 L 5.714844 5.203125 L 0.941406 5.933594 C 0.53125 5.996094 0.191406 6.28125 0.0585938 6.675781 C -0.0742188 7.070312 0.0273438 7.503906 0.316406 7.800781 L 3.800781 11.375 L 2.976562 16.429688 C 2.90625 16.851562 3.085938 17.269531 3.433594 17.515625 C 3.777344 17.761719 4.234375 17.785156 4.605469 17.578125 L 8.859375 15.226562 L 13.113281 17.578125 C 13.28125 17.671875 13.46875 17.71875 13.652344 17.71875 C 13.875 17.71875 14.097656 17.648438 14.289062 17.515625 C 14.636719 17.269531 14.8125 16.851562 14.746094 16.429688 L 13.917969 11.375 L 17.40625 7.800781 C 17.695312 7.503906 17.792969 7.070312 17.664062 6.675781 Z M 17.664062 6.675781 "/></g></svg>'
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
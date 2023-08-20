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
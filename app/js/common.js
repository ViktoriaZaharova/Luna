$('.home-slider').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    dots: true
});


$(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});
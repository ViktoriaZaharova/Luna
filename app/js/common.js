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

$('.catalog-slider').slick({
    slidesToShow: 6,
    variableWidth: true,
    appendArrows: '.catalog-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
});



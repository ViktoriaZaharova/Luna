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

// slick active
$(window).on('load resize', function() {
    if ($(window).width() > 576) {
        $('.catalog-slider:not(.slick-initialized)').slick({
            slidesToShow: 6,
            variableWidth: true,
            appendArrows: '.catalog-slider__nav',
            prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
        });
    } else {
        $(".catalog-slider.slick-initialized").slick("unslick");
    }
});
// slick active

$('.personalization-slider').slick({
    slidesToShow: 2,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#right"></use></svg></button>'
});

$('.product-gallery-preview').slick({
    slidesToShow: 4,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
    asNavFor: '.product-gallery-max',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                vertical: false,
                verticalSwiping: false,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
                vertical: false,
                verticalSwiping: false,
            }
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 2,
                vertical: false,
                verticalSwiping: false,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('.product-gallery-max').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false
});


$('.btn-burger').on('click', function (e) {
    e.preventDefault();
   $('.mobile-menu').fadeToggle();
});

$('.btn-close-menu').on('click', function (e) {
    e.preventDefault();
    $('.mobile-menu').fadeOut();
});

$('[name="phone"]').mask('+7 (999) 999 - 99 - 99');

$('.catalog-menu-dropdown').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('click');
    $('.catalog-menu').fadeToggle();
});

$('.btn-filter').on('click', function (e) {
    e.preventDefault();
    $('.sidebar-filter').slideToggle();
});

$(function () {
    $("#filter__range").slider({
        min: 0,
        max: 20000,
        values: [1000,10000],
        range: true,
        stop: function(event, ui) {
            $('.price-range-min.value').html($("#filter__range").slider("values",0));
            $('.price-range-max.value').html($("#filter__range").slider("values",1));
        },
        slide: function(event, ui){
            $('.price-range-min.value').html($("#filter__range").slider("values",0));
            $('.price-range-max.value').html($("#filter__range").slider("values",1));
        }
    });

    $("input#priceMin").on('change', function(){
        var value1=$("input#priceMin").val();
        var value2=$("input#priceMax").val();
        if(parseInt(value1) > parseInt(value2)){
            value1 = value2;
            $("input#priceMin").val(value1);
            $('.price-range-min.value').html(value1);
        }
        $("#filter__range").slider("values", 0, value1);
        $('.price-range-min.value').html(value1);
    });

    $("input#priceMax").on('change', function(){
        var value1=$("input#priceMin").val();
        var value2=$("input#priceMax").val();
        if (value2 > 20000) { value2 = 20000; $("input#priceMax").val(35000)}
        if(parseInt(value1) > parseInt(value2)){
            value2 = value1;
            $("input#priceMax").val(value2);
            $('.price-range-max.value').html(value2);
        }
        $("#filter__range").slider("values",1,value2);
        $('.price-range-max.value').html(value2);
    });

    $('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">' + $('#filter__range').slider('values', 0 ) + '</span>');
    $('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">' + $('#filter__range').slider('values', 1 ) + '</span>');
});


$('.down').on("click", function () {
    let $input = $(this).parent().find('input');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.up').on("click",function () {
    let $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});



// slick active
$(window).on('load resize', function() {
    if ($(window).width() > 768) {
        $('header .search-links svg').on('click', function (e) {
            e.preventDefault();
            $('.form-search-header').toggleClass('active');
        });
    } else {
        $('header .search-links').on('click', function (e) {
            e.preventDefault();
            $('.form-search-mobile').toggleClass('active');
        });
    }
});
// slick active
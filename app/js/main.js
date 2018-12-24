$(document).ready( function() {
	    $('.main-slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $('.products-slider-wrap').slick({
        arrows: true,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 0.5,
        swipeToSlide: true,
    });
    $('.goods-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.goods-slider-nav'
    });
    $('.goods-slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.goods-slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });
});
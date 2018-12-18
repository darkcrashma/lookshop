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
});
$(document).ready(function () {
    var some_image = new Swiper('#picture-in-film .swiper-container',{
        speed: 500,
        sliderPerView: 3,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        pagination:{
            el: '.swiper-pagination',
        },
        navigation:{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    var award_achieved = new Swiper('#award-achieved .swiper-container',{
        speed: 500,
        slidesPerView: 3,
        centeredSlides: false,
        pagination:{
            el: '.swiper-pagination',
        },
    });

    var other_films = new Swiper('#other-films .swiper-container',{
        speed: 500,
        slidesPerView: 3.25,
        centeredSlides: false,
        spaceBetween: 20,
        lazy: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    var image_popup = $('#img-popup').bPopup({
        modalClose: true,
        opacity: 0.6,
        positionStyle: 'fixed' //'fixed' or 'absolute'
    });
});


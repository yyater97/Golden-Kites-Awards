$(document).ready(function () {
    var others_actor = new Swiper('#other-actors .swiper-container',{
        speed: 500,
        slidesPerView: 3.25,
        centeredSlides: false,
        spaceBetween: 20,
        lazy: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 1.25,
                spaceBetweenSlides: 0
            }
        }
    });

    var award_achieved = new Swiper('#award-achieved .swiper-container',{
        speed: 500,
        slidesPerView: 3,
        centeredSlides: false,
        pagination:{
            el: '.swiper-pagination',
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
                spaceBetweenSlides: 0
            }
        }
    });

});

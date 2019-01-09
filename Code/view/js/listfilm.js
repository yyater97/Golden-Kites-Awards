$(document).ready(function () {

    var rank_swiper = new Swiper('#rank-list .swiper-container',{
        speed: 500,
        slidesPerView: 1,
        centeredSlides: false,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });
    
    var film_of_week_swiper = new Swiper('#film-of-week .content',{
        speed: 500,
        slidesPerView: 3,
        centeredSlides: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    var film_of_week_img_swiper = new Swiper('#film-of-week .image-swiper',{
        speed: 500,
        slidesPerView: 1,
        centeredSlides: false,
        autoplay: {
            deplay: 2000,
            disableOnInteraction: false,
        }
    });

    function checkNavPos(){
        if($(this).scrollTop()>=60){
            $('.nav').addClass('fixNav');
        }
        else{
            $('.nav').removeClass('fixNav');
        }
    }
    
    checkNavPos();

    $(window).scroll(function(){
        checkNavPos();
    });
});


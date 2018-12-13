$(document).ready(function () {
    var others_actor = new Swiper('#other-actors .swiper-container',{
        speed: 500,
        slidesPerView: 3.25,
        centeredSlides: false,
        spaceBetween: 20,
        lazy: true,
    });

    var award_achieved = new Swiper('#award-achieved .swiper-container',{
        speed: 500,
        slidesPerView: 3,
        centeredSlides: false,
        pagination:{
            el: '.swiper-pagination',
        },
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

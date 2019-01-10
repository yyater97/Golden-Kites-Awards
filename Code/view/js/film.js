$(document).ready(function () {
    var some_image = new Swiper('#picture-in-film .swiper-container',{
        speed: 500,
        sliderPerView: 3,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        navigation:{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
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
        breakpoints: {
            768: {
                slidesPerView: 1.25,
                spaceBetweenSlides: 0
            }
        }
    });

    $('#picture-in-film .screen-img').on('click', function(){
        $('#img-popup .img img').attr('src',$(this).children().attr('src'));
        popup();
    });

    var isHideFilmInfo = true;

    $('#more-film-info').on('click', function(){
        if(isHideFilmInfo){
            $('.film-info .main-info .content').animate({height:'200%'},"slow");
            $(this).animate({  textIndent: 0 }, {
                step: function(now,fx) {
                  $(this).css('-webkit-transform','rotate(180deg)'); 
                },
                duration:'slow'
            },'linear');
            isHideFilmInfo = false;
        }else{
            $('.film-info .main-info .content').animate({height:'64%'},"slow"); 
            $(this).animate({  textIndent: 0 }, {
                step: function(now,fx) {
                  $(this).css('-webkit-transform','rotate(0deg)'); 
                },
                duration:'slow'
            },'linear');
            isHideFilmInfo = true;
        }
        
    });

    function popup(){
        $('#img-popup').bPopup({
            modalClose: true,
            opacity: 0.6,
            positionStyle: 'fixed',
            speed: 650,
            transition: 'slideIn',
            transitionClose: 'slideBack',
            closeClass: 'close-popup-btn',
            onOpen: function(){
                $('body').css('overflow','hidden');
            },
            onClose: function(){
                $('body').css('overflow','auto');
            }
        });
    }
});


$(document).ready(function () {
    var swiper = new Swiper('#kv .swiper-container',{
        speed: 800,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        loop: true,
        pagination:{
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation:{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on:{
            slideChangeTransitionStart: function(){
                $('.swiper-slide .banner .info-content').removeClass('animation');
                $('.swiper-slide-active .banner .info-content').addClass('animation');
            }
        },

    });

    // var menu = ['img/cbsg-logo.png','img/ec18-logo.png','img/tnoa-logo.png','img/lydvs-logo.png'];
	// var film_awarded = new Swiper('#film-awarded .swiper-container',{
    //     direction: 'vertical',
    //     slidesPerView: 1,
	//     pagination: {
	//       el: '.swiper-pagination',
	//       clickable: true,
	//       renderBullet: function(index, className){
	//       	return '<div class="' + className + '"><img src="' + (menu[index]) + '"/></div>';
	//       },
	//     },
    // });
    
    $('#film-awarded .panel-controller .panel-controller-element .content').on('click',function(){
        $('#film-awarded .panel-controller .panel-controller-element .content').addClass('film-chose');
        $('#film-awarded .panel-controller .panel-controller-element').removeClass('panel-controller-element-actived');
        $('#film-awarded .panel-controller .panel-controller-element').addClass('panel-controller-element-unactived');
        var dataIndex = $(this).parent().attr('data-index');
        $('#film-awarded .panel-controller .panel-controller-element[data-index='+dataIndex+']').addClass('panel-controller-element-actived');
        $('#film-awarded .panel-controller .panel-controller-element[data-index='+dataIndex+']').removeClass('panel-controller-element-unactived');
        $('#film-awarded .panel-content .film').addClass('hidden');
        $('#film-awarded .panel-content .film[id='+dataIndex+']').removeClass('hidden');
    });

    var donors = new Swiper('#donors .swiper-container',{
        speed: 500,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slidesPerView: 'auto',
        centeredSlides: true,
        navigation:{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var actor_awarded = new Swiper('#actor-awarded .swiper-container',{
        speed: 500,
        slidesPerView: 3,
        centeredSlides: false,
        pagination:{
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
                spaceBetweenSlides: 0
            }
        }
    });

    function checkNavPos(){
        if($(this).scrollTop()>=60){
            $('.navbar').addClass('fixNav');
            $('.user-avatar img').attr('src','img/user-black.png');
        }
        else{
            $('.navbar').removeClass('fixNav');
            $('.user-avatar img').attr('src','img/user-white.png');
        }

        // if($(this).scrollTop()>=500){
        //     $('#history .info-content').addClass('animation');
        // }
    }
    
    checkNavPos();

    $(window).scroll(function(){
        checkNavPos();
    });

    $('.user-avatar').on('click',function(){
        showLoginPopup();
    });

    function showLoginPopup(){
        $('#login-popup').bPopup({
            modalClose: true,
            opacity: 0.6,
            positionStyle: 'fixed',
            closeClass: 'close-login-popup',
        });
    }
});

$(document).ready(function(){
    $(window).scroll(function(){
        var bottomNav = $('.nav').offset().top + $('.nav').outerHeight();
        var topFooter = $('.footer-distributed').offset().top;
        var scrollPosTop = $(this).scrollTop();
        var newRelatedHeight = $('#news .fuil-container .news-related').outerHeight()
        var scrollPosBottom = $(this).scrollTop() + newRelatedHeight;
        
        if(bottomNav+54<scrollPosTop && scrollPosBottom<topFooter-46){
            $('#news .fuil-container .news-related').addClass('news-related-fix');
            $('#news .fuil-container .news-related').offset({top: scrollPosTop+10});
        }else if(bottomNav+54>=scrollPosTop){
            $('#news .fuil-container .news-related').removeClass('news-related-fix');
            $('#news .fuil-container .news-related').offset({top: bottomNav+54});
        }else if(scrollPosBottom>=topFooter-42){
            $('#news .fuil-container .news-related').removeClass('news-related-fix');
            $('#news .fuil-container .news-related').offset({top: topFooter-46-newRelatedHeight});
        }
    });
});
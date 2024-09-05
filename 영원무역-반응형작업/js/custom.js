$(function(){
    $(document).ready(function() {
        const $counters = $(".scroll-on , .esg-title");
        const exposurePercentage = 100;
        const loop = true; 
        $(window).on('scroll', function() {
            $counters.each(function() {
                const $el = $(this);
        
                const rect = $el[0].getBoundingClientRect();
                const winHeight = window.innerHeight; 
                const contentHeight = rect.bottom - rect.top;
                
                if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100)) {
                    $el.addClass('active');
                }
                if (loop && (rect.bottom <= 0 || rect.top >= window.innerHeight)) {
                    $el.removeClass('active');
                }
            });
        }).scroll();
    });

    $(window).scroll(function(){
        if($(window).scrollTop() > 100) {
          $('.header-wrap , .gototop').addClass('active');
        }
        else {
          $('.header-wrap , .gototop').removeClass('active');
        }
    })

    $('.family-site').click(function(){
        $('.family-site-wrap').stop();
        $('.family-site-wrap').slideToggle();
    })
    $('.family-site-wrap .option').click(function(){
       var click_value = $(this).text();
       $('.select-value').text(click_value);
       $('.family-site-wrap').hide();
    })

    $('.nav-menu').hover(function(){
        $('.header-wrap').toggleClass('active');
    })
    $('.main-menu-title').mouseover(function(){
        $('.sub-menu-box').hide();
        $(this).next().show();
    })
    $('.nav-menu').mouseleave(function(){
        $('.sub-menu-box').hide();
    })
    $('.trigger').click(function(){
        $('.mega-navi').toggleClass('active');
        $(this).toggleClass('active');
    })
    $('.mega-navi-title li').click(function(){
        $('.mega-navi-detail').stop();
        $(this).next().slideToggle();
    })
    $('.list-title > li').click(function(){
        $('.list-detail').stop();
        $(this).next().slideToggle();
    })
});
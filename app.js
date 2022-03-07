$(document).ready(function() {
    $('.header-burger__colo').click(function(event) {
        $('.header-burger,.header-menu').toggleClass('active');
    });
    $('.header-link').click(function(event){
        $('.header-burger__colo.active,.header-menu.active').removeClass('active');
        
    });

    $('.intro-btn').click(function(event) {
        $('.Intro,.intro-inner').toggleClass('act');
    });
    let header = $('#header');
    let headerH;
    let intro = $('#home');
    let introH;
    let scrollPos = $(window).scrollTop();

    $(window).on('scroll load resize', function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        headerH = header.innerHeight();
        if ( scrollPos > introH) {
            header.addClass('background');
        } else {
            header.removeClass('background'); 
        }
    });
    $ ('[data-scroll]').on('click',function(event) {
        event.preventDefault();
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        $('html,body').animate( {
            scrollTop: elementOffset - 100
        } ,700 );
    });

        $('.header-link').on('click', function(e) {
           /*-- e.preventDefault();   -убирает свойство ссылки быть ссылкой*/
            $('.header-link').removeClass('header-link--active');
            $(this).addClass('header-link--active');

        });

        



});
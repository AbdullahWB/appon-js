$(window).scroll(function() {
    var scrolling = $(this).scrollTop();

    // nav fixed
    if (scrolling > 150) {
        $('.manu-bg').addClass('bg');
    } else {
        $('.manu-bg').removeClass('bg');
    }

    // back to top
    if (scrolling > 400) {
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
    }
});


$('.back-to-top').click(function() {
    $('body,html').animate({
        scrollTop: '0',
    }, 1500);
});

$(document).ready(function() {
    $('.preloder').delay(3000).fadeOut();
});
$('.foot__up').on('click', function(){
    $('html, body').animate({
        scrollTop: $("#up").offset().top
    }, 2000);
    event.preventDefault();
});
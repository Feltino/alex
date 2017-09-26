$(function(){
    $('.mobile__sub').on('click', function(){
        $('.mobile__ul').slideToggle(300, function () {
            if($(this).css('display') === 'none'){
                $(this).removeAttr('style');
            }
        });
    })
});
$(document).ready(function() {
    /*
    *   Examples - images
    */

    $("a#example1").fancybox();

    $("a#example2").fancybox({
        'overlayShow'	: false,
        'transitionIn'	: 'elastic',
        'transitionOut'	: 'elastic'
    });

    $("a#example3").fancybox({
        'transitionIn'	: 'none',
        'transitionOut'	: 'none'
    });

    $("a#example4").fancybox({
        'opacity'		: true,
        'overlayShow'	: false,
        'transitionIn'	: 'elastic',
        'transitionOut'	: 'none'
    });

    $("a#example5").fancybox();

    $("a#example6").fancybox({
        'titlePosition'		: 'outside',
        'overlayColor'		: '#000',
        'overlayOpacity'	: 0.9
    });

    $("a#example7").fancybox({
        'titlePosition'	: 'inside'
    });

    $("a#example8").fancybox({
        'titlePosition'	: 'over'
    });

    $("a[rel=example_group]").fancybox({
        'transitionIn'		: 'none',
        'transitionOut'		: 'none',
        'titlePosition' 	: 'over',
        'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
    });

    /*
    *   Examples - various
    */

    $("#various1").fancybox({
        'titlePosition'		: 'inside',
        'transitionIn'		: 'none',
        'transitionOut'		: 'none'
    });

    $("#various2").fancybox();

    $("#various3").fancybox({
        'width'				: '75%',
        'height'			: '75%',
        'autoScale'			: false,
        'transitionIn'		: 'none',
        'transitionOut'		: 'none',
        'type'				: 'iframe'
    });

    $("#various4").fancybox({
        'padding'			: 0,
        'autoScale'			: false,
        'transitionIn'		: 'none',
        'transitionOut'		: 'none'
    });
});
$(document).ready(function(){
    $('[data-submit]').on('click', function(e){
        e.preventDefault();
        $(this).parent('form').submit();
    });
    $.validator.addMethod(
        "regex",
        function(value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        "Please check your input."
    );
    function valEl(el){

        el.validate({
            rules:{
                tel:{
                    required:true,
                    regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
                },
                name:{
                    required:true
                },
                email:{
                    required:true,
                    email:true
                }
            },
            messages:{
                tel:{
                    required:'Поле обязательно для заполнения',
                    regex:'Телефон может содержать символы + - ()'
                },
                name:{
                    required:'Поле обязательно для заполнения',
                },
                email:{
                    required:'Поле обязательно для заполнения',
                    email:'Неверный формат E-mail'
                }
            },
            submitHandler: function (form) {
                $('#loader').fadeIn();
                var $form = $(form);
                var $formId = $(form).attr('id');
                switch($formId){
                    case'goToNewPage':
                        $.ajax({
                            type: 'POST',
                            url: $form.attr('action'),
                            data: $form.serialize(),
                        })
                            .always(function (response) {
                                //ссылка на страницу "спасибо" - редирект
                                location.href='success.html';
                                //отправка целей в Я.Метрику и Google Analytics
                                ga('send', 'event', 'masterklass7', 'register');
                                yaCounter27714603.reachGoal('lm17lead');
                            });
                        break;
                    case'popupResult':
                        $.ajax({
                            type: 'POST',
                            url: $form.attr('action'),
                            data: $form.serialize(),
                        })
                            .always(function (response) {
                                setTimeout(function (){
                                    $('#loader').fadeOut();
                                },800);
                                setTimeout(function (){
                                    $('#overlay').fadeIn();
                                    $('form').fadeOut();
                                    $form.trigger('reset');
                                    //строки для остлеживания целей в Я.Метрике и Google Analytics
                                },1100);
                                $('#overlay').on('click', function(e) {
                                    $('#overlay').fadeOut();
                                });

                            });
                        break;
                    case'popupResult1':
                        $.ajax({
                            type: 'POST',
                            url: $form.attr('action'),
                            data: $form.serialize(),
                        })
                            .always(function (response) {
                                setTimeout(function (){
                                    $('#loader').fadeOut();
                                },800);
                                setTimeout(function (){
                                    $('#overlay').fadeIn();
                                    $('form').fadeOut();
                                    $form.trigger('reset');
                                    //строки для остлеживания целей в Я.Метрике и Google Analytics
                                },1100);
                                $('#overlay1').on('click', function(e) {
                                    $('#overlay1').fadeOut();
                                });

                            });
                        break;
                }
                return false;
            }
        })
    }

    $('.js-form').each(function() {
        valEl($(this));
    });
    $('.offer__a').on('click', function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, "#up") ).offset().top
        }, 2000);
        event.preventDefault();
    })
});
    $('.offer__a').on('click', function(){
        $('html, body').animate({
            scrollTop: $("#up").offset().top
        }, 2000);
        event.preventDefault();
    });
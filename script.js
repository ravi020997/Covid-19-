$(document).ready(function(){

    $('#menu').click(function(){
        
        $(this).toggleClass('fa-times');
        $('.navBar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){

        $('#menu').removeClass('fa-times');
        $('.navBar').removeClass('nav-toggle');

        if($(window).scrollTop() > 0){
            $('header').addClass('sticky');
        }else{
            $('header').removeClass('sticky');
        }

        
        if($(window).scrollTop() > 0){
            $('.scroll-top').show();
        }else{
            $('.scroll-top').hide();
        }

        // Scroll spy

        $('section').each(function(){

            let top = $(window).scrollTop();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');
            let height = $(this).height(); 

            if (top > offset && top < offset + height){
                $('.navBar a').removeClass('active');
                $('.navBar').find('[href="#$(id)"]').addClass('active');
            }
        });
    });

    // smooth scrolling

    $('a[href*="#"]').on ('click',function(e){

        $('html, body').animate({

            scrollTop: $($(this).attr('href')).offset().top,
   
    },

     500,
    'linear'

        );

});
});
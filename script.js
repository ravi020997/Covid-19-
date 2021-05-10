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
    });

});
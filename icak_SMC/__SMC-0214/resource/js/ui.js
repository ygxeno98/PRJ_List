$(function(){

    $('.btnMenu').click(function(){
        $(this).toggleClass('active');
        $('nav').toggleClass('active');
        $('body').toggleClass('active');
    });
    
})
$(function(){
    $('.btnMenu').click(function(){
        $(this).toggleClass('active');
        $('.sc_gnb').toggleClass('active');
        $('body').toggleClass('active');
    });
})
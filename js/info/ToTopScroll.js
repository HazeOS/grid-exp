$(document).ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('#ToTop').fadeIn("fast");
        } else {
            $('#ToTop').fadeOut("fast");
        }
    });

    $('#ToTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

});
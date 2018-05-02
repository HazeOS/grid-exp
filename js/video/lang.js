$(document).ready(function () {
    var russian = $('#russian');
    var british = $('#british');

    russian.click(function () {
        $('.logo').text("Сборка материнской платы");
        $('#play').text("Играть");
        $('#info').text("Инфо");
        $('#dis_anim').html("Отключить <br> Анимацию")  ;
    });

    british.click(function () {
        $('.logo').text("Motherboard Assembly");
        $('#play').text("Play");
        $('#info').text("Info");
        $('#dis_anim').text("Disable\n"+"Animation");
    });

    var russian_info  = $('#russian-info');
    var british_info  = $('#british-info');

    russian_info.click(function () {
        $('#mobile').text("Мобильная материнская плата");
        $('#pc').text("Компьютерная материнская плата");
    });

    british_info.click(function () {
        $('#mobile').text("Mobile Motherboard");
        $('#pc').text("PC Motherboard");
    });
});
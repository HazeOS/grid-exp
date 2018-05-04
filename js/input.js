$(document).ready(function () {
    var result_text = $('#result');
    var right = $.cookie('right');
    var wrong = $.cookie('wrong');
    var result = parseInt(right) - parseInt(wrong);
    result_text.text(result + ' ' + 'баллов');
});
$(document).ready(function () {
    var count = 0;
    $("#form").submit(function () { //устанавливаем событие отправки для формы с id=form

        var form_data = $(this).serialize();
        //собераем все данные из формы
        count++;
        $.ajax({
            type: "POST", //Метод отправки
            url: "php/dbc.php", //путь до php фаила отправителя
            data: form_data,
            success: function (data) {
                if(count===1) {
                    alert("Успех");
                    $('#username').addClass('is-valid');
                    $(".form-group").append('<span class="badge badge-success">Отправлено</span>');
                    $("#username").val(''); //очищаем текстовое поле после успешной вставки
                    $("#append").addClass('disabled');
                }
                if (count>1){

                }
            },
            error: function (xhr, str) {
                alert("Ошибка: " + xhr.responseCode);
                $('#username').addClass('is-invalid');
                $(".form-group").append('<span class="badge badge-danger">Ошибка</span>');
            }
        });
        return false;
    });
});
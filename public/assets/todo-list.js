$(document).ready(function () {

    $('form').on('submit', function () {
        let data = $('form input');
        let todo = {item: data.val()};

        $.ajax({
           type: 'POST',
           url: '/todo',
           data: todo,
           success: function (data) {
                location.reload();
           }
        });
        return false;
    });
    
    $('li').on('click', function () {
        let item = $(this).text().replace(" ","-");
        $.ajax({
            type: 'DELETE',
            url: '/todo/'+item,
            success: function (data) {
                location.reload();
            }
        });
    })

});

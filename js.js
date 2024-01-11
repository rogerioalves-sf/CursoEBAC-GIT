
$(document).ready(function(){
    $('#btnaddjs').click(function(){
        let text = $('#texto').val();
        if (text.trim() !== '') {
            $('#lista').append('<li>' + text + '</li>');
            $('#texto').val('');
        };
        $('#lista').on('click', 'li', function(){
            $(this).toggleClass('checked');
        });
    })})
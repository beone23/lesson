$('.tab-button').eq(0).on('click', function() {
    $('.tab-button').removeClass('orange');
    $(this).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(0).addClass('show');
})
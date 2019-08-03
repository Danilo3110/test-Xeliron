'use strict';

$('#email').on('focus, input', () => {
    return $('#email').val() === '' ? $('.email').removeClass('hide') : $('.email').addClass('hide');
});

$('.data_protected div').on('click', () => {
    $('.more_info').fadeToggle('hide');
});

$('.question1 .icon').on('click', () => {
    if ($('.icon span:first-of-type').hasClass('plus') === false) {
        $('.icon span:first-of-type').css({top: '8px', bottom: '8px'}).addClass('plus');
    } else {
        $('.icon span:first-of-type').css({top: '17px', bottom: '17px'}).removeClass('plus');
    }
    $('.icon span:first-of-type, .icon span:last-of-type').toggleClass('rotate');
    $('.answer').slideToggle('hide');
});
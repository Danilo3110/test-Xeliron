'use strict';

const render_secondStep = () => {
    const $secondStep = $(`<section class="phone_number">
                            <input type="text" name="phone" id="phone" placeholder="Phone">
                            <img src="../assets/flag.png" alt="flag" id="flag_icon">
                            <span class="prefix">&plus;381</span>
                            <img src="../assets/drop down arrow.png" alt="arrow" id="arrow_icon">
                            <img src="../assets/divider_phone.png" alt="divided" id="divider_icon">
                        </section>`);
    $('.form').after($secondStep);
};

const render_Modal = () => {
    const $modal = $(`<section class="modal_section">
                        <img src="../assets/x icon.png" alt="x_icon" id="x_icon">
                        <img src="../assets/video.png" alt="video" id="video">
                        <div class="modal_headline">start&nbsp;making<div>money&nbsp;today!</div></div>
                        <input type="text" class="first_name" id="first_name" placeholder="First name">
                        <img src="../assets/user icon.png" alt="user" id="user_icon">
                        <input type="text" class="last_name" id="last_name" placeholder="Last name">
                        <img src="../assets/user icon.png" alt="user" id="user_icon2">
                        <input type="text" name="email" id="email2">
                        <img src="../assets/email icon.png" alt="email" id="email_icon">
                        <span class="email">E&minus;mail</span>
                        <div class="button"></div>
                        <div class="button-desc">go&nbsp;to&nbsp;next&nbsp;step</div>
                        <img src="../assets/arrow icon.png" class="position-absolute" alt="arrow" id="arrow_icon2">
                    </section>`);
    $('.video_overlay').prepend($modal);
    $('#x_icon').on('click', modalHandlerOff);
    $('#email2').on('focus, input', () => enterEmail('#email2', '.modal_section'));
};

const secondStepHandler = () => {
    if ($('#checkbox').is(':checked')) {
        render_secondStep();
        $('.checkbox, .privacy').addClass('hide').fadeIn(0).fadeOut(300);
        $('.step_1').css('color', '#28b45d').fadeOut(0).fadeIn(500);
        $('.button').addClass('button_next_step');
        $('#next-step').html('get&nbsp;started&nbsp;now').css({left: '903px', top: '497px'});
        $('#data_icon').css({top: '563px'});
        $('.data_protected').css({top: '562px'});
        $('.more_info').css({top: '611px'});

        $('.button, #next-step').off('click');
    } else {
        $('.privacy').css({borderBottom: '1px dashed #dc3545'});
    }
};

const modalHandlerOn = () => {
    $('.first_step').addClass('hide');
    render_Modal();
};

const modalHandlerOff = () => {
    $('.modal_section').remove();
    $('.first_step').removeClass('hide');
};

const enterEmail = (input, hide) => {
    return $(`${input}`).val() === '' ? $(`${hide} .email`).removeClass('hide') : $(`${hide} .email`).addClass('hide');
};

const questionHandler = () => {
    if ($('.icon span:first-of-type').hasClass('plus') === false) {
        $('.icon span:first-of-type').css({top: '8px', bottom: '8px'}).addClass('plus');
    } else {
        $('.icon span:first-of-type').css({top: '17px', bottom: '17px'}).removeClass('plus');
    }
    $('.icon span:first-of-type, .icon span:last-of-type').toggleClass('rotate');
    $('.answer').slideToggle('hide');
};

const eventsAll = () => {
    $('#email').on('focus, input', () => enterEmail('#email', '.form'));
    $('.button, #next-step').on('click', secondStepHandler);
    $('.data_protected div').on('click', () => $('.more_info').fadeToggle('hide'));
    $('.question1 .icon').on('click', questionHandler);
    $('.here').on('click', modalHandlerOn);
};

$(document).on('load', eventsAll());
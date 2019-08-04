'use strict';

const render_secondStep = () => {
    const $secondStep = $(`<section class="phone_number">
                            <input type="text" name="phone" id="phone" placeholder="Phone">
                            <img src="../assets/flag.png" alt="flag" id="flag_icon">
                            <span class="prefix">&plus;381</span>
                            <img src="../assets/drop_down_arrow.png" alt="arrow" id="arrow_icon">
                            <img src="../assets/divider_phone.png" alt="divided" id="divider_icon">
                        </section>`);
    $('.form').after($secondStep);
};

const render_Modal = () => {
    const $modal = $(`<section class="modal_section">
                        <img src="../assets/x_icon.png" alt="x_icon" id="x_icon" title="close">
                        <img src="../assets/video.png" alt="video" id="video">
                        <div class="modal_headline">start&nbsp;making<div>money&nbsp;today!</div></div>
                        <input type="text" class="first_name" id="first_name" placeholder="First name">
                        <img src="../assets/user_icon.png" alt="user" id="user_icon">
                        <input type="text" class="last_name" id="last_name" placeholder="Last name">
                        <img src="../assets/user_icon.png" alt="user" id="user_icon2">
                        <input type="text" name="email" id="email2">
                        <img src="../assets/email_icon.png" alt="email" id="email_icon">
                        <span class="email">E&minus;mail</span>
                        <div class="button"></div>
                        <div class="button-desc">go&nbsp;to&nbsp;next&nbsp;step</div>
                        <img src="../assets/arrow_icon.png" class="position-absolute" alt="arrow" id="arrow_icon2">
                    </section>`);
    $('.video_overlay').prepend($modal);
    $('#x_icon').on('click', modalHandlerOff);
    $('.modal_section .button, .modal_section .button-desc, #arrow_icon2').on('click', () => {
        secondStepHandler(true);
        modalHandlerOff();
    });
    $('#email2').on('focus, input', () => enterEmail('#email2', '.modal_section'));
};

const render_Features = () => {
    const $features = $(`<section class="features">
                            <div class="features_title position-absolute">Features</div>
                            <div class="position-absolute" id="close_x_features" title="close"></div>
                            <div class="fast_block position-absolute">
                                <img src="../assets/fast_icon.png" alt="fast" class="fast_icon">
                                <div class="info1">lorem ipsum</div>
                                <div class="info2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore</div>
                            </div>
                            <div class="education_block position-absolute">
                                <img src="../assets/education_icon.png" alt="education" class="fast_icon icon1">
                                <div class="info1">lorem ipsum</div>
                                <div class="info2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore</div>
                            </div>
                            <div class="loophole_block position-absolute">
                                <img src="../assets/loophole_icon.png" alt="loophole" class="fast_icon icon2">
                                <div class="info1">lorem ipsum</div>
                                <div class="info2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore</div>
                            </div>
                            <div class="profit_block position-absolute">
                                <img src="../assets/profit_icon.png" alt="profit" class="fast_icon icon3">
                                <div class="info1">lorem ipsum</div>
                                <div class="info2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore</div>
                            </div>
                        </section>`);
    $('.faq').prepend($features);
};

const render_Reasurance = () => {
    const $reasurance = $(`<section class="reasurance">
                            <div class="position-absolute" id="img_phone"></div>
                            <div class="position-absolute" id="close_x" title="close"></div>
                            <div class="position-absolute" id="subtitle">What&nbsp;you&nbsp;should know about industry:</div>
                        </section>`);
    $('.footer').prepend($reasurance);
    for (let i=1; i <= 4; i++) {
        const $reasuranceContainer = $('.reasurance');
        let $bullets = $(`<div class="position-absolute bullet" id="bullet_${i}"></div>
                            <div class="position-absolute point" id="point_${i}">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore mag</div>`);
        $bullets.appendTo($reasuranceContainer);
    }
};

const secondStepHandler = (test) => {
    if (test) {
        render_secondStep();
        $('.checkbox, .privacy').addClass('hide').fadeIn(0).fadeOut(300);
        $('.step_1').css('color', '#28b45d').fadeOut(0).fadeIn(500);
        $('.button').addClass('button_next_step');
        $('#next-step').html('get&nbsp;started&nbsp;now').css({left: '903px', top: '497px'});
        $('#data_icon').css({top: '563px'});
        $('.data_protected').css({top: '562px'});
        $('.more_info').css({top: '611px'});

        $('.first_step .button, #next-step').off('click');
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

const featuresHandlerOn = () => {
    $('.faq').css({backgroundColor: 'unset'});
    $('.faq_title, .questions').addClass('hide');
    render_Features();
    animateFocus('.features');
    $('.steps_section .button, #features').off('click');
    $('#close_x_features').on('click', featuresHandlerOff);
};

const featuresHandlerOff = () => {
    $('.features').remove();
    $('.faq').css({backgroundColor: '#28b45d'});
    $('.faq_title, .questions').removeClass('hide');
    $('#close_x_features').off('click');
    $('.steps_section .button, #features').on('click', featuresHandlerOn);
};

const reasuranceHandlerOn = () => {
    $('#footer').addClass('hide');
    $('.footer').addClass('footerHeight');
    render_Reasurance();
    animateFocus('.reasurance');
    $('#icon_advice').off('click');
    $('#close_x').on('click', reasuranceHandlerOff);
};

const reasuranceHandlerOff = () => {
    $('.reasurance').remove();
    $('#footer').removeClass('hide');
    $('.footer').removeClass('footerHeight');
    animateFocus('#footer');
    $('#close_x').off('click');
    $('#icon_advice').on('click', reasuranceHandlerOn);
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

const animateFocus = (toLocation) => {
    $('html, body').animate({ scrollTop: $(`${toLocation}`).offset().top }, 800);
};

const hoverAll = () => {
    $('#icon_register').hover(function() {
        $(this).css({backgroundImage: `url('../assets/leadbox1.png')`});
        $('.register div:eq(0)').css({color: '#28b45d', fontSize: '48px', left: '264px', top: '1057px'});
        $('.register div:eq(1)').css({color: '#28b45d', fontSize: '36px', left: '197px', top: '1509px'});
        $('#img_register').css({backgroundImage: `url('../assets/placeholder1.png')`, width: '297px', height: '353px', left: '128px', top: '1130px'});
    }, function() {
        $(this).css({backgroundImage: `url('../assets/leadbox.png')`});
        $('.register div:eq(0)').css({color: '#a09f9f', fontSize: '36px', left: '267px', top: '1117px'});
        $('.register div:eq(1)').css({color: '#a09f9f', fontSize: '30px', left: '209px', top: '1513px'});
        $('#img_register').css({backgroundImage: `url('../assets/placeholder.png')`, width: '282px', height: '164px', left: '135.5px', top: '1319px'});
    });

    $('#icon_account').hover(function() {
        $(this).css({backgroundImage: `url('../assets/credit_card1.png')`});
        $('.account div:eq(0)').css({color: '#28b45d', fontSize: '48px', left: '672px', top: '1057px'});
        $('.account div:eq(1)').css({color: '#28b45d', fontSize: '36px', left: '521px', top: '1509px'});
        $('#img_account').css({backgroundImage: `url('../assets/placeholder1.png')`, width: '297px', height: '353px', left: '535.5px', top: '1130px'});
    }, function() {
        $(this).css({backgroundImage: `url('../assets/credit_card.png')`});
        $('.account div:eq(0)').css({color: '#a09f9f', fontSize: '36px', left: '674px', top: '1117px'});
        $('.account div:eq(1)').css({color: '#a09f9f', fontSize: '30px', left: '539px', top: '1513px'});
        $('#img_account').css({backgroundImage: `url('../assets/placeholder.png')`, width: '282px', height: '164px', left: '543px', top: '1319px'});
    });

    $('#icon_advice').hover(function() {
        $(this).css({backgroundImage: `url('../assets/photo1.png')`});
        $('.advice div:eq(0)').css({color: '#28b45d', fontSize: '48px', left: '1080px', top: '1057px'});
        $('.advice div:eq(1)').css({color: '#28b45d', fontSize: '36px', left: '973px', top: '1509px'});
        $('#img_advice').css({backgroundImage: `url('../assets/placeholder1.png')`, width: '297px', height: '353px', left: '942.5px', top: '1130px'});
    }, function() {
        $(this).css({backgroundImage: `url('../assets/photo.png')`});
        $('.advice div:eq(0)').css({color: '#a09f9f', fontSize: '36px', left: '1083px', top: '1117px'});
        $('.advice div:eq(1)').css({color: '#a09f9f', fontSize: '30px', left: '985px', top: '1513px'});
        $('#img_advice').css({backgroundImage: `url('../assets/placeholder.png')`, width: '282px', height: '164px', left: '950px', top: '1319px'});
    });
};

const eventsAll = () => {
    $('.privacy').on('click', () => {
        const $check = $('#checkbox');
        return $check.is(':checked') ? $check.prop('checked', false) : $check.prop('checked', true);
    });
    $('#email').on('focus, input', () => enterEmail('#email', '.form'));
    $('.first_step .button, #next-step').on('click', () => {
        const test = $('#checkbox').is(':checked');
        secondStepHandler(test);
    });
    $('.data_protected div').on('click', () => $('.more_info').fadeToggle('hide'));
    $('.question1 .icon').on('click', questionHandler);
    $('.here').on('click', modalHandlerOn);
    $('.steps_section .button, #features').on('click', featuresHandlerOn);
    $('#icon_advice').on('click', reasuranceHandlerOn);
};

$(document).on('load', eventsAll(), hoverAll());
$(document).ready(() => {
    new WOW({
        animateClass: 'animate__animated',
    }).init();

    $('#video').click(() => {
        $('#youtube-video').css('display', 'flex');
        $('#video-container').hide();
    });

    $('#program-block #program-container').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('#reviews #reviews-container').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('#photo-gallery #photo-container').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('#photo-gallery #second-photo-container').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('.picture').magnificPopup({
        type: 'image'
    });

    $('#reservation-cancel-close, #reservation-sent, #button-okay').click((e) => {
        if (e.target.id === 'reservation-sent' || e.target.id === 'reservation-cancel-close' || e.target.id === 'button-okay') {
            $('#reservation-sent').hide();
        }
    });

    $('#reserve-button > button').click(() => {
        $('.error-input').hide();
        let count = $('input[name=radio]:checked');
        let name = $('#name');
        let phone = $('#phone');
        name.css('border-color', 'white');
        phone.css('border-color', 'white');

        if (!name.val()) {
            name.siblings('.error-input').show();
            name.css('border-color', 'red');
            hasError = true;
        }
        if (!phone.val()) {
            phone.siblings('.error-input').show();
            phone.css('border-color', 'red');
            hasError = true;
        }

        else {
            $('#reservation-sent').css('display', 'flex');
        }

        // if (!hasError) {
        //     $.ajax({
        //         method: "POST",
        //         url: 'mail.php',
        //         data: 'count=' + count.val() + '&name=' + name.val() + '&phone=' + phone.val(),
        //         success: () => {
        //             $('#reservation-sent').css('display', 'flex');
        //         },
        //         error: () => {
        //             alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона.');
        //         }
        //     });
        // }
    });

    $('#burger').click(() => {
        $('#burger-menu').css('display', 'block');
    });

    $('#menu-cancel-close, #burger-menu').click((e) => {
        if (e.target.id === 'menu-cancel-close' || e.target.id === 'burger-menu') {
            $('#burger-menu').hide();
        }
    });
});
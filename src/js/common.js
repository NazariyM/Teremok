$(document).ready(function() {

    // scroll next section

    (function() {
        var scrollBtn = $('.js-scroll')
        scrollBtn.on('click', function() {
            var scrollDistance = $(this).closest('section').next('section').offset().top;
            $("html, body").animate({
                scrollTop: scrollDistance
            }, 1000);
        });
    })();

    // area slider

    (function() {
        var sldArea = $('.js-area'),
            sldOutput = $('.js-area-output');

        sldArea.slider({
            range: "min",
            value: 42,
            min: 1,
            max: 100,
            slide: function(event, ui) {
                sldOutput.val(ui.value);
            }
        });
        sldOutput.val(sldArea.slider("value"));
    })();

    // calculate popup

    (function() {
        var popup = $('.js-popup'),
            popupOpen = $('.js-popup-open'),
            popupClose = $('.js-popup-close');

        popupOpen.click(function() {
            $(this).next().fadeToggle(200);
        });

        popupClose.click(function() {
            $(this).parent().fadeOut(200);
        });

    })();

    // email send

    (function() {

        $(".js-calculate-form").submit(function() {
            var th = $(this),
                popup = $('.js-popup');
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: th.serialize()
            }).done(function() {
                alert("Спасибо! Мы Вам позвоним!");
                setTimeout(function() {
                    $('.js-popup').fadeOut();
                }, 500);
            });
            return false;
        });
    })();

    // questions accordion

    (function() {
        var allButtons = $('.js-accordion-title'),
            allPanels = $('.js-accordion-inner');

        allButtons.click(function() {
            if (!$(this).parent().hasClass('is-active')) {
                allPanels.slideUp();
                allButtons.parent().removeClass('is-active');
                $(this).parent().addClass('is-active').children().last().slideDown();
                return false;
            } else {
                $(this).parent().removeClass('is-active').children().last().slideUp();
            }
        });
    })();

    // testimonials carousel

    (function() {

        $('.js-carousel').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 900,
            slidesToShow: 3,
            slidesToScroll: 1,
            appendArrows: $(".js-carousel"),
            prevArrow: '<i class="testimonials__arrow testimonials__arrow--left icon-acc_arrow"></i>',
            nextArrow: '<i class="testimonials__arrow testimonials__arrow--right icon-acc_arrow"></i>'
        });

    })();

    // scroll top

    (function() {
        $("a[href='#top']").click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            return false;
        });
    })();

});

$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');

        if ($(window).scrollTop() > 0) {
            $('.top').show();
        }
        else {
            $('.top').hide();
        }
    });

    $(window).on('scroll load', function () {

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

    });
    //smooth scrolling

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({

            scrollTop: $($(this).attr('href')).offset().top,
        },
            500,
            'linear'
        );
    });
});

var text = ["I am a student of Asansol Engineering College", "My branch is Information Technology", "I love coding and web-development"];
var counter = 0;
var inst = setInterval(change, 3000);

function change() {
    $(".p").text(text[counter])
    counter++;
    if (counter >= text.length) {
        counter = 0;
        // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
    }
}
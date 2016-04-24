/**
 * Created by heleensnoeck on 20-04-15.
 */

var main = function() {
    var container = $(".container_menu"),
        toggle = $(".toggle"),
        nav = $(".side-nav");

    $('.button-menu').click(function () {
        container.toggleClass("nav-open");
        // $('.button-menu').toggle(".close");
        //toggle.toggleClass("fa-bars");
        //toggle.toggleClass("fa-times");
    });

    $(document).keypress(function(event) {
        var ch = String.fromCharCode(event.keyCode);
        switch (ch) {
            case 'a':
            case 'A':
                window.location.href = 'http://www.google.com';
                break;

            case 'c':
            case 'C':
                window.location.href = 'http://www.google.com';
                break;
        }
    });

    $(window).on("click", function(e) {
        if (
            container.hasClass("nav-open") &&
            !$(e.target).parents(nav).hasClass("side-nav") &&
            !$(e.target).hasClass("toggle")
        ) {
            container.removeClass("nav-open");
        }
    });
};

$(document).ready(main);


// accordion
$(document).ready(function(){

    $('.accordion h3').click(function(){

        var $this = $(this);

        $('.accordion ul ul').slideUp();


        if (!$this.next().is(':visible'))
        {
            $this.next().slideDown();
        }

    });
});

// button
$(document).ready(function(){

    var $buttonActive; // deze is true omdat het een lege variable is

    $('.button').click(function(){

        var $this = $(this); // zodat je geen this met () moet type

        if($buttonActive) {

            // als button active is
            $this.find('span').css(
                { '-webkit-transform' : 'rotateX(0deg) translateY(0px)' }
            );

            $buttonActive = false;

        } else {

            // als button niet active is
            $this.find('span').css(
                { '-webkit-transform' : 'rotateX(90deg) translateY(-22px)' }
            );

            $buttonActive = true;

        }

    });

});

// chat box
var main = function() {
    $('.btn').click(function() {
        var post =  $('.status-box').val();
        $('<li>').text(post).prependTo('.posts'); // voegt li to eaan posts
        $('.status-box').val(); //hier word de statusbox leeg gemaakt
        $('.counter').text('140'); // je kan nog 140 type
        $('.btn').addClass('disabled'); // sluit hem daarna weer omdat je wil dat mensen minimaal 1 character in type
    });

    $('.status-box').keyup(function() {
        var postLength = $(this).val().length; //checkt lengte bericht
        var charactersLeft = 140 - postLength; //checkt hoeveel karakters er nog zijn.
        $('.counter').text(charactersLeft); // show hoeveel er nog zijn

        if(charactersLeft < 0) {
            $('.btn').addClass('disabled');  //als je geen character meer over hebt
        }
        else if(charactersLeft == 140) { // of als ze gelijk staan aan 140
            $('.btn').addClass('disabled');
        }
        else {
            $('.btn').removeClass('disabled'); //ander remove class
        }
    });
    $('.btn').addClass('disabled'); // sluit hem daarna weer omdat je wil dat mensen minimaal 1 character in type
}

$(document).ready(main);
$('.button-block button').on('click', function(){
    var $this = $(this).parent();
    $this.toggleClass('canceled');
    return false;
});





//$('document').ready(function(){
//    $("ul.slideshow").css("overflow", "hidden");
//
//    $("ul#slides").cycle({
//        fx: 'fade',
//        pause: 1,
//        prev: '#prev',
//        next: '#next'
//});
//
//$(".slideshow").hover(function() {
//        $("ul.nav").fadeIn();
//    },
//    function() {
//        $("ul.nav").fadeOut();
//    });
//});

//
//var main = function() {
//
//    $('.button-menu').click(function () {
//
//        if ($('.menu').hasClass('is-open')) {
//            // sluiten
//            $('.menu').animate({left: "-285px"}, 200);
//
//            $('body').animate({left: "0px"}, 200);
//
//            $('.menu').removeClass('is-open');
//
//        } else {
//
//            $('.menu').addClass('is-open');
//
//            // open
//            $('.menu').animate({
//                left: "0px"
//            }, 200);
//
//            $('body').animate({
//                left: "285px"
//            }, 200);
//        }
//    });
//
//    $(document).keypress(function(event) {
//        var ch = String.fromCharCode(event.keyCode);
//        switch (ch) {
//            case 'a':
//            case 'A':
//                window.location.href = 'http://www.google.com';
//            break;
//
//            case 'c':
//            case 'C':
//                window.location.href = 'http://www.google.com';
//            break;
//        }
//    });
//
//};


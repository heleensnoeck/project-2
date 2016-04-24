/**
 * Created by heleensnoeck on 03-05-15.
 */
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

//button
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

//toggle menu
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
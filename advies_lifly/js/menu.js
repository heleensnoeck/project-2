/**
 * Created by heleensnoeck on 05-05-15.
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
var main = function() {
    var container = $(".container_menu"),
        toggle = $(".toggle"),
        nav = $(".side-nav");

    $('.menu-icon').click(function () {
        $('.menu-icon').toggleClass("on");
        container.toggleClass("nav-open");
    });

    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    // sluit het menu waar je ook klikt op de pagina
    $(window).on("click", function(e) {
        if (
            $('.menu-icon').hasClass("on") &&  //waarom werkt ie niet?
            container.hasClass("nav-open") &&
            !$(e.target).parents(nav).hasClass("side-nav") &&
            !$(e.target).hasClass("toggle")
        ) {
            $('.menu-icon').removeClass("on"); //waarom werkt ie niet?
            container.removeClass("nav-open");
            e.stopPropagation();
        }
    });
};

// als het scherm te klein word gaat deze functie in zijn werking. 
$(document).ready(function(){
var stickyScreenHeight = $(window).height(); // vraagt widow height op
var stickyMenuHeight = $('.menu-icon').outerHeight(); // menu height van top-menu
var stickyContentHeight = parseInt(stickyScreenHeight)-parseInt(stickyMenuHeight);
            
                $('.nav-content').css({
                    height: stickyContentHeight + "px"
                });
            
});

$(document).ready(main);


    // $('ol.nav-content').find('a').click(function(){
    //     var $href = $(this).attr('href');
    //     var $anchor = $('#'+$href).offset();
    //     $('body').animate({ scrollTop: $anchor.top }, 1000);
    //     return false;
    // });
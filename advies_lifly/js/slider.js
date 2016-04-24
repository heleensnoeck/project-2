/**
 * Created by heleensnoeck on 06-05-15.
 */
$(document.ready(function() {
    // hieronder checkt hij de lengte van de slides
    var number = $(".slider-slide-wrap").length,
        width = 680,
        newwidth = width * number;

    // hieronder word er de nieuwe width toegevoegd?
    $('.slide-wrap').css({
        'width': newwidth
    });

    $('.slider-slide-wrap').each(function (i) {
        var thiswidth = 680;
        $(this).css({
            'left': thiswidth * i
        });
    });

    $('.slider-wrap').scroll(function () {
        var scrollLeft = $(this).scrollLeft();
        $('.slider-slide-wrap').each(function (i) {
            var postLeft = $(this).position().left
            var w = $(this).width();

            if (scrollLeft >= postLeft && scrollLeft < postLeft + w) {
                $(this).addClass('show').siblings().removeClass('show');
            }
        });
    });











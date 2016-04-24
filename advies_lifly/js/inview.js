$.fn.isOnScreen = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};

$(document).ready(function(){
    $(window).scroll(function(){
        if ($('#concept').isOnScreen()) {
            $('.glow').attr('class', 'glow line-light');
            $('.touw').attr('class', 'touw line-light');
            $('#lamp').attr('class', 'line-light');
            $('.onderkant').attr('class', 'onderkant line-bottom');
        } else {
            // The element is NOT visible, do something else
        }
    });

});

$('.onderkant').removeClass('onderkant');
/**
 * Created by heleensnoeck on 05-05-15.
 */

$(document).ready(function(e){
    var $buttonActive; // deze is true omdat het een lege variable is

    $('.button').click(function(e){
        e.preventDefault();
        
        var url = $(this).attr("href");
        var playButton = $(this);
        var $this = $(this); // zodat je geen this met () moet type hij hoeft maar 1x door de dom
                
        setTimeout(function() { 
          var win = window.open(url, '_blank');
            win.focus();
      }, 600);

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
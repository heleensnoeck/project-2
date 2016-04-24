/**
 * Created by heleensnoeck on 05-05-15.
 */

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
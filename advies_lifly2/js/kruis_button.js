/**
 * Created by heleensnoeck on 05-05-15.
 */
$(document).ready(function() {
$('.button-block button').on('click', function(){
    var $this = $(this).parent();
    $this.toggleClass('canceled');
    return false;
    });
});
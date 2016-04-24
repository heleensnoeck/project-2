/**
 * Created by heleensnoeck on 05-05-15.
 */
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
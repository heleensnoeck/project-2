
$('.play').on('click', function(e) {
	e.preventDefault(); // stopt de oorspronkelijk actie van de href

	  var url = $(this).parent().attr("href"); // zoek de href
	  var playButton = $(this); // playbutton staat voor this (de klik)

	  playButton.addClass('playing'); // add de class playing 
	  playButton.parent().parent().find('.pause').addClass('show'); // add de class 

	  setTimeout(function() { 
	  	  var win = window.open(url, '_blank');
  			win.focus();
	  }, 600);

	  setTimeout(function() { 
	  	playButton.removeClass('playing');		 
	  	playButton.parent().parent().find('.pause').removeClass('show');
	  }, 600);
});



// $('.pause-btn').on('click', function(e) {
// 	e.preventDefault();
// 	  $(this).parent().find('.play').removeClass('playing');
// 	  $(this).find('.pause').removeClass('show');
// });

	// $('a').on('click',function(e) {
	// 	var link = $(this); 
	// 	console.log(this);
	// });

	// $('.pause-btn').on('click', function() {
	//   $('.pause').removeClass('show');
	//   $('.play').removeClass('playing');
	// });



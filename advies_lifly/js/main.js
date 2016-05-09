
$('.show_snippet').on('click', function(e){
  e.preventDefault();
  var $this = $(this);
  $this.parent().parent().find('.snippet').toggleClass('show');   
  $('html').animate({
        scrollTop: $this.parent().parent().offset().top
    }, 500);
  });
$('.close').on('click', function(e){
  e.preventDefault();
  var $this = $(this);
  $this.parent().parent().toggleClass('show');
});



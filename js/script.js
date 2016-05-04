$(document).ready(function() {
	$('#on').click(function() {
		$('#hello').show('slide', {direction: 'right'}, 500);
	});

	$('#off').click(function() {
		$('#hello').hide('slide', {direction: 'right'}, 500);
	});
    

  $("a").on('click', function(event) {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){
   
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });
    

});
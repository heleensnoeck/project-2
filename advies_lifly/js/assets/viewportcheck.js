jQuery(document).ready(function() {
	jQuery('.post').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated fadeIn', // Class to add to the elements when they are visible
	    offset: 50   
	   });   
});  


jQuery(document).ready(function() {
	jQuery('.post2').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated fadeInUp', // Class to add to the elements when they are visible
	    offset: 50   
	   });   
});    
$(document).ready(function(){

	mixpanel.track("Visite");

	$( "#button-email" ).click(function() {
	  	var email = $("#input-email").val();

	  	mixpanel.identify();

	  	mixpanel.people.set({
		    "$email": email
		});

		mixpanel.track("Email enregistré");

		// Get the snackbar DIV
	    var x = document.getElementById("snackbar")

	    // Add the "show" class to DIV
	    x.className = "show";

	    // After 3 seconds, remove the show class from DIV
	    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 6000);

	});
});
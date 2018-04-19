// Hide form to disallow checkin
$("form").hide();

// Update the message
$("p#message").html("Starting app now...");

// Use HTML5 geolocation to track the user
watchUser = navigator.geolocation.watchPosition(success, error);

// success is run when watchPosition is successful 
function success(position){

	// Test if tracking worked in browser console
	console.log("Tracking was successful!");
	
	// View position object in browser console
	console.log(position);

	




	

} // END success

// When geolocation fails
function error(e) {

  $("p#message").html("Geolocation failed. Please refresh (" + e.message + ")");

} // END error





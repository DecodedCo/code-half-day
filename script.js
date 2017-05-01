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

	// Capture user location coordinates in variables
	var userLat = position.coords.latitude;
	var userLon = position.coords.longitude;

	// Where is the target location?
	var targetLat = 0;
	var targetLon = 0;

	// Calculate the distance away from the target

	var distance = calculateDistance(userLat, userLon, targetLat, targetLon, "M");

	// Define the radius for application action
	var radius = 0; // in miles

} // END success

// When geolocation fails
function error(e) {

  $("p#message").html("Geolocation failed. Please refresh (" + e.message + ")");

} // END error

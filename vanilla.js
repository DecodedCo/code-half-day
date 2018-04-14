// Hide form to disallow checkin
var el = document.getElementById('form');
el.style.visibility = 'hidden';

// Update the message
var message = document.getElementById('message');
message.innerHTML = "Starting app now...";

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
	
	if(){
	   // Show the form
	   // Add your own message
   	} else {
	   // Hide the form
	   // Add your own message
	}   

} // END success

// When geolocation fails
function error(e) {

  message.innerHTML = "Geolocation failed. Please refresh";

} // END error

// From http://www.geodatasource.com/developers/javascript

function calculateDistance(lat1, lon1, lat2, lon2, unit) {

  var radlat1 = Math.PI * lat1/180;
  var radlat2 = Math.PI * lat2/180;
  var radlon1 = Math.PI * lon1/180;
  var radlon2 = Math.PI * lon2/180;
  var theta = lon1-lon2;
  var radtheta = Math.PI * theta/180;
  var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  dist = Math.acos(dist);
  dist = dist * 180/Math.PI;
  dist = dist * 60 * 1.1515;
  if (unit=="K") { dist = dist * 1.609344; }
  if (unit=="N") { dist = dist * 0.8684; }
  return dist;

} // END calculateDistance

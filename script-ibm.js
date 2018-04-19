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

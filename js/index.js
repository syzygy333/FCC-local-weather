// b624c5bdec968d79b2bf1a9e507ab9c8

// Goog: AIzaSyA262NUgtdnuhCsrzK1WxN7I2PrKEEaxT8

// $(document).ready(function() {
//   function getLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(function() {
//         $("#location").innerHTML("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
//       });
//     } else {
//       $("#location").innerHTML("Geolocation is not supported by this browser.");
//     }
//   }
//   getLocation();
// });

function geoFindMe() {
  var output = document.getElementById("location");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;

  };

  function showError(error) {
    output.innerHTML = "Unable to retrieve your location";
    console.log(error.message);
  };

  output.innerHTML = "Locating…";

  navigator.geolocation.getCurrentPosition(success, showError);
}
geoFindMe();

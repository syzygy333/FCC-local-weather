// b624c5bdec968d79b2bf1a9e507ab9c8

// works in Safari on laptop, not in Chrome on laptop or in Codepen

$(document).ready(function() {
  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    $.ajax({
      url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitude + "," + longitude + "&sensor=true",
      success: function(data) {
        var city = data.results[0].address_components[3].long_name;
        var state = data.results[0].address_components[5].short_name;
        var country = data.results[0].address_components[6].short_name;
        $("#location").html(city + ", " + state + ", " + country);
      }
    });
  }
  function showError(error) {
    $("#location").html(error.message);
  }
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, showError);
  } else {
    $("#location").html("Geolocation is not supported by this browser.");
  }
});

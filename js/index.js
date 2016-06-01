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
        var zip = data.results[0].address_components[7].long_name;
        $("#location").html(city + ", " + state + ", " + country);
      }
    });
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=b624c5bdec968d79b2bf1a9e507ab9c8",
      success: function(data) {
        fahrenheit = Math.round((data.main.temp * (9/5)) - 459.67);
        celsius = Math.round(data.main.temp - 273.15);
        forecast = data.weather[0].main;
        $("#temp").html(fahrenheit + ' &deg;<button class="text-button">F</a>');
        $("#forecast").html(forecast);
      }
    });
    // use above for GET to weather API, plug temp into #temp element,
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
// switches F to C
if ($("#temp:contains('F')")) {
  $("#temp").click(fahToCel);
  function fahToCel() {
    $("#temp").html(celsius + ' &deg;<button class="text-button">C</a>');
  }
}
// won't switch back
if ($("#temp:contains('C')")) {
  $("#temp").click(celToFah);
  function celToFah() {
    $("#temp").html(fahrenheit + ' &deg;<button class="text-button">C</a>');
  }
}
// use case statement and forecast keywords to choose #forecast element

document.getElementById("geoBtn").addEventListener("click", function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById("output").textContent = "Geolocation not supported.";
  }
});

function showPosition(position) {
  document.getElementById("output").textContent = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
}

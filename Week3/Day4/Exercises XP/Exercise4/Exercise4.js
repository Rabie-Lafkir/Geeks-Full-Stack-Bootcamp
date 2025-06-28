const form = document.getElementById("MyForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const radius = parseFloat(document.getElementById("radius").value);
  const volumeInput = document.getElementById("volume");

  if (isNaN(radius)) {
    alert("Please enter a valid number");
    return;
  }

  const volume = (4/3) * Math.PI * Math.pow(radius, 3);
  volumeInput.value = volume.toFixed(2);
});

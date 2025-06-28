function calculateTip() {
  const billAmount = document.getElementById("billAmt").value;
  const serviceQuality = document.getElementById("serviceQual").value;
  let numberOfPeople = document.getElementById("numOfPeople").value;

  if (billAmount === "" || serviceQuality == 0) {
    alert("Please enter valid values");
    return;
  }

  if (numberOfPeople === "" || numberOfPeople < 1) {
    numberOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "inline";
  }

  let total = (billAmount * serviceQuality) / numberOfPeople;
  total = total.toFixed(2);

  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").textContent = total;
}

document.getElementById("calculate").onclick = calculateTip;

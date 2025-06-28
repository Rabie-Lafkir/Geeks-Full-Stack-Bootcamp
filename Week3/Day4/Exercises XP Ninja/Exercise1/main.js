/**
 * calculateTip
 * @returns 
 */
function calculateTip() {
  const billAmt = document.getElementById("billamt").value;
  const serviceQual = document.getElementById("serviceQual").value;
  let peopleAmt = document.getElementById("peopleamt").value;

  if (billAmt === "" || serviceQual == 0) {
    alert("Please enter bill amount and select service quality");
    return;
  }

  if (peopleAmt === "" || peopleAmt <= 1) {
    peopleAmt = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "inline";
  }

  let total = (billAmt * serviceQual) / peopleAmt;
  total = total.toFixed(2);

  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").textContent = total;
}

document.getElementById("calculate").addEventListener("click", calculateTip);

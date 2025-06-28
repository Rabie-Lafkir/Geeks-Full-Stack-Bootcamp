const form = document.querySelector("form");
console.log(form);

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
console.log(fname, lname);

const byName = document.getElementsByName("firstname");
console.log(byName);

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const firstVal = fname.value.trim();
  const lastVal = lname.value.trim();

  if (!firstVal || !lastVal) {
    alert("Please fill in both names");
    return;
  }

  const ul = document.querySelector(".usersAnswer");
  ul.innerHTML = "";  // reset input
  const li1 = document.createElement("li");
  li1.textContent = firstVal;
  const li2 = document.createElement("li");
  li2.textContent = lastVal;
  ul.appendChild(li1);
  ul.appendChild(li2);
});

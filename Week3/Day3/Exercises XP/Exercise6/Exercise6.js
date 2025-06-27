const navBar = document.getElementById("navBar");
navBar.setAttribute("id", "socialNetworkNavigation");

// create Logout li
const newLi = document.createElement("li");
const textNode = document.createTextNode("Logout");
newLi.appendChild(textNode);

// append
navBar.querySelector("ul").appendChild(newLi);

// first and last
const firstLi = navBar.querySelector("ul").firstElementChild;
const lastLi = navBar.querySelector("ul").lastElementChild;

console.log(firstLi.textContent);
console.log(lastLi.textContent);

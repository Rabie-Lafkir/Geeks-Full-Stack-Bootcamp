setTimeout(() => {
  alert("Hello World");
}, 2000);

setTimeout(() => {
  const container = document.getElementById("container");
  const p = document.createElement("p");
  p.textContent = "Hello World";
  container.appendChild(p);
}, 2000);

let count = 0;
const container = document.getElementById("container");
const button = document.getElementById("clear");

const interval = setInterval(() => {
  if (count >= 5) {
    clearInterval(interval);
    return;
  }
  const p = document.createElement("p");
  p.textContent = "Hello World";
  container.appendChild(p);
  count++;
}, 2000);

button.addEventListener("click", () => {
  clearInterval(interval);
});

const button = document.getElementById("removeBtn");
const select = document.getElementById("colorSelect");

button.addEventListener("click", () => {
  if (select.options.length > 0) {
    select.remove(select.selectedIndex);
  }
});

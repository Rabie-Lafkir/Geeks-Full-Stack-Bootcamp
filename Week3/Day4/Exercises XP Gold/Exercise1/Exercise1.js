const select = document.getElementById("genres");
const display = document.getElementById("selectedValue");

display.textContent = `Selected: ${select.value}`;

const newOption = document.createElement("option");
newOption.value = "classic";
newOption.text = "Classic";
newOption.selected = true;
select.appendChild(newOption);

display.textContent = `Selected: ${select.value}`;

select.addEventListener("change", () => {
  display.textContent = `Selected: ${select.value}`;
});

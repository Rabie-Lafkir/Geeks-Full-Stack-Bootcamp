let shoppingList = [];

const root = document.getElementById("root");

const form = document.createElement("form");
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter item";

const addButton = document.createElement("button");
addButton.type = "button";
addButton.textContent = "Add Item";

const clearButton = document.createElement("button");
clearButton.type = "button";
clearButton.textContent = "Clear All";

const ul = document.createElement("ul");

form.append(input, addButton, clearButton);
root.append(form, ul);

addButton.addEventListener("click", addItem);
clearButton.addEventListener("click", clearAll);

/**
 * addItem
 */
function addItem() {
  const value = input.value.trim();
  if (value) {
    shoppingList.push(value);
    const li = document.createElement("li");
    li.textContent = value;
    ul.appendChild(li);
    input.value = "";
  }
}

/**
 * clearAll
 */
function clearAll() {
  shoppingList = [];
  ul.innerHTML = "";
}

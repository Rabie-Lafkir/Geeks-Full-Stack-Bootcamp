let allBoldItems;

/**
 * getBoldItems
 */
function getBoldItems() {
  allBoldItems = document.querySelectorAll("#sentence strong");
}

/**
 * highlight
 */
function highlight() {
  allBoldItems.forEach(item => {
    item.style.color = "blue";
  });
}

/**
 * returnItemsToDefault
 */
function returnItemsToDefault() {
  allBoldItems.forEach(item => {
    item.style.color = "black";
  });
}

getBoldItems();

const paragraph = document.getElementById("sentence");
paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnItemsToDefault);

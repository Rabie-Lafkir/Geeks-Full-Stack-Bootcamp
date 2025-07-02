const menu = [
  { type: "starter", name: "Houmous with Pita" },
  { type: "starter", name: "Vegetable Soup with Houmous peas" },
  { type: "dessert", name: "Chocolate Cake" }
];

// 1. Is there a dessert?
console.log(menu.some(item => item.type === 'dessert') ? "Dessert? ✅" : "Dessert? ❌");

// 2. Are they all starters?
console.log(menu.every(item => item.type === 'starter') ? "All starters" : "Not all starters");

// 3. Ensure at least one main course
if (!menu.some(item => item.type === 'main')) {
  menu.push({ type: "main", name: "Grilled Salmon" });
}
console.log(menu);

// 4. Mark vegetarian
const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes"];
menu.forEach(item => {
  const nameLower = item.name.toLowerCase();
  item.vegetarian = vegetarian.some(v => nameLower.includes(v));
});
console.log(menu);

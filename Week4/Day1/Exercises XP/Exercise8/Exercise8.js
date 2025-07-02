function makeJuice(size) {
  const ingredients = [];

  function addIngredients(ing1, ing2, ing3) {
    ingredients.push(ing1, ing2, ing3);
  }

  function displayJuice() {
    const p = document.createElement('p');
    p.textContent = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
    document.body.appendChild(p);
  }

  // The client wants 6 ingredients (add twice)
  addIngredients('apple', 'banana', 'orange');
  addIngredients('pineapple', 'mango', 'kiwi');

  // Show the final order
  displayJuice();
}

// Run
makeJuice('large');

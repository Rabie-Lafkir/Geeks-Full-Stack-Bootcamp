const products = require('./products');

function findProduct(name) {
  return products.find(p => p.name.toLowerCase() === name.toLowerCase());
}

['Laptop', 'Notebook', 'Coffee Mug', 'Smartphone'].forEach(item => {
  const result = findProduct(item);
  if (result) {
    console.log(`Found: ${result.name} - $${result.price} (${result.category})`);
  } else {
    console.log(`Product "${item}" not found.`);
  }
});

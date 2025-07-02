let client = "Rabie";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

// ---------- 1. displayGroceries ----------
const displayGroceries = () => {
  groceries.fruits.forEach((fruit) => console.log(fruit));
};

// Test
displayGroceries();           // pear  apple  banana

// ---------- 2. cloneGroceries ----------
const cloneGroceries = () => {
  // -- a) Primitive → copied by value
  const user = client;        // user gets *copy* of the string "John"
  client = "Hasna";           // change the original
  console.log("client:", client);
  console.log("user:", user);

  // -- b) Object → copied by reference
  const shopping = groceries; // shopping points to *same* object
  shopping.totalPrice = "35$";
  console.log(groceries.totalPrice); // 35$  ← change is visible

  // -- c) Nested object also shared
  shopping.other.paid = false;
  console.log(groceries.other.paid); // false ← change is visible
};

// Invoke the function as required
cloneGroceries();

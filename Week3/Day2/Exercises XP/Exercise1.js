const people = ["Greg", "Mary", "Devon", "James"];

// Remove “Greg”
people.shift();

// Replace “James” with “Jason”
people[people.indexOf("James")] = "Jason";

// Add your name to the end
people.push("Khalid"); // change "Khalid" to your name

// Log Mary’s index
console.log("Mary's index is:", people.indexOf("Mary"));

// Copy of the array excluding Mary and your name
const copyPeople = people.slice(1, people.length - 1); // excluding Mary and Khalid
console.log("Copy of people:", copyPeople);

// Index of Foo
console.log("Index of Foo:", people.indexOf("Foo")); // -1 because Foo is not in the array

// Last element
const last = people[people.length - 1];
console.log("Last element is:", last);

// Part II - Loops
console.log("Iterate through people:");
for (let person of people) {
  console.log(person);
}

console.log("Iterate through people until Devon:");
for (let person of people) {
  console.log(person);
  if (person === "Devon") break;
}

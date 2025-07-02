const data = [
  { name: 'Butters', age: 3, type: 'dog' },
  { name: 'Cuty', age: 5, type: 'rabbit' },
  { name: 'Lizzy', age: 6, type: 'dog' },
  { name: 'Red', age: 1, type: 'cat' },
  { name: 'Joey', age: 3, type: 'dog' },
  { name: 'Rex', age: 10, type: 'dog' },
];

// Loop version
let sumLoop = 0;
for (const { age, type } of data) {
  if (type === 'dog') sumLoop += age * 7;
}
console.log(sumLoop); // 161

// Reduce version
const sumReduce = data
  .filter(animal => animal.type === 'dog')
  .reduce((total, { age }) => total + age * 7, 0);
console.log(sumReduce); // 161

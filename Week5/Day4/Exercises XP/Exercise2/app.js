import { people } from './data.js';

function averageAge(arr) {
  const sum = arr.reduce((acc, p) => acc + p.age, 0);
  return (sum / arr.length).toFixed(1);
}

console.log('Average age:', averageAge(people));

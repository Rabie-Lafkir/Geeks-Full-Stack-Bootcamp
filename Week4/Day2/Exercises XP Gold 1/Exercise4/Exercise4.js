// Flattening with depth 2
const array = [[1],[2],[3],[[[4]]],[[[5]]]];
const flattened = array.flat(2);
console.log(flattened); // [1,2,3,[4],[5]]

// One‑liner (bonus)
console.log([[1],[2],[3],[[[4]]],[[[5]]]].flat(2));

// Greeting transformations
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const joined = greeting.map(words => words.join(" "));
console.log(joined); // ["Hello young grasshopper!","you are","learning fast!"]

const greetingStr = joined.join(" ");
console.log(greetingStr); // 'Hello young grasshopper! you are learning fast!'

// Trapped number
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]];
const freed = trapped.flat(Infinity);
console.log(freed); // [3]

const result = [1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return;
});
console.log(result); // [2, 4, 6]

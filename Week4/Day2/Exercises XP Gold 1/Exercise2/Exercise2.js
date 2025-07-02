const output = [[0, 1], [2, 3]].reduce(
  (acc, cur) => acc.concat(cur),
  [1, 2]
);
console.log(output); // [1, 2, 0, 1, 2, 3]

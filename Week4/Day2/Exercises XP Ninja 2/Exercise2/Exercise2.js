const stringChop = (str, size=1) =>
  Array.from({length: Math.ceil(str.length / size)}, (_, i) =>
    str.slice(i * size, i * size + size)
  );

console.log(stringChop('developers', 2)); // ["de","ve","lo","pe","rs"]

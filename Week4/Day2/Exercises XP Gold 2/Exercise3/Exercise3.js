const cleanArray = arr => arr.filter(Boolean);
const sample = [NaN, 0, 15, false, -22, '', undefined, 47, null];
console.log(cleanArray(sample)); // [15, -22, 47]

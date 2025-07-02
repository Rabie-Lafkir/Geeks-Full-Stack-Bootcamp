/*
Prediction:
addToTen(3) returns 13 because addTo(10) creates a closure
where x = 10 is remembered.
*/

const addTo = x => y => x + y;
const addToTen = addTo(10);
console.log(addToTen(3)); // 13

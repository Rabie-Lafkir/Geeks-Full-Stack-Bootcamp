/*
Prediction:
curriedSum(30)(1) returns 31.
*/

const curriedSum = a => b => a + b;
console.log(curriedSum(30)(1)); // 31

const reverseArray = arr => {
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

console.log(reverseArray([1,2,3,4,5]));        // [5,4,3,2,1]
console.log(reverseArray([1,2]));              // [2,1]
console.log(reverseArray([]));                 // []
console.log(reverseArray([1,2,3,4,5,6,7,8,9,10])); // [10..1]

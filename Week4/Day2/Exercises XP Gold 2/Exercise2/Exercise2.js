const removeDuplicates = arr => [...new Set(arr)];
console.log(removeDuplicates([1, 1, 2, 3, 3, 4])); // [1,2,3,4]

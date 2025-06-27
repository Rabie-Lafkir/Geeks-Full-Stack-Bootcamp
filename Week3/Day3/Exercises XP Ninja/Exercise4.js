/**
 * biggestNumberInArray
 * @param {*} arrayNumber 
 * @returns 
 */
function biggestNumberInArray(arrayNumber) {
    let max = 0;
    for (let item of arrayNumber) {
        if (typeof item === "number" && item > max) {
            max = item;
        }
    }
    return max;
}

console.log(biggestNumberInArray([-1,0,3,100,99,2,99])); 
console.log(biggestNumberInArray(['a', 3, 4, 2]));
console.log(biggestNumberInArray([]));

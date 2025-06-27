/**
 * uniqueElements
 * @param {*} array 
 * @returns 
 */
function uniqueElements(array) {
    return [...new Set(array)];
}

console.log(uniqueElements([1,2,3,3,3,4,5]));

/**
 * isOmnipresent
 * @param {*} arr 
 * @param {*} val 
 * @returns 
 */
function isOmnipresent(arr, val) {
    for (let subArr of arr) {
        if (!subArr.includes(val)) {
            return false;
        }
    }
    return true;
}
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)); // true
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)); // false

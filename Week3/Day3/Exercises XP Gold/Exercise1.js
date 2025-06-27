/**
 * isBlank
 * @param {*} str 
 * @returns 
 */
function isBlank(str) {
    return str.trim() === "";
}

console.log(isBlank(''));       // true
console.log(isBlank('abc'));    // false

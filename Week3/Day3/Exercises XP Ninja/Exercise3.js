/**
 * isPalindrome
 * @param {*} str 
 * @returns 
 */
function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return reversed === str;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false

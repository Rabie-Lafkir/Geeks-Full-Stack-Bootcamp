/**
 * changeEnough
 * @param {*} itemPrice 
 * @param {*} amountOfChange 
 * @returns 
 */
function changeEnough(itemPrice, amountOfChange) {
    const [quarters, dimes, nickels, pennies] = amountOfChange;
    let totalChange = (quarters * 0.25) + (dimes * 0.10) + (nickels * 0.05) + (pennies * 0.01);
    return totalChange >= itemPrice;
}

console.log(changeEnough(4.25, [25, 20, 5, 0])); // true
console.log(changeEnough(14.11, [2,100,0,0])); // false
console.log(changeEnough(0.75, [0,0,20,5])); // true

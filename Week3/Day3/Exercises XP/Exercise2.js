const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

const shoppingList = ["banana", "orange", "apple"];

/**
 * myBill
 * @returns total
 */
function myBill() {
    let total = 0;
    for (let item of shoppingList) {
        if (item in stock && stock[item] > 0) {
            total += prices[item];
            stock[item]--;
        }
    }
    return total;
}

console.log("The total price of your marchandise is "+myBill());
// Displaying remaining items and its quantity
console.log("Items remaining in the stock are:");

for (let item in stock) {
    console.log(`- ${item}: ${stock[item]} left`);
}

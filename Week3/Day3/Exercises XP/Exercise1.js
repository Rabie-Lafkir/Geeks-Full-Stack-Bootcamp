/**
 * displayNumbersDivisible
 */
function displayNumbersDivisible() {
    let numbers = [];
    let sum = 0;

    for (let i = 0; i <= 500; i++) {
        if (i % 23 === 0) {
            numbers.push(i);
            sum += i;
        }
    }

    console.log("Outcome :", numbers.join(" "));
    console.log("Sum :", sum);
}

displayNumbersDivisible();


/**
 * Sophisticated displayNumbersDivisible
 * @param {*} divisor 
 */
function displayNumbersDivisible(divisor) {
    let numbers = [];
    let sum = 0;

    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            numbers.push(i);
            sum += i;
        }
    }

    console.log("Outcome :", numbers.join(" "));
    console.log("Sum :", sum);
}

displayNumbersDivisible(3)
displayNumbersDivisible(45); 

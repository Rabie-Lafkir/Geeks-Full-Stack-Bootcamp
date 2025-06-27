let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(`Random number: ${randomNum}`);

console.log("Even numbers from 0 to random number:");
for (let i = 0; i <= randomNum; i++) {
    if (i % 2 === 0) console.log(i);
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter several words separated by commas: ", function(answer) {
    const words = answer.split(",").map(word => word.trim());
    const maxLength = Math.max(...words.map(word => word.length));
    const border = "*".repeat(maxLength + 4);

    console.log(border);
    for (let word of words) {
        console.log(`* ${word.padEnd(maxLength)} *`);
    }
    console.log(border);

    rl.close();
});

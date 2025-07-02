const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((color, i) => console.log(`${i + 1}# choice is ${color}.`));

console.log(colors.includes("Violet") ? "Yeah" : "No...");

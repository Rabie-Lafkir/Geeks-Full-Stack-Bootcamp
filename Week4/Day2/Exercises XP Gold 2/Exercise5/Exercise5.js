const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

const startPos = startLine.indexOf('||') + 2; // position after spaces

turtle = turtle.padStart(startPos + turtle.length);
rabbit = rabbit.padStart(startPos + rabbit.length);

console.log(startLine);
console.log(turtle);
console.log(rabbit);

// trim() removes surrounding spaces (none here) then padEnd adds '=' until length 9
turtle = '🐢';
turtle = turtle.trim().padEnd(9, '=');
console.log(turtle); // 🐢========

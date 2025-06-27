let number;

do {
  number = prompt("Enter a number greater than or equal to 10:");
  number = Number(number);
} while (number < 10);

console.log("Final number:", number);

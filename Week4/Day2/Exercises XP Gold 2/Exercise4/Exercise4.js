const repeat = (str, n = 1) => Array(n).fill(str).join('');
console.log(repeat('Ha!', 3)); // Ha!Ha!Ha!
console.log(repeat('Hi!'));    // Hi!

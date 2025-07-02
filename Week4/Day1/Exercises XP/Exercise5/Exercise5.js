// Function declaration
function kgToGramsDecl(kg) {
  return kg * 1000;
}
console.log(kgToGramsDecl(2)); // 2000

// Function expression
const kgToGramsExpr = function (kg) {
  return kg * 1000;
};
console.log(kgToGramsExpr(3)); // 3000

// Difference: A function declaration is hoisted and can be called before it appears in
// the code, whereas a function expression is not hoisted.

// Arrow function (one‑liner)
const kgToGramsArrow = kg => kg * 1000;
console.log(kgToGramsArrow(4)); // 4000

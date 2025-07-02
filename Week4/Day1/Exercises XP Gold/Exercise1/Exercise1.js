/*
Prediction BEFORE running:
flat(4)  -> "____"
mountain(4) -> "/''''\\"
flat(4)  -> "____"

So landscape() should return:
____/''''\\____

Explanation:
- `flat` appends one underscore per iteration.
- `mountain` appends a forward‑slash, four apostrophes, and a backslash.
- Strings are concatenated in order; the backslash must be escaped when printed.
*/

const landscape = () => {
  let result = "";

  // nested arrow functions
  const flat = x => {
    for (let count = 0; count < x; count++) {
      result += "_";
    }
  };

  const mountain = x => {
    result += "/";
    for (let counter = 0; counter < x; counter++) {
      result += "'";
    }
    result += "\\";
  };

  flat(4);
  mountain(4);
  flat(4);

  return result;
};

console.log(landscape()); // ____/''''\____

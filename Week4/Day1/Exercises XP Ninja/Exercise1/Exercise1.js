/**
 * Usage examples:
 *   mergeWords('Hello')();                        // "Hello"
 *   mergeWords('There')('is')('no')('spoon.')(); // "There is no spoon."
 *   mergeWords('One')('more')('test')();         // "One more test"
 *
 * The trick: each call returns another function that remembers the
 * accumulated sentence via closure.  When invoked with no argument,
 * the current sentence is returned.
 */

const mergeWords = first => {
  const curried = next =>
    next === undefined
      ? first.trim()           // stop condition: no further word supplied
      : mergeWords(`${first} ${next}`); // accumulate and recurse
  return curried;
};

// --- Demo (uncomment to test) ---
console.log(mergeWords('Hello')());                         // Hello
console.log(mergeWords('There')('is')('no')('spoon.')());   // There is no spoon.
console.log(mergeWords('One')('more')('test')());           // One more test

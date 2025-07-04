// Promise.all waits until every item in the iterable settles.
// • Non‑promise values (like the number 42) are first wrapped in Promise.resolve(…).
// • If *all* promises resolve, it resolves once with an array of **their resolved values
//   in the original order**.
// • If **any** promise rejects, it rejects immediately with that error.
//
// Here:
//   promise1 → immediately resolves to 3
//   promise2 → plain value 42 (treated as a resolved promise)
//   promise3 → resolves after 3 s to "foo"
// Therefore Promise.all resolves after ≈3 s with [3, 42, "foo"].

const promise1 = Promise.resolve(3);
const promise2 = 42;                                     // auto‑wrapped
const promise3 = new Promise(resolve => setTimeout(resolve, 3000, 'foo'));

Promise.all([promise1, promise2, promise3])
  .then(values => console.log(values))                   // → [ 3, 42, 'foo' ]
  .catch(console.error);

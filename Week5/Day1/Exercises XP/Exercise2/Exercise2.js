const delayedSuccess = new Promise((resolve) => {
  setTimeout(() => resolve('success'), 4000);
});

// Testing examples
console.time('Exercise2');
delayedSuccess
  .then(res => {
    console.timeEnd('Exercise2');   // ≈ 4 000 ms
    console.log('Resolved with:', res);  // "success"
  });

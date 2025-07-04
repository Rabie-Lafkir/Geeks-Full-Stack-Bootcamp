const resolvedThree = Promise.resolve(3);
const rejectedBoo = Promise.reject('Boo!');


resolvedThree.then(v => console.log('Exercise3 resolved:', v));

rejectedBoo
  .then(() => {})            
  .catch(err => console.log('Exercise3 rejected:', err));
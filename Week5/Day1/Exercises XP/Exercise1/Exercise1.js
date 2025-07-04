function compareToTen(num) {
  return new Promise((resolve, reject) => {
    num <= 10 ? resolve(num) : reject(num);
  });
}


// Testing examples
compareToTen(15)
  .then(res => console.log('Resolved with:', res))
  .catch(err => console.log('Rejected with:', err));

compareToTen(8)
  .then(res => console.log('Resolved with:', res))
  .catch(err => console.log('Rejected with:', err));

function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(words)) {
      return reject('Argument must be an array');
    }
    const areAllStrings = words.every(w => typeof w === 'string');
    if (!areAllStrings) {
      return reject('Array must contain only strings');
    }
    const uppercased = words.map(w => w.toUpperCase());
    resolve(uppercased);
  });
}

function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(words)) {
      return reject('Argument must be an array');
    }
    if (words.length <= 4) {
      return reject('Array length must be greater than 4');
    }
    const sorted = [...words].sort();
    resolve(sorted);
  });
}

// Testing example
makeAllCaps([1, 'pear', 'banana'])
  .then(arr => sortWords(arr))
  .then(res => console.log(res))
  .catch(console.log);

makeAllCaps(['apple', 'pear', 'banana'])
  .then(arr => sortWords(arr))
  .then(res => console.log(res))
  .catch(console.log);

makeAllCaps(['apple', 'pear', 'banana', 'melon', 'kiwi'])
  .then(arr => sortWords(arr))
  .then(console.log) 
  .catch(console.log);

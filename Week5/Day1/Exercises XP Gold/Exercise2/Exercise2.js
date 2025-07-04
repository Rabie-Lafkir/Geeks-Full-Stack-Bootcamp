// Expected console output: [ 2, 4, 6 ]
// Each element is doubled asynchronously, Promise.all gathers the resolved values
// in order.

function timesTwoAsync(x) {
  return new Promise(resolve => resolve(x * 2));
}

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);

Promise.all(promiseArr)
  .then(result => {
    console.log(result); // [2, 4, 6]
  });

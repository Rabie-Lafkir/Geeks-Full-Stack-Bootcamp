const arrayNum = [1, 2, 4, 5, 8, 9];
const doubled = arrayNum.map((num, i) => {
  console.log(num, i); // i is the current index (0,1,2...)
  return num * 2;
});
console.log(doubled); // [2,4,8,10,16,18]

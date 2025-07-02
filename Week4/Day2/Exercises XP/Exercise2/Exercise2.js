const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, i) => {
  const index = i + 1;
  const suffix = ordinal[index] || ordinal[0]; // 1->st, 2->nd, 3->rd else th
  console.log(`${index}${suffix} choice is ${color}.`);
});

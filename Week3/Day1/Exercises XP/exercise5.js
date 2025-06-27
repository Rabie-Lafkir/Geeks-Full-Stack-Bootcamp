const family = {
  father: "John",
  mother: "Jane",
  son: "Mike",
  daughter: "Emily"
};

console.log("Family keys:");
for (let key in family) {
  console.log(key);
}

console.log("Family values:");
for (let key in family) {
  console.log(family[key]);
}

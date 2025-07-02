const letters = ['x', 'y', 'z', 'z'];

// For‑loop version
const counts = {};
for (const l of letters) {
  counts[l] = (counts[l] || 0) + 1;
}
console.log(counts); // { x: 1, y: 1, z: 2 }

// Reduce version
const counts2 = letters.reduce((acc, l) => {
  acc[l] = (acc[l] || 0) + 1;
  return acc;
}, {});
console.log(counts2); // { x: 1, y: 1, z: 2 }

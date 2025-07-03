function isAnagram(str1, str2) {
  const clean1 = str1.replace(/\s+/g, '').toLowerCase();
  const clean2 = str2.replace(/\s+/g, '').toLowerCase();

  const sorted1 = [...clean1].sort().join('');
  const sorted2 = [...clean2].sort().join('');

  return sorted1 === sorted2;
}

// Example tests
console.log(isAnagram("Astronomer", "Moon starer"));       // true
console.log(isAnagram("School master", "The classroom"));  // true
console.log(isAnagram("The Morse Code", "Here come dots"));// true
console.log(isAnagram("hello", "world"));                  // false

// Equality tests
console.log([2] === [2]); // false (different array references)
console.log({} === {});   // false (different object references)

// Shared reference demo
const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
console.log(object2.number); // 4 (same reference)
console.log(object3.number); // 4 (same reference)
console.log(object4.number); // 5 (independent object)

// Classes: Animal / Mammal
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mammal extends Animal {
  sound(noise) {
    return `${noise} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

const farmerCow = new Mammal('Lily', 'cow', 'brown and white');
console.log(farmerCow.sound('Moooo'));
// → Moooo I'm a cow, named Lily and I'm brown and white

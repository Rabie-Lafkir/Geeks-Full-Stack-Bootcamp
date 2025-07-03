class Dog {
  constructor(name) {
    this.name = name;
  }
}

// Only option 2 is correct: we must call super() before using 'this'.
class Labrador extends Dog {
  constructor(name, size) {
    super(name);   // ✅ call parent constructor
    this.size = size;
  }
}

const lab = new Labrador('Buddy', 'large');
console.log(lab); // { name: 'Buddy', size: 'large' }

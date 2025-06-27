const person1 = {
  fullName: "Rabie Lafkir",
  mass: 70,
  height: 1.79,
  calcBMI: function() {
    return this.mass / (this.height * this.height);
  }
};

const person2 = {
  fullName: "Khalid Fatihi",
  mass: 67,
  height: 1.82,
  calcBMI: function() {
    return this.mass / (this.height * this.height);
  }
};

function compareBMI(p1, p2) {
  const bmi1 = p1.calcBMI();
  const bmi2 = p2.calcBMI();

  if (bmi1 > bmi2) {
    console.log(`${p1.fullName} has the higher BMI (${bmi1.toFixed(2)})`);
  } else if (bmi2 > bmi1) {
    console.log(`${p2.fullName} has the higher BMI (${bmi2.toFixed(2)})`);
  } else {
    console.log("They have the same BMI");
  }
}

compareBMI(person1, person2);

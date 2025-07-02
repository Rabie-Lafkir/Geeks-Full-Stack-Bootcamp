const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];

const welcomeStudents = users.map(u => `Hello ${u.firstName}`);
console.log(welcomeStudents);

const fullStackResidents = users.filter(u => u.role === 'Full Stack Resident');
console.log(fullStackResidents);

const lastNamesFSR = users
  .filter(u => u.role === 'Full Stack Resident')
  .map(u => u.lastName);
console.log(lastNamesFSR);

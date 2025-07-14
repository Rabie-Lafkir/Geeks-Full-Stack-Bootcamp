
import React from 'react';
import Exercise from './Exercise3';
import UserFavoriteAnimals from './UserFavoriteAnimals';

// Exercise 1 variables
const myelement = <h1>I Love JSX!</h1>;
const sum = 5 + 5;

// Exercise 2 object
const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

function App() {
  return (
    <div>
      {/* ===== Exercise 1 ===== */}
      <p>Hello World!</p>
      {myelement}
      <p>React is {sum} times better with JSX</p>

      {/* ===== Exercise 2 ===== */}
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals} />

      {/* ===== Exercise 3 ===== */}
      <Exercise />
    </div>
  );
}

export default App;

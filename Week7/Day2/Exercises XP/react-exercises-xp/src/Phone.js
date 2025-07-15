import React, { useState } from 'react';

function Phone() {
  const [brand] = useState('Samsung');
  const [model] = useState('Galaxy S20');
  const [color, setColor] = useState('black');
  const [year] = useState(2020);

  const changeColor = () => setColor('blue');

  return (
    <div>
      <h3>Exercise 3 : Phone And Components</h3>
      <h4>My phone is a {brand}</h4>
      <p>It is a {color} {model} from {year}</p>
      <button onClick={changeColor}>Change color</button>
    </div>
  );
}

export default Phone;

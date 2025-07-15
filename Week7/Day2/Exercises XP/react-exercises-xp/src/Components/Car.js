import React, { useState } from 'react';
import Garage from './Garage';

function Car({ carInfo }) {
  const [color] = useState('red');

  return (
    <div>
      <h2>This car is a {carInfo.model}</h2>
      <p>This car is {color}</p>
      <Garage size="small" />
    </div>
  );
}

export default Car;

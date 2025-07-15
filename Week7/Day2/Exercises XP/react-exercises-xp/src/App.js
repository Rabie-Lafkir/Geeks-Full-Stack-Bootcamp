import React from 'react';
import Car from './Components/Car';
import Events from './Events';
import Phone from './Phone';
import Color from './Color';

function App() {
  const carInfo = { name: "Ford", model: "Mustang" };

  return (
    <div className="App" style={{padding: '2rem'}}>
      <Car carInfo={carInfo} />
      <hr/>
      <Events />
      <hr/>
      <Phone />
      <hr/>
      <Color />
    </div>
  );
}

export default App;

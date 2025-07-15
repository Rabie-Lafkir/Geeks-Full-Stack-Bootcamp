import React from 'react';
import Clock from './Components/Clock';
import Form from './Components/Form';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '3rem', fontFamily: 'sans-serif' }}>
      <h1>Exercises XP NINJA</h1>
      <Clock />
      <hr style={{ margin: '3rem 0' }} />
      <Form />
    </div>
  );
}

export default App;

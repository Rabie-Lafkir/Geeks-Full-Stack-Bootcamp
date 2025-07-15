import React, { useState } from 'react';

function Events() {
  const clickMe = () => alert('I was clicked');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      alert(`The Enter key was pressed, your input is: ${e.target.value}`);
    }
  };

  const [isToggleOn, setIsToggleOn] = useState(true);

  const handleToggle = () => setIsToggleOn(prev => !prev);

  return (
    <div>
      <h3>Exercise 2 : Events</h3>
      <button onClick={clickMe}>Click me</button>
      <br/><br/>
      <input type="text" onKeyDown={handleKeyDown} placeholder="Press the ENTER key"/>
      <br/><br/>
      <button onClick={handleToggle}>{isToggleOn ? 'ON' : 'OFF'}</button>
    </div>
  );
}

export default Events;

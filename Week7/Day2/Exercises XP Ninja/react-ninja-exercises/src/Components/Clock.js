import React, { useState, useEffect } from 'react';

function Clock() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <h2>Local Time Live Clock</h2>
      <h3 style={{ fontSize: '2rem', margin: '0.5rem 0' }}>
        {currentDate.toLocaleTimeString()}
      </h3>
    </div>
  );
}

export default Clock;

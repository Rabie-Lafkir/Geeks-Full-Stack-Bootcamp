import React, { useState, useEffect } from 'react';

function Color() {
  const [favoriteColor, setFavoriteColor] = useState('red');

  useEffect(() => {
    alert('useEffect reached');
    setFavoriteColor('yellow');
  }, []);

  return (
    <div>
      <h3>Exercise 4 : useEffect Hook</h3>
      <h4>My Favorite Color is {favoriteColor}</h4>
      <button onClick={() => setFavoriteColor('blue')}>Change color</button>
    </div>
  );
}

export default Color;

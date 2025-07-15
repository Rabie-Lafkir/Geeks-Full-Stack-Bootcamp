import React from 'react';
import BookForm from './Components/BookForm';
import UserInfoForm from './Components/UserInfoForm';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Exercise XP GOLD #2 : React & Forms</h1>
      <BookForm />
      <hr style={{ margin: '3rem 0' }} />
      <UserInfoForm />
    </div>
  );
}

export default App;

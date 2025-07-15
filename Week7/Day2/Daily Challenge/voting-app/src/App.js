import React, { useState } from 'react';

function App() {
  const [languages, setLanguages] = useState([
    { name: 'Php', votes: 0 },
    { name: 'Python', votes: 0 },
    { name: 'JavaScript', votes: 0 },
    { name: 'Java', votes: 0 },
  ]);

  const addVote = (index) => {
    setLanguages(prev =>
      prev.map((lang, i) =>
        i === index ? { ...lang, votes: lang.votes + 1 } : lang
      )
    );
  };

  const rowStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '280px',
    background: '#F8EAC7',
    border: '1px solid #d9d3bd',
    marginBottom: '6px',
    padding: '10px',
  };

  const btnStyle = {
    marginLeft: 'auto',
    padding: '4px 8px',
    background: '#8BC34A',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Vote Your Language!</h1>
      {languages.map((lang, idx) => (
        <div key={lang.name} style={rowStyle}>
          <span style={{ width: '30px', textAlign: 'center' }}>{lang.votes}</span>
          <span style={{ flex: 1 }}>{lang.name}</span>
          <button style={btnStyle} onClick={() => addVote(idx)}>Click Here</button>
        </div>
      ))}
    </div>
  );
}

export default App;

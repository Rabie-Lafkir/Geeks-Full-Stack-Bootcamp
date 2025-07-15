import React from 'react';

function Input({ label, name, type = 'text', value, onChange, error }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <label style={{ display: 'block', textAlign: 'left' }}>
        {label}
        <input
          style={{ width: '100%', padding: 6, marginTop: 4, boxSizing: 'border-box' }}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
      {error && <span style={{ color: 'red', fontSize: '0.8rem' }}>{error}</span>}
    </div>
  );
}

export default Input;

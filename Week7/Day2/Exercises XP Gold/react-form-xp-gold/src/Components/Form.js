import React, { useState } from 'react';

function Form() {
  // Part I & II
  const [username, setUsername] = useState('');
  // Part IV & V
  const [age, setAge] = useState('');
  const [ageError, setAgeError] = useState('');
  // Part VI
  const [textarea, setTextarea] = useState(
    'The content of a textarea goes in the value attribute'
  );
  // Part VII
  const [car, setCar]                   = useState('Volvo');

  /* ---------- handlers ---------- */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (age && isNaN(Number(age))) {
      setAgeError('Your age must be a number');
      return; // stop submission
    }

    alert('You are submitting ' + username);
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'username':
        setUsername(value);
        break;

      case 'age':
        setAge(value);
        setAgeError(
          value && isNaN(Number(value)) ? 'Your age must be a number' : ''
        );
        break;

      case 'textarea':
        setTextarea(value);
        break;

      case 'car':
        setCar(value);
        break;

      default:
        break;
    }
  };

  /* ---------- render ---------- */
  return (
    <div>
      {/* Conditional header */}
      {username && (
        <h2>
          Hello {username}
          {age && !ageError && ` ${age}`} {/* ← plain back-ticks */}
          {car && ` (${car})`}
        </h2>
      )}

      <form onSubmit={handleSubmit}>
        {/* Username */}
        <label>
          Enter your name:
          <br />
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            style={{ width: 200, marginBottom: 10 }}
          />
        </label>
        <br />

        {/* Age */}
        <label>
          Enter your age:
          <br />
          <input
            type="text"
            name="age"
            value={age}
            onChange={handleChange}
            style={{ width: 200, marginBottom: 2 }}
          />
        </label>
        {ageError && (
          <div style={{ color: 'red', fontSize: '0.8rem', marginBottom: 8 }}>
            {ageError}
          </div>
        )}

        {/* Textarea */}
        <label>
          <textarea
            name="textarea"
            value={textarea}
            onChange={handleChange}
            rows="4"
            cols="30"
            style={{ display: 'block', margin: '12px 0' }}
          />
        </label>

        {/* Select */}
        <label>
          Choose your car:
          <select
            name="car"
            value={car}
            onChange={handleChange}
            style={{ marginLeft: 8 }}
          >
            <option value="Volvo">Volvo</option>
            <option value="BMW">BMW</option>
            <option value="Audi">Audi</option>
            <option value="Mercedes">Mercedes</option>
          </select>
        </label>

        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;

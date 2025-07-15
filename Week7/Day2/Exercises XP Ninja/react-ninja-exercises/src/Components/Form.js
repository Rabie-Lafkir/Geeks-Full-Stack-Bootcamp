import React, { useState } from 'react';
import Input from './Input';

const initialState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: ''
};

function Form() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validators = {
    firstName: v => v.trim() !== '' || 'First Name is required',
    lastName:  v => v.trim() !== '' || 'Last Name is required',
    phone:     v => {
      if (v.trim() === '') return 'Phone is required';
      return /^\d{9,15}$/.test(v) || 'Phone must be 9‑15 digits';
    },
    email:     v => {
      if (v.trim() === '') return 'Email is required';
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Email is invalid';
    }
  };

  const validateField = (name, value) => {
    const result = validators[name](value);
    return result === true ? '' : result;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newErrors = {};
    for (const key in values) {
      const err = validateField(key, values[key]);
      if (err) newErrors[key] = err;
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setValues(initialState);
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <section style={{
        width: 320, margin: '0 auto', background: '#f4f4f4',
        borderRadius: 20, padding: 32, textAlign: 'center'
      }}>
        <h2>Success!</h2>
        <p>{values.firstName} {values.lastName}</p>
        <p>{values.phone}</p>
        <p>{values.email}</p>
        <button onClick={handleReset}>Reset</button>
      </section>
    );
  }

  return (
    <section style={{
      maxWidth: 320, margin: '0 auto', background: '#f4f4f4',
      borderRadius: 20, padding: 32
    }}>
      <h2 style={{ textAlign: 'center', marginTop: 0 }}>Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          error={errors.firstName}
        />
        <Input
          label="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          error={errors.lastName}
        />
        <Input
          label="Phone"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          error={errors.phone}
        />
        <Input
          label="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />
        <button type="submit" style={{ width: '100%', padding: 8 }}>Submit</button>
      </form>
    </section>
  );
}

export default Form;

import React, { useState } from 'react';

const initialState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: ''
};

function UserInfoForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm(initialState);
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <section
        style={{
          width: 280,
          padding: 40,
          margin: '0 auto',
          background: '#d8d8d8',
          borderRadius: 20,
          textAlign: 'center'
        }}
      >
        <h3 style={{ margin: '0 0 20px' }}>
          {form.lastName}, {form.firstName}
        </h3>
        <p style={{ marginBottom: 24 }}>
          {form.phone} | {form.email}
        </p>
        <button onClick={handleReset}>Reset</button>
      </section>
    );
  }

  return (
    <section
      style={{
        width: 280,
        padding: 40,
        margin: '0 auto',
        background: '#d8d8d8',
        borderRadius: 20,
        textAlign: 'center'
      }}
    >
      <h2 style={{ marginTop: 0 }}>Welcome!</h2>
      <p>Please provide your information below.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: 6 }}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: 6 }}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: 6 }}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: 10 }}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default UserInfoForm;

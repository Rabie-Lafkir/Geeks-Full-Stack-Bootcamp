import React from 'react';

/**
 * Daily Challenge: Form Container
 *
 * Collects user info (name, age, gender, destination, dietary restrictions)
 * and displays the values live as the user types/selects.
 * On submit, builds a query-string and navigates to that URL (GET-style submission)
 * so you can see the encoded data in the browser address bar.
 */

function EnteredInfo(props) {
  const { firstName, lastName, age, gender, destination,
          nutsFree, lactoseFree, vegan } = props;
  const fullName = [firstName, lastName].filter(Boolean).join(' ').trim();

  const yn = (v) => (v ? 'Yes' : 'No');

  return (
    <div style={{
      marginTop:'1.5rem',
      padding:'1rem',
      background:'#0f766e',
      color:'white',
      borderRadius:'.5rem',
      maxWidth:'28rem'
    }}>
      <h3 style={{marginTop:0}}>Entered information:</h3>
      <p><strong>Your name:</strong> {fullName || '—'}</p>
      <p><strong>Your age:</strong> {age || '—'}</p>
      <p><strong>Your gender:</strong> {gender || '—'}</p>
      <p><strong>Your destination:</strong> {destination || '—'}</p>
      <p><strong>Your dietary restrictions:</strong></p>
      <ul style={{marginTop:'.25rem',paddingLeft:'1.25rem'}}>
        <li><strong>Nuts free:</strong> {yn(nutsFree)}</li>
        <li><strong>Lactose free:</strong> {yn(lactoseFree)}</li>
        <li><strong>Vegan meal:</strong> {yn(vegan)}</li>
      </ul>
    </div>
  );
}

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      destination: '',
      nutsFree: false,
      lactoseFree: false,
      vegan: false,
    };
  }

  handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Build query params; include boolean flags only if true
    const params = new URLSearchParams();
    params.set('firstName', this.state.firstName);
    params.set('lastName', this.state.lastName);
    params.set('age', this.state.age);
    params.set('gender', this.state.gender);
    params.set('destination', this.state.destination);
    if (this.state.nutsFree) params.set('nutsFree', 'on');
    if (this.state.lactoseFree) params.set('lactoseFree', 'on');
    if (this.state.vegan) params.set('vegan', 'on');

    const newUrl = window.location.origin + window.location.pathname + '?' + params.toString();
    // Update the browser address bar without reloading
    window.history.replaceState(null, '', newUrl);

    alert('Form submitted! Check the URL query string for your data.');
  };

  render() {
    const { firstName, lastName, age, gender, destination,
            nutsFree, lactoseFree, vegan } = this.state;

    return (
      <div style={{
        marginTop:'2rem',
        padding:'1rem',
        background:'#d6d3d1',
        borderRadius:'.5rem',
        maxWidth:'28rem'
      }}>
        <h3 style={{
          marginTop:0,
          marginBottom:'1rem',
          background:'#1e1b4b',
          color:'white',
          padding:'.25rem .5rem',
          borderRadius:'.25rem',
          fontSize:'1.1rem'
        }}>Sample form</h3>

        <form onSubmit={this.handleSubmit}>
          <div style={{marginBottom:'.5rem'}}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={this.handleChange}
              style={{width:'100%',padding:'.25rem'}}
            />
          </div>
          <div style={{marginBottom:'.5rem'}}>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={this.handleChange}
              style={{width:'100%',padding:'.25rem'}}
            />
          </div>
          <div style={{marginBottom:'.5rem'}}>
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={age}
              onChange={this.handleChange}
              style={{width:'100%',padding:'.25rem'}}
            />
          </div>

          <div style={{marginBottom:'.5rem'}}>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === 'male'}
                onChange={this.handleChange}
              /> Male
            </label>{' '}
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === 'female'}
                onChange={this.handleChange}
              /> Female
            </label>
          </div>

          <div style={{marginBottom:'.5rem'}}>
            <label htmlFor="destination"><strong>Select your destination</strong></label><br/>
            <select
              id="destination"
              name="destination"
              value={destination}
              onChange={this.handleChange}
              style={{width:'100%',padding:'.25rem'}}
            >
              <option value="">-- Please choose a destination --</option>
              <option value="Thailand">Thailand</option>
              <option value="Germany">Germany</option>
              <option value="Japan">Japan</option>
              <option value="Brazil">Brazil</option>
              <option value="Morocco">Morocco</option>
            </select>
          </div>

          <fieldset style={{
            marginBottom:'.5rem',
            border:'1px solid #1e1b4b',
            padding:'.5rem'
          }}>
            <legend>Dietary restrictions:</legend>
            <label>
              <input
                type="checkbox"
                name="nutsFree"
                checked={nutsFree}
                onChange={this.handleChange}
              /> Nuts free
            </label><br/>
            <label>
              <input
                type="checkbox"
                name="lactoseFree"
                checked={lactoseFree}
                onChange={this.handleChange}
              /> Lactose free
            </label><br/>
            <label>
              <input
                type="checkbox"
                name="vegan"
                checked={vegan}
                onChange={this.handleChange}
              /> Vegan
            </label>
          </fieldset>

          <button type="submit">Submit</button>
        </form>

        <EnteredInfo
          firstName={firstName}
          lastName={lastName}
          age={age}
          gender={gender}
          destination={destination}
          nutsFree={nutsFree}
          lactoseFree={lactoseFree}
          vegan={vegan}
        />
      </div>
    );
  }
}

export default FormContainer;

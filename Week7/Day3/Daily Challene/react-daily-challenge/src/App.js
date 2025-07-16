import React from 'react';
import FormContainer from './components/FormContainer';

/**
 * App renders daily challenge : form container
 */
export default function App() {
  return (
    <div>
    <h2>Daily Challenge: Form Container</h2>
      <p>Live form that echoes your input and encodes the values in the URL query string on submit.</p>
      <FormContainer />
</div>
  );
}


import React, { Component } from 'react';
import './Exercise.css';

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
  textAlign: "center"
};

class Exercise extends Component {
  render() {
    return (
      <div>
        <h1 style={style_header}>This is a Header</h1>

        <p className="para">This is a Paragraph</p>

        <a href="https://react.dev" target="_blank" rel="noreferrer">
          This is a Link
        </a>

        <h3>This is a Form:</h3>
        <form>
          <label>Enter your name:</label><br/>
          <input type="text" />
          <button type="submit">Submit</button>
        </form>

        <h4>Here is an Image:</h4>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
          width="600px"
        />

        <h4>This is a List:</h4>
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;

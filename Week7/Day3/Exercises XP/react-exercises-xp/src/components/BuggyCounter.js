import React from 'react';

/**
 * BuggyCounter deliberately throws an error once the internal counter hits 5.
 * This lets us explore what happens with and without an ErrorBoundary wrapper.
 */
class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = () => {
    this.setState(prev => ({ counter: prev.counter + 1 }));
  };

  render() {
    if (this.state.counter === 5) {
      // Simulate a JS error
      throw new Error('I crashed! Counter reached 5.');
    }
    return (
      <div className="counter">
        <p>{this.state.counter}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default BuggyCounter;

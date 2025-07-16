import React from 'react';

/**
 * Exercise 3: Lifecycle #2
 *
 * Requirements (adapted from the exercise sheet):
 * - Render a Header component that says "Hello World!" and receives a color prop.
 * - Change the color prop to "blue" after mount (to show componentDidUpdate in the parent).
 * - Provide a button that deletes (unmounts) the Header component.
 * - When Header unmounts, alert: "The component header is about to be unmounted."
 */
class Header extends React.Component {
  componentWillUnmount() {
    alert('The component header is about to be unmounted.');
  }
  render() {
    const style = {
      color: this.props.color,
      margin: 0,
      padding: 0,
    };
    return <h3 style={style}>Hello World!</h3>;
  }
}

class Lifecycle2Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHeader: true,
      color: 'red'
    };
  }

  componentDidMount() {
    // Change color after mount to demo update phase
    this.timeoutId = setTimeout(() => {
      this.setState({ color: 'blue' });
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  deleteHeader = () => {
    this.setState({ showHeader: false });
  };

  render() {
    const { showHeader, color } = this.state;
    return (
      <div style={{padding:'1rem',background:'#fff',border:'1px solid #d1d5db',borderRadius:'.5rem'}}>
        {showHeader ? <Header color={color} /> : <p>(Header deleted)</p>}
        <button onClick={this.deleteHeader}>Delete Header</button>
      </div>
    );
  }
}

export default Lifecycle2Demo;

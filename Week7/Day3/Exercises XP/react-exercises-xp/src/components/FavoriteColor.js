import React from 'react';

/**
 * Exercise 2: Lifecycle demo (Favorite Color)
 *
 * Part I: Display "My Favorite Color is red" (initial state).
 * Part II: After the component mounts, change the color to "yellow".
 * Part III: Demonstrate getSnapshotBeforeUpdate + componentDidUpdate by
 * displaying the previous color and the updated color below the header.
 */
class FavoriteColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: 'red',
      prevColor: null
    };
  }

  componentDidMount() {
    // Change color after mount (simulate async update)
    this.timeoutId = setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 1000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Capture the previous color *before* the DOM is updated
    if (prevState.favoriteColor !== this.state.favoriteColor) {
      return prevState.favoriteColor;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // snapshot is what we returned from getSnapshotBeforeUpdate
    if (snapshot !== null) {
      // Store snapshot in state so we can render it.
      // (Guard: avoid infinite loop by checking inequality.)
      if (this.state.prevColor !== snapshot) {
        // Functional setState ensures no race
        this.setState(() => ({ prevColor: snapshot }));
      }
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  render() {
    const { favoriteColor, prevColor } = this.state;
    return (
      <div className="favorite-wrapper">
        <h3>My Favorite Color is {favoriteColor}</h3>
        {prevColor && (
          <p style={{marginTop:'0.5rem'}}>
            <em>Previous color was: {prevColor}</em>
          </p>
        )}
      </div>
    );
  }
}

export default FavoriteColor;

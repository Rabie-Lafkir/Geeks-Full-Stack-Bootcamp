import React from 'react';

/**
 * A reusable Error Boundary that catches errors in its child component subtree
 * and renders a fallback UI instead of crashing the whole app.
 *
 * Usage:
 * <ErrorBoundary>
 *   <BuggyComponent />
 * </ErrorBoundary>
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI.
    return { hasError: true, errorMessage: error && error.toString() };
  }

  componentDidCatch(error, errorInfo) {
    // You could log to an error reporting service here
    // console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  handleReset = () => {
    // Reset boundary to try rendering children again
    this.setState({ hasError: false, errorMessage: '' });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-box">
          <p><strong>Something went wrong.</strong></p>
          <p style={{fontSize:'0.8rem',wordBreak:'break-word'}}>{this.state.errorMessage}</p>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

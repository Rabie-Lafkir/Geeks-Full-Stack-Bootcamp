import React from 'react';

/**
 * ErrorBoundary
 * Catches render/lifecycle errors in descendants.
 */
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    // console.error('Caught by ErrorBoundary:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      const { fallbackMessage, showDetails } = this.props;
      const { error, errorInfo } = this.state;
      const devMode = showDetails !== undefined ? showDetails : process.env.NODE_ENV !== 'production';
      return (
        <div className="error-details p-3 m-3 border border-danger rounded bg-light">
          <strong>{fallbackMessage || 'An error has occurred in this component.'}</strong>
          <div className="mt-2">
            <button type="button" className="btn btn-sm btn-outline-danger" onClick={this.handleReload}>
              Reload this page
            </button>
          </div>
          {devMode && (
            <details className="mt-3">
              {error && error.toString()}
              {'\n'}
              {errorInfo && errorInfo.componentStack}
            </details>
          )}
        </div>
      );
    }
    return this.props.children;
  }
}

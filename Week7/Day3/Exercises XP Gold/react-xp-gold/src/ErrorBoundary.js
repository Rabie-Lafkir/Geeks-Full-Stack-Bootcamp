import React from 'react';
import Modal from './Modal';

/**
 * ErrorBoundary (Exercise XP GOLD)
 * Tracks errors from descendant components and shows them inside a Modal overlay.
 *
 * State:
 *  - hasError  (boolean)
 *  - error     (Error | null)
 *  - errorInfo (React.ErrorInfo | null)
 *
 * Methods:
 *  - occurrence()  -> sets hasError manually (exercise asks for this)
 *  - resetError()  -> clear & allow retry
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  /** Called by React after an error is thrown in a descendant. */
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  /** Receives the error & componentStack. */
  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  /** Explicit trigger (in case you want to programmatically show error modal). */
  occurrence = (error, errorInfo) => {
    this.setState({ hasError: true, error, errorInfo });
  };

  /** Reset so user can try again. */
  resetError = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      const { error, errorInfo } = this.state;
      // We show a modal with an error message + details
      return (
        <Modal title="Error: Something went wrong" onClose={this.resetError}>
          <p>Please try it again.</p>
          {process.env.NODE_ENV !== 'production' && (
            <details className="modal-details">
              {error && error.toString()}
              {'\n'}
              {errorInfo && errorInfo.componentStack}
            </details>
          )}
        </Modal>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

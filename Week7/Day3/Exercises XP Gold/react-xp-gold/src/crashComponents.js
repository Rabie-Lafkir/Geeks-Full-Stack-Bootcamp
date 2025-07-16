import React from 'react';

/**
 * CrashNow triggers an error immediately after mount so the ErrorBoundary can catch it.
 */
export class CrashNow extends React.Component {
  componentDidMount() {
    throw new Error('User-triggered crash from <CrashNow/> (componentDidMount)');
  }

  render() {
    return null; // renders nothing; component will crash on mount
  }
}

/**
 * CrashInHandler demonstrates error thrown from event handler.
 * Event handler errors are NOT automatically caught by Error Boundaries,
 * so we forward them up via onError() if provided.
 */
export function CrashInHandler({ onError }) {
  const handleClick = () => {
    try {
      throw new Error('Crash from event handler');
    } catch (err) {
      if (onError) {
        onError(err, { componentStack: '\n    in CrashInHandler (simulated stack)' });
      } else {
        throw err;
      }
    }
  };
  return <button onClick={handleClick}>Crash (event handler)</button>;
}

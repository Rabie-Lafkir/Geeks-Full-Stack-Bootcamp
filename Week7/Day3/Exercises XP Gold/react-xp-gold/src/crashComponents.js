import React from 'react';

/**
 * CrashNow is rendered only after user clicks the button in App.
 * It immediately throws in render to simulate a failure.
 */
export class CrashNow extends React.Component {
  render() {
    throw new Error('User-triggered crash from <CrashNow/>');
    // unreachable
    // return <div>Should never see this</div>;
  }
}

/**
 * CrashInHandler demonstrates error thrown from event handler.
 * We purposely throw inside the onClick. This won't be caught by
 * Error Boundaries automatically (only render/lifecycle errors),
 * so we call the provided onError() callback for demonstration.
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

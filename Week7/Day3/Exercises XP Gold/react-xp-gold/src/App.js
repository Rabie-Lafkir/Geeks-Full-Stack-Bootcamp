import React, { useState } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Modal from './Modal';
import { CrashNow, CrashInHandler } from './crashComponents';

/**
 * App
 * Renders a button "Occur an error". When clicked, we render <CrashNow/>
 * inside an ErrorBoundary, causing an immediate error -> Modal shown.
 * Also includes optional CrashInHandler to show manual triggering via boundary. 
 */
export default function App() {
  const [shouldCrash, setShouldCrash] = useState(false);
  const [showManualModal, setShowManualModal] = useState(false);
  const [manualError, setManualError] = useState(null);

  const triggerCrash = () => setShouldCrash(true);

  const handleManualError = (err, info) => {
    // Instead of letting it bubble, we manually show a modal
    setManualError({ err, info });
    setShowManualModal(true);
  };

  const closeManualModal = () => {
    setManualError(null);
    setShowManualModal(false);
  };

  return (
    <div style={{textAlign:'center',marginTop:'3rem'}}>
      <h1>Exercise XP GOLD · Modal Error Handling</h1>
      <p>Click the button to simulate a render error handled by an Error Boundary.</p>
      <button onClick={triggerCrash}>Occur an error</button>

      {/* Bound region that will crash after click */}
      <div style={{marginTop:'2rem'}}>
        <ErrorBoundary>
          {shouldCrash ? <CrashNow /> : <p>(No error yet)</p>}
        </ErrorBoundary>
      </div>

      <hr style={{margin:'3rem auto',maxWidth:'400px'}}/>

      <p>Below is an event-handler error example (manual trigger).</p>
      <CrashInHandler onError={handleManualError} />

      {showManualModal && (
        <Modal title="Event Handler Error" onClose={closeManualModal}>
          <p>An error occurred in an event handler.</p>
          {process.env.NODE_ENV !== 'production' && manualError && (
            <details className="modal-details">
              {manualError.err.toString()}
              {'\n'}
              {manualError.info.componentStack}
            </details>
          )}
        </Modal>
      )}
    </div>
  );
}

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { ErrorBoundary } from '../ErrorBoundary';

/**
 * ColumnRight
 * Demonstrates 2 error types:
 * 1. Rendering error (string replaced with raw object).
 * 2. JS event error (throws in handler; not auto-caught by ErrorBoundary).
 */
export const ColumnRight = () => {
  const crasher = { function: 'I live to crash' };
  const [text, setText] = useState(JSON.stringify(crasher));

  const eventHandler = () => {
    throw new Error('Event handler error');
  };

  const replaceStringWithObject = () => {
    setText(crasher); // triggers render error when boundary re-renders
  };

  return (
    <Container fluid className="py-4">
      <h2>Right column</h2>
      <p>There are two types of errors we can trigger inside this component: A rendering error and a regular javascript error.</p>
      <hr />

      <ErrorBoundary fallbackMessage="Error: Something went wrong">
        <div>
          <p>
            Clicking this button will replace the <code>stringified</code> object, <code>{String(text)}</code>, with the original object.
            This will result in a rendering error.
          </p>
          <Button variant="danger" onClick={replaceStringWithObject}>
            Replace string with object
          </Button>
        </div>
      </ErrorBoundary>

      <hr />

      <div>
        <p>Clicking this button will invoke an event handler, inside of which an error is thrown.</p>
        <Button variant="outline-primary" onClick={eventHandler}>
          Invoke event handler
        </Button>
      </div>
    </Container>
  );
};

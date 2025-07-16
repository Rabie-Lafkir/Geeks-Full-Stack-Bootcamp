import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import BuggyCounter from './components/BuggyCounter';
import FavoriteColor from './components/FavoriteColor';
import Lifecycle2Demo from './components/Lifecycle2Demo';

/**
 * App renders 3 exercise sections:
 * 1. Error Boundary simulations
 * 2. Lifecycle (FavoriteColor)
 * 3. Lifecycle #2 (delete header, componentWillUnmount)
 */
export default function App() {
  return (
    <div>
      <h1>Exercises XP · React Lifecycle, Events, State</h1>
      <p>These demos implement the requirements from the Exercises XP sheet.</p>

      <h2>Exercise 1: React Error Boundary Simulation</h2>
      <p>Click the buttons to increment. When a counter reaches <strong>5</strong> it will deliberately throw an error.</p>

      <h3>Simulation 1 – Single BuggyCounter protected by its own ErrorBoundary</h3>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <h3>Simulation 2 – Two BuggyCounters wrapped in <em>one</em> ErrorBoundary</h3>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <h3>Simulation 3 – Two BuggyCounters each with its <em>own</em> ErrorBoundary (isolation)</h3>
      <ErrorBoundary><BuggyCounter /></ErrorBoundary>
      <ErrorBoundary><BuggyCounter /></ErrorBoundary>

      <h2>Exercise 2: Lifecycle (Favorite Color)</h2>
      <FavoriteColor />

      <h2>Exercise 3: Lifecycle #2 (Unmount demo)</h2>
      <Lifecycle2Demo />
    </div>
  );
}

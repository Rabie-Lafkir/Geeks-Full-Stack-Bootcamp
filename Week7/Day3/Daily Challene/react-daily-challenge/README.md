# React Exercises XP

Solutions for the **Exercises XP** (Lifecycle, Events, State, Error Boundaries) implemented in a Create React App project scaffold.

## Quick Start

```bash
# 1. Install deps
npm install

# 2. Run dev server
npm start

# 3. Build production bundle (optional)
npm run build
```

## Exercises Implemented

### Exercise 1: Error Boundary Simulation
- `BuggyCounter` throws when count === 5.
- `ErrorBoundary` catches errors and renders a fallback with reset button.
- App shows 3 simulations: single protected, two counters in one boundary, two counters each with own boundary.

### Exercise 2: Lifecycle
- `FavoriteColor` starts at red, changes to yellow after mount.
- Displays previous color using `getSnapshotBeforeUpdate` + `componentDidUpdate`.

### Exercise 3: Lifecycle #2
- `Lifecycle2Demo` renders a `Header` child.
- Color prop changes after mount (red -> blue).
- Delete button unmounts Header; `componentWillUnmount` alerts user.

---

Generated 2025-07-16T07:16:57.334596Z.


## Daily Challenge: Form Container
A controlled form that captures user details (name, age, gender, destination, dietary restrictions) and shows a live summary. Submitting updates the browser URL query string.

# Exercise XP GOLD · Modal Error Boundary

Implements the XP GOLD exercise: show a modal with an error message when a component crashes.

## What It Demonstrates
- Custom **Modal** component (full-screen overlay, centered, darkened background).
- **ErrorBoundary** class that catches render/lifecycle errors in its children and shows the Modal.
- Manual error invocation from an **event handler** to demonstrate controlled error display.
- Reset/close button to try again.

## Usage
```bash
npm install
npm start
```
Open http://localhost:3000

### Steps to Reproduce Error
1. Click **Occur an error** – this renders `<CrashNow />` which throws in render.
2. ErrorBoundary catches it and shows the modal with message + optional stack (dev mode).
3. Click **Close** in the modal to reset and try again.

### Event Handler Error Demo
Use the **Crash (event handler)** button. This won't be caught automatically by ErrorBoundary (React limitation),
so the handler manually passes the error to a Modal.

---

Generated 2025-07-16T07:46:38.869597Z.

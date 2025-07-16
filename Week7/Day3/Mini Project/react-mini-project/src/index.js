import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

// CRA service worker optional (left out for brevity)

// Mount
ReactDOM.render(<App />, document.getElementById('root'));

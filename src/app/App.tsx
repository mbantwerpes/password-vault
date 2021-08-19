import React from 'react';
// import styles from './App.module.css';
import Dashboard from './pages/Dashboard/Dashboard';

import { BrowserRouter as Router } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <Router>
      <Dashboard />
      <div id="modal-root" />
    </Router>
  );
}

export default App;

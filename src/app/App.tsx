import React from 'react';
// import styles from './App.module.css';
import Dashboard from './pages/Dashboard/Dashboard';

function App(): JSX.Element {
  return (
    <div>
      <Dashboard />
      <div id="modal-root" />
    </div>
  );
}

export default App;

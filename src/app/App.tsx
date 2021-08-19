import React from 'react';
// import styles from './App.module.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Password from './pages/Password/Password';
import Navbar from './components/Navbar/Navbar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/services">
          <div>Services</div>
        </Route>
        <Route path="/passwords/:service">
          <Password />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
      <div id="modal-root" />
    </Router>
  );
}

export default App;

import React from 'react';
// import styles from './App.module.css';
import Dashboard from './pages/Dashboard/Dashboard';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <Router>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/services">Services</Link>
      </nav>

      <Switch>
        <Route path="/services">
          <div>Services</div>
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

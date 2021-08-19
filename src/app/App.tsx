import React from 'react';
import styles from './App.module.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Password from './pages/Password/Password';
import logo from './assets/logo.svg';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <Router>
      <nav className={styles.navContainer}>
        <img src={logo} alt="" width="30" className={styles.logo} />
        <div className={styles.navLinks}>
          <Link to="/">Dashboard</Link>
          <Link to="/services">Services</Link>
          <Link to="/passwords/testservice">Passwords</Link>
        </div>
      </nav>

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

import React from 'react';
import styles from './App.module.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateService from './pages/CreateService/CreateService';

function App(): JSX.Element {
  return (
    <Router>
      <Navbar />
      <div className={styles.container}>
        <Switch>
          <Route path="/add">
            <CreateService />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
      <div id="modal-root" />
      <div id="notification-root" />
    </Router>
  );
}

export default App;

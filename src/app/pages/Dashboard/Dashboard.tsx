import React from 'react';
import styles from './Dashboard.module.css';

const Dashboard = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <p>This is my password vault</p>
      <input type="text" placeholder="Search..." />
    </div>
  );
};

export default Dashboard;

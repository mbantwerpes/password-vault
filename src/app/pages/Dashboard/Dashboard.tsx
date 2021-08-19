import React from 'react';
import styles from './Dashboard.module.css';

import { useModal } from '../../hooks/useModal';

const Dashboard = (): JSX.Element => {
  const { show, RenderModal } = useModal();

  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <p>This is my password vault</p>
      <input type="text" placeholder="Search..." />
      <div onClick={show}>
        <p>Reddit</p>
        <p>max@mustermann.de</p>
      </div>
      <RenderModal>
        <p>Hello this is your amazing modal</p>
      </RenderModal>
    </div>
  );
};

export default Dashboard;

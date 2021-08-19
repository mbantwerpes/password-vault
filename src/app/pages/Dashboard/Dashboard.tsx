import React, { useState, useEffect } from 'react';
import styles from './Dashboard.module.css';
// import { useModal } from '../../hooks/useModal';

const Dashboard = (): JSX.Element => {
  const [credentials, setCredentials] = useState([]);

  // const { show, RenderModal } = useModal();

  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <p>This is my password vault</p>
      <input type="text" placeholder="Search..." />
      {credentials?.forEach((credential) => console.log(credential))}
      {/* 
      Another way of writing the line above
      {credentials && credentials.forEach((credential) => console.log(credential))} 
      */}

      {/* 
      Example for the modal, so to open it just call show from the useModal hook
      <div onClick={show}>
        <p>Reddit</p>
        <p>max@mustermann.de</p>
      </div>
      <RenderModal>
        <p>Hello this is your amazing modal</p>
      </RenderModal> 
      */}
    </div>
  );
};

export default Dashboard;

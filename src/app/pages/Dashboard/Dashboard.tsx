import React, { useState, useEffect } from 'react';
import styles from './Dashboard.module.css';
import type { Credential } from '../../../types';
// import { useModal } from '../../hooks/useModal';

const Dashboard = (): JSX.Element => {
  const [credentials, setCredentials] = useState<Credential[]>([]);

  // const { show, RenderModal } = useModal();

  useEffect(() => {
    const fetchCredentials = async () => {
      const response = await fetch('/api/credentials', {
        headers: {
          Authorization: '123',
        },
      });
      const data = await response.json();
      setCredentials(data);
    };
    fetchCredentials();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <p>This is my password vault</p>
      <input type="text" placeholder="Search..." />
      {credentials?.map((credential) => {
        return <div key={credential._id}>{credential.service}</div>;
      })}

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

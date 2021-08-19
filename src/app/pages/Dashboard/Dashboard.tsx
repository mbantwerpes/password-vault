import React, { useState, useEffect } from 'react';
import styles from './Dashboard.module.css';
import type { Credential } from '../../../types';
// import { useModal } from '../../hooks/useModal';
import { useNotification } from '../../hooks/useNotification';

const Dashboard = (): JSX.Element => {
  const [credentials, setCredentials] = useState<Credential[]>([]);
  const [masterPassword, setMasterPassword] = useState<string>('');
  const { show, RenderNotification } = useNotification();

  // const { show, RenderModal } = useModal();

  useEffect(() => {
    const fetchCredentials = async () => {
      const response = await fetch('/api/credentials', {
        headers: {
          Authorization: masterPassword,
        },
      });
      const data = await response.json();
      setCredentials(data);
    };
    fetchCredentials();
    if (!masterPassword) setCredentials([]);
  }, [masterPassword]);

  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <p>This is my password vault</p>
      <input
        type="password"
        placeholder="Masterpassword"
        value={masterPassword}
        onChange={(event) => setMasterPassword(event.target.value)}
      />
      {credentials.length !== 0 &&
        credentials.map((credential) => {
          return (
            <div key={credential._id}>
              <p>Service: {credential.service}</p>
              <p>Password: {credential.password}</p>
            </div>
          );
        })}
      <button onClick={show}>Show notification</button>
      <RenderNotification>
        <p>Hello this is your amazing notification</p>
      </RenderNotification>
      {/* Example for the modal, so to open it just call show from the useModal hook
      <div onClick={show}>
        <p>Reddit</p>
        <p>max@mustermann.de</p>
      </div>
      <RenderModal>
        <p>Hello this is your amazing modal</p>
      </RenderModal> */}
    </div>
  );
};

export default Dashboard;

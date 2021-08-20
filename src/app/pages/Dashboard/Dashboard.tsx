import React, { useState, useEffect } from 'react';
import styles from './Dashboard.module.css';
import { useNotification } from '../../hooks/useNotification';
import type { Credential } from '../../../types';
import Card from '../../components/Card/Card';
import ServiceCardContent from '../../components/ServiceCardContent/ServiceCardContent';
import FloatingActionButton from '../../components/FloatingActionButton/FloatingActionButton';

const Dashboard = (): JSX.Element => {
  const [credentials, setCredentials] = useState<Credential[]>([]);
  const [masterPassword, setMasterPassword] = useState<string>('');
  const { show, RenderNotification } = useNotification();

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

  const handleDeleteService = async (id: string) => {
    console.log(id);
    const response = await fetch(`/api/credentials/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: masterPassword,
      },
    });
    console.log(await response.json());
  };

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
      <div className={styles.servicesContainer}>
        {credentials.length !== 0 &&
          credentials.map((credential) => {
            return (
              <Card key={credential._id}>
                <ServiceCardContent
                  service={credential.service}
                  username={credential.username}
                  password={credential.password}
                  onDelete={() => handleDeleteService(credential._id)}
                  id={credential._id}
                />
              </Card>
            );
          })}
      </div>
      <button onClick={show}>Show notification</button>
      <RenderNotification type="warning">
        This is my amazing notification
      </RenderNotification>
      <FloatingActionButton />
    </div>
  );
};

export default Dashboard;

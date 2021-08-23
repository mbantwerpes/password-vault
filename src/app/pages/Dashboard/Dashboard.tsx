import React, { useState, useEffect } from 'react';
import styles from './Dashboard.module.css';
import { useNotification } from '../../hooks/useNotification';
import type { Credential } from '../../../types';
import Card from '../../components/Card/Card';
import ServiceCardContent from '../../components/ServiceCardContent/ServiceCardContent';
import FloatingActionButton from '../../components/FloatingActionButton/FloatingActionButton';
import Input from '../../components/Input/Input';

const Dashboard = (): JSX.Element => {
  const [credentials, setCredentials] = useState<Credential[]>([]);
  const [masterPassword, setMasterPassword] = useState<string>('');
  const { show, RenderNotification } = useNotification();

  const fetchCredentials = async () => {
    const response = await fetch('/api/credentials', {
      headers: {
        Authorization: masterPassword,
      },
    });
    const data = await response.json();
    setCredentials(data);
  };

  useEffect(() => {
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
    const status = response.status;
    if (status === 200) {
      const newCredentials = credentials.filter(
        (credential) => credential._id !== id
      );
      setCredentials(newCredentials);

      show();
    }
  };

  const handleEditService = async (id: string) => {
    console.log(id);
    // This does not work since the credentials get fetched before the service got updated
    await fetchCredentials();
  };

  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <p>This is my password vault</p>
      <Input
        type="password"
        placeholder="Masterpassword"
        value={masterPassword}
        onChange={setMasterPassword}
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
                  masterPassword={masterPassword}
                  onEdit={() => handleEditService(credential._id)}
                  onDelete={() => handleDeleteService(credential._id)}
                  id={credential._id}
                />
              </Card>
            );
          })}
      </div>
      <RenderNotification type="success">
        Service successfully deleted
      </RenderNotification>
      <FloatingActionButton />
    </div>
  );
};

export default Dashboard;

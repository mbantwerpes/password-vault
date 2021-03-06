import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import styles from './CreateService.module.css';
import { useHistory } from 'react-router-dom';

const CreateService = (): JSX.Element => {
  const history = useHistory();

  const [serviceValue, setServiceValue] = useState('');
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [masterPasswordValue, setMasterPasswordValue] = useState('');

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const postData = {
      service: serviceValue,
      username: usernameValue,
      password: passwordValue,
    };

    const response = await fetch('/api/credentials', {
      method: 'POST',
      headers: {
        Authorization: masterPasswordValue,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
    console.log(await response.json());

    // Redirect to dashboard
    history.push('/');
  };

  return (
    <div className={styles.container}>
      <h1>Add credential</h1>
      <form onSubmit={handleFormSubmit}>
        <Input
          type="text"
          placeholder="Service"
          value={serviceValue}
          onChange={setServiceValue}
        />
        <Input
          type="text"
          placeholder="Username"
          value={usernameValue}
          onChange={setUsernameValue}
        />
        <Input
          type="password"
          placeholder="Password"
          value={passwordValue}
          onChange={setPasswordValue}
        />
        <Input
          type="password"
          placeholder="MasterPassword"
          value={masterPasswordValue}
          onChange={setMasterPasswordValue}
        />
        <Button type="submit" styleType="primary" size="md">
          Test
        </Button>
      </form>
    </div>
  );
};

export default CreateService;

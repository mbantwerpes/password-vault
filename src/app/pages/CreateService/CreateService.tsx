import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import styles from './CreateService.module.css';

const CreateService = (): JSX.Element => {
  const [serviceValue, setServiceValue] = useState('');
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [masterPasswordValue, setMasterPasswordValue] = useState('');

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('juhu');
  };

  return (
    <div className={styles.container}>
      <h1>Hier bin ich</h1>
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
        <Button text="Ship it" />
      </form>
    </div>
  );
};

export default CreateService;

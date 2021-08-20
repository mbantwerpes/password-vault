import React from 'react';
import Input from '../../components/Input/Input';
import styles from './CreateService.module.css';

const CreateService = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <h1>Hier bin ich</h1>
      <form action="">
        <Input type="text" placeholder="Service" />
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="MasterPassword" />
      </form>
    </div>
  );
};

export default CreateService;

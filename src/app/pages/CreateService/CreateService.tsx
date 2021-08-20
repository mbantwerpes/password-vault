import React from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import styles from './CreateService.module.css';

const CreateService = (): JSX.Element => {
  const handleFormSubmit = (e: Event) => {
    e.preventDefault();
    console.log('juhu');
  };

  return (
    <div className={styles.container}>
      <h1>Hier bin ich</h1>
      <form action="">
        <Input type="text" placeholder="Service" />
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="MasterPassword" />
        <Button text="Ship it" onClick={handleFormSubmit} />
      </form>
    </div>
  );
};

export default CreateService;

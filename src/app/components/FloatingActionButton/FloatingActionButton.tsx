import React from 'react';
import styles from './FloatingActionButton.module.css';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

const FloatingActionButton = (): JSX.Element => {
  return (
    <Link to="/add" className={styles.container}>
      <MdAdd size={32} />
    </Link>
  );
};

export default FloatingActionButton;

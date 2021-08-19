import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.svg';

const Navbar = (): JSX.Element => {
  return (
    <nav className={styles.container}>
      <img src={logo} alt="" width="30" className={styles.logo} />
      <div className={styles.links}>
        <Link to="/">Dashboard</Link>
        <Link to="/services">Services</Link>
        <Link to="/passwords/testservice">Passwords</Link>
      </div>
    </nav>
  );
};

export default Navbar;

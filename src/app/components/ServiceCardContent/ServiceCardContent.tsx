import React from 'react';
import styles from './ServiceCardContent.module.css';

type ServiceCardContentProps = {
  service: string;
  username: string;
  password: string;
};

const ServiceCardContent = ({
  service,
  username,
  password,
}: ServiceCardContentProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <p>
        <span className={styles.description}>Service: </span>
        <span>{service}</span>
      </p>
      <p>
        <span className={styles.description}>Username: </span>
        <span>{username}</span>
      </p>
      <p>
        <span className={styles.description}>Password: </span>
        <span>{password}</span>
      </p>
    </div>
  );
};

export default ServiceCardContent;

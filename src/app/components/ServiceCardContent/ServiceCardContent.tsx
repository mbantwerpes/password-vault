import React from 'react';
import styles from './ServiceCardContent.module.css';
import { MdDeleteForever, MdModeEdit } from 'react-icons/md';

type ServiceCardContentProps = {
  service: string;
  username: string;
  password: string;
  onDelete: () => void;
};

const ServiceCardContent = ({
  service,
  username,
  password,
  onDelete,
}: ServiceCardContentProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <div>
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
      <div className={styles.buttonContainer}>
        <MdDeleteForever
          className={styles.deleteButton}
          size={24}
          onClick={onDelete}
        />
        <MdModeEdit className={styles.editButton} size={24} />
      </div>
    </div>
  );
};

export default ServiceCardContent;

import React from 'react';
import styles from './ServiceCardContent.module.css';
import { MdDeleteForever, MdModeEdit } from 'react-icons/md';
import { useModal } from '../../hooks/useModal';
import ConfirmDeleteModal from '../ConfirmDeleteModal/ConfirmDeleteModal';

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
  const { show: showDeleteModal, RenderModal: RenderDeleteModal } = useModal();

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
          onClick={showDeleteModal}
        />
        <MdModeEdit
          className={styles.editButton}
          size={24}
          onClick={showDeleteModal}
        />
      </div>
      <RenderDeleteModal>
        <ConfirmDeleteModal onDelete={onDelete} />
      </RenderDeleteModal>
    </div>
  );
};

export default ServiceCardContent;

import React from 'react';
import styles from './ServiceCardContent.module.css';
import { MdDeleteForever, MdModeEdit } from 'react-icons/md';
import { useModal } from '../../hooks/useModal';
import ConfirmDeleteModal from '../ConfirmDeleteModal/ConfirmDeleteModal';
import EditServiceModal from '../EditServiceModal/EditServiceModal';

type ServiceCardContentProps = {
  service: string;
  username: string;
  password: string;
  masterPassword: string;
  onEdit: () => void;
  onDelete: () => void;
  id: string;
};

const ServiceCardContent = ({
  service,
  username,
  password,
  masterPassword,
  onEdit,
  onDelete,
  id,
}: ServiceCardContentProps): JSX.Element => {
  const {
    show: showDeleteModal,
    hide: hideDeleteModal,
    RenderModal: RenderDeleteModal,
  } = useModal();

  const {
    show: showEditModal,
    hide: hideEditModal,
    RenderModal: RenderEditModal,
  } = useModal();

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
          onClick={showEditModal}
        />
      </div>
      <RenderDeleteModal title="Delete">
        <ConfirmDeleteModal onDelete={onDelete} onClose={hideDeleteModal} />
      </RenderDeleteModal>
      <RenderEditModal title="Edit">
        <EditServiceModal
          onEdit={onEdit}
          onClose={hideEditModal}
          service={service}
          username={username}
          password={password}
          masterPassword={masterPassword}
          id={id}
        />
      </RenderEditModal>
    </div>
  );
};

export default ServiceCardContent;

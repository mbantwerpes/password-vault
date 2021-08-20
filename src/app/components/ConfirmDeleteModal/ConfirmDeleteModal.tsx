import React from 'react';
import Button from '../Button/Button';
import styles from './ConfirmDeleteModal.module.css';

type ConfirmDeleteModalProps = {
  onDelete: () => void;
  onClose: () => void;
};

const ConfirmDeleteModal = ({
  onDelete,
  onClose,
}: ConfirmDeleteModalProps): JSX.Element => {
  return (
    <div>
      <p>Do you really want to delete the service?</p>
      <div className={styles.buttonContainer}>
        <Button type="button" styleType="error" size="sm" onClick={onDelete}>
          Delete
        </Button>
        <Button type="button" styleType="primary" size="sm" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;

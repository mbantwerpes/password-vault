import React from 'react';
import Button from '../Button/Button';

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
      <Button type="button" styleType="error" size="sm" onClick={onDelete}>
        Delete
      </Button>
      <Button type="button" styleType="primary" size="sm" onClick={onClose}>
        Cancel
      </Button>
    </div>
  );
};

export default ConfirmDeleteModal;

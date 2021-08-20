import React from 'react';

type ConfirmDeleteModalProps = {
  onDelete: () => void;
};

const ConfirmDeleteModal = ({
  onDelete,
}: ConfirmDeleteModalProps): JSX.Element => {
  return (
    <div>
      <p>Do you really want to delete the service?</p>
      <button onClick={onDelete}>Delete</button>
      <button>Cancel</button>
    </div>
  );
};

export default ConfirmDeleteModal;

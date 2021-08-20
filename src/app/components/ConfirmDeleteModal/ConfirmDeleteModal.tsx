import React from 'react';

type ConfirmDeleteModalProps = {
  onDelete: () => void;
};

const ConfirmDeleteModal = ({
  onDelete,
}: ConfirmDeleteModalProps): JSX.Element => {
  return (
    <div>
      <p>Möchtest du den Service wirklich löschen?</p>
      <button onClick={onDelete}>Delete</button>
      <button>Cancel</button>
    </div>
  );
};

export default ConfirmDeleteModal;

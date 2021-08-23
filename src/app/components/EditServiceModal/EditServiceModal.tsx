import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

type EditServiceModalProps = {
  onEdit: () => void;
  onClose: () => void;
  service: string;
  username: string;
  password: string;
  masterPassword: string;
  id: string;
};

const EditServiceModal = ({
  onEdit,
  onClose,
  service,
  username,
  password,
  masterPassword,
  id,
}: EditServiceModalProps): JSX.Element => {
  const [serviceValue, setServiceValue] = useState<string>(service);
  const [usernameValue, setUsernameValue] = useState<string>(username);
  const [passwordValue, setPasswordValue] = useState<string>(password);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Close Modal after form submit
    onClose();

    const postData = {
      service: serviceValue,
      username: usernameValue,
      password: passwordValue,
    };

    const response = await fetch(`/api/credentials/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: masterPassword,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
    // Call onEdit here, because we have to wait until the credential is updated before rerendering the list
    onEdit();
    console.log(await response.json());
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <Input
          type="text"
          placeholder="Service"
          value={serviceValue}
          onChange={setServiceValue}
        />
        <Input
          type="text"
          placeholder="Username"
          value={usernameValue}
          onChange={setUsernameValue}
        />
        <Input
          type="text"
          placeholder="Password"
          value={passwordValue}
          onChange={setPasswordValue}
        />
        <Button type="submit" styleType="primary" size="md">
          Save
        </Button>
        <Button type="button" styleType="error" size="md" onClick={onClose}>
          Cancel
        </Button>
      </form>
    </>
  );
};

export default EditServiceModal;

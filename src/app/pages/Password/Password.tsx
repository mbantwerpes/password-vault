import React from 'react';
import { useParams } from 'react-router-dom';

const Password = (): JSX.Element => {
  const service = useParams<{ service: string }>();
  return <div>{service.service}</div>;
};

export default Password;

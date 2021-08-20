import React from 'react';

type InputProps = {
  type: string;
  placeholder: string;
};

const Input = ({ type, placeholder }: InputProps): JSX.Element => {
  return <input type={type} placeholder={placeholder} />;
};

export default Input;

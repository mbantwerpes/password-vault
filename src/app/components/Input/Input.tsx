import React from 'react';

type InputProps = {
  type: string;
  placeholder: string;
  value: string;
};

const Input = ({ type, placeholder, value }: InputProps): JSX.Element => {
  return <input type={type} placeholder={placeholder} value={value} />;
};

export default Input;

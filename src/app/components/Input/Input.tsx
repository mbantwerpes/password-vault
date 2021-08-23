import React from 'react';
import styles from './Input.module.css';

type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

const Input = ({
  type,
  placeholder,
  value,
  onChange,
}: InputProps): JSX.Element => {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;

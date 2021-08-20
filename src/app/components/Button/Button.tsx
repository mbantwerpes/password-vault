import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  text: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  styleType: 'primary' | 'error' | 'warning' | 'success';
  size: 'sm' | 'md' | 'lg';
};

const Button = ({ text, type, styleType, size }: ButtonProps): JSX.Element => {
  const getStyleTypeClass = (): string => {
    switch (styleType) {
      case 'primary':
        return styles.typePrimary;
      case 'error':
        return styles.typeError;
      case 'warning':
        return styles.typeWarning;
      case 'success':
        return styles.typeSuccess;
      default:
        return '';
    }
  };

  return (
    <button
      type={type}
      className={`${styles.button} ${getStyleTypeClass()} ${
        size === 'sm'
          ? styles.small
          : size === 'md'
          ? styles.medium
          : styles.large
      }`}
    >
      {text}
    </button>
  );
};

export default Button;

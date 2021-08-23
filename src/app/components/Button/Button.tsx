import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  children: React.ReactElement | string;
  type: 'button' | 'submit' | 'reset' | undefined;
  styleType: 'primary' | 'error' | 'warning' | 'success';
  size: 'sm' | 'md' | 'lg';
  onClick?: () => void;
};

const Button = ({
  children,
  type,
  styleType,
  size,
  onClick,
}: ButtonProps): JSX.Element => {
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
      onClick={onClick}
      type={type}
      className={`${styles.button} ${getStyleTypeClass()} ${
        size === 'sm'
          ? styles.small
          : size === 'md'
          ? styles.medium
          : styles.large
      }`}
    >
      {children}
    </button>
  );
};

export default Button;

import React from 'react';

type ButtonProps = {
  text: string;
  onClick: (e: any) => void;
};

const Button = ({ text, onClick }: ButtonProps): JSX.Element => {
  return (
    <button type="submit" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

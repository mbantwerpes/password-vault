import React from 'react';

import styles from './Card.module.css';

type CardProps = {
  children: React.ReactElement;
};

const Card = ({ children }: CardProps): JSX.Element => {
  return <div className={styles.container}>{children}</div>;
};

export default Card;

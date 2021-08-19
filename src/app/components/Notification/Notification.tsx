import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Notification.module.css';

type Props = {
  children: React.ReactChild;
  closeNotification: () => void;
  type: string;
};

const Notification = React.memo(
  ({ children, closeNotification, type }: Props) => {
    const domEl = document.querySelector('#notification-root');

    if (!domEl) return null;

    return ReactDOM.createPortal(
      <div
        className={`${styles.container} ${
          type === 'primary' ? styles.typePrimary : styles.typeWarning
        }`}
      >
        <p>{children}</p>
        <button onClick={closeNotification}>X</button>
      </div>,
      domEl
    );
  }
);

export default Notification;

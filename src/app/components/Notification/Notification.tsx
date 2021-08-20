import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Notification.module.css';

import {
  MdErrorOutline,
  MdWarning,
  MdInfoOutline,
  MdCheck,
} from 'react-icons/md';

type Props = {
  children: React.ReactChild;
  closeNotification: () => void;
  type: string;
};

const Notification = React.memo(
  ({ children, closeNotification, type }: Props) => {
    const domEl = document.querySelector('#notification-root');

    if (!domEl) return null;

    const getIcon = (size: number) => {
      switch (type) {
        case 'primary':
          return <MdInfoOutline size={size} />;
        case 'error':
          return <MdErrorOutline size={size} />;
        case 'warning':
          return <MdWarning size={size} />;
        case 'success':
          return <MdCheck size={size} />;

        default:
          return <MdErrorOutline size={size} />;
      }
    };

    return ReactDOM.createPortal(
      <div
        className={`${styles.container} ${
          type === 'primary'
            ? styles.typePrimary
            : type === 'error'
            ? styles.typeError
            : type === 'warning'
            ? styles.typeWarning
            : styles.typeSuccess
        }`}
      >
        {getIcon(32)}
        <p className={styles.content}>{children}</p>
        <button onClick={closeNotification} className={styles.closeButton}>
          X
        </button>
      </div>,
      domEl
    );
  }
);

export default Notification;

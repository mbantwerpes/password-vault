import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Notification.module.css';

type Props = {
  children: React.ReactChild;
  closeNotification: () => void;
};

const Notification = React.memo(({ children, closeNotification }: Props) => {
  const domEl = document.querySelector('#notification-root');

  if (!domEl) return null;

  return ReactDOM.createPortal(
    <div className={styles.container}>
      <button onClick={closeNotification}>Close</button>
      {children}
    </div>,
    domEl
  );
});

export default Notification;

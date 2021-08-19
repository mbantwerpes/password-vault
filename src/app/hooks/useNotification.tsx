import React, { useState } from 'react';

import Notification from '../components/Notification/Notification';

export const useNotification = () => {
  const [isVisible, setIsVisible] = useState(false);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  const RenderNotification = ({ children }: { children: React.ReactChild }) => (
    <>
      {isVisible && (
        <Notification closeNotification={hide}>{children}</Notification>
      )}
    </>
  );

  return {
    show,
    hide,
    RenderNotification,
  };
};

import React, { useState } from 'react';

import Notification from '../components/Notification/Notification';

export const useNotification = () => {
  const [isVisible, setIsVisible] = useState(false);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  const RenderNotification = ({
    children,
    type,
  }: {
    children: React.ReactChild;
    type: string;
  }) => (
    <>
      {isVisible && (
        <Notification closeNotification={hide} type={type}>
          {children}
        </Notification>
      )}
    </>
  );

  return {
    show,
    hide,
    RenderNotification,
  };
};

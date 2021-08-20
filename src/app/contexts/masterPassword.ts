import React from 'react';

export const MasterPasswordContext = React.createContext({
  masterPassword: '',
  updateMasterPassword: () => {
    console.log('test');
  },
});

import React from 'react';
// import styles from './App.module.css';
import Dashboard from './pages/Dashboard/Dashboard';

import { useModal } from './hooks/useModal';

function App(): JSX.Element {
  const { show, RenderModal } = useModal();

  return (
    <div>
      <Dashboard />
      <div>
        <button onClick={show}>MODAL anzeigen!</button>
        <RenderModal>
          <p>Hello this is your amazing modal</p>
        </RenderModal>
      </div>
      <div id="modal-root" />
    </div>
  );
}

export default App;

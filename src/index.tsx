import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import ContextAppProvider from './components/context/contextAppProvider';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContextAppProvider>
      <App />
    </ContextAppProvider>
  </React.StrictMode>
);

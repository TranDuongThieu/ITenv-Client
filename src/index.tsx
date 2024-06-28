import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ConfigProvider } from 'antd';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider
    theme={{
      // algorithm: store.getState().common.theme === THEME.DARK ? theme.darkAlgorithm : theme.compactAlgorithm,
      token: {
        colorPrimary: '#4086ff'
      }
    }}
  >
    <App />
  </ConfigProvider>
);

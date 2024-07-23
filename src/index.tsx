import { ConfigProvider, theme } from 'antd';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import './index.css';
import store from './redux/store.ts';
import { THEME } from './redux/app/app.slice.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ConfigProvider
      theme={{
        algorithm: store.getState().app.theme === THEME.DARK ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: '#21a1d3',
          fontFamily: 'Inter, sans-serif',
          fontSize: 16
        }
      }}
    >
      <App />
    </ConfigProvider>
  </Provider>
);

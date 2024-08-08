import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ConfigProvider } from 'antd';
import {themeConfig} from './utils/theme.js'
import {StoreProvider} from 'store/store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider>
    <ConfigProvider
    theme={themeConfig}
  >
    <App />
  </ConfigProvider>
  </StoreProvider>
  </React.StrictMode>
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './contexts/AuthProvider';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <ToastContainer position='top-center' />
       <App />
    </AuthProvider>
   
  </React.StrictMode>
);

reportWebVitals();

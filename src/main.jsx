import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import {  GoogleOAuthProvider } from "@react-oauth/google";
const clientId = "888088047039-tqvtiei4nt05q1avs3n1t1k48qf12v55.apps.googleusercontent.com";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
    <BrowserRouter>
    <App />
  </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)

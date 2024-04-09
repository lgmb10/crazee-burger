import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/pages/error/ErrorPage.jsx";
import App from "./App.jsx";
import LoginPage from "./components/pages/login/LoginPage.jsx";
import OrderPage from "./components/pages/order/OrderPage.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>,
)

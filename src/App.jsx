import './App.css'
import LoginPage from "./components/pages/login/LoginPage.jsx";
import {Route, Routes} from "react-router-dom";
import ErrorPage from "./components/pages/error/ErrorPage.jsx";
import OrderPage from "./components/pages/order/OrderPage.jsx";
import React from "react";

function App() {

    return (
        <Routes>
            <Route path={"/"} element={<LoginPage/>} />
            <Route path={"/order/:userId"} element={<OrderPage/>} />
            <Route path={"*"} element={<ErrorPage/>} />
        </Routes>
    )
}

export default App

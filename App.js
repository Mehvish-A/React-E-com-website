import React from 'react';
import {  Routes,Route } from 'react-router-dom';
import "./App.css";
 import Navbar from "./Navbar.js";
import Login from "./Login/login.js";
import Home from "./Home";
import Cart from "./Cart";
import Checkout from "./Checkout";
import ProductsDetails from "./ProductDetails";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Login/>
       <Navbar /> 
      <Routes>
        {/*Home Page*/}
        <Route path="/" element={<Home/>}></Route>
        {/*Prodcut Details */}
        <Route path="/Product-details" element={<div></div>}></Route>
        <Route path="/Login" element={<Login />}></Route>
        { <Route path="/Cart" element={<Cart/>}></Route> }
    <Route path="/Checkout" element={<Checkout/>}></Route>
    <Route path="/details/:tabIndex/:productId" element={<ProductsDetails/>}></Route>
      </Routes>
    </div>
  );
};

export default App;


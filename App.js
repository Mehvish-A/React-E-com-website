import React from 'react';
import {  Routes,Route } from 'react-router-dom';
import "./App.css";
 import Navbar from "./Navbar.js";
import Login from "./Login.js";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <Login/>
       <Navbar /> 
      <Routes>
        {/*Home Page*/}
        <Route path="/" element={<Home/>}></Route>
        {/*Prodcut Details */}
        <Route path="/Product-details" element={<div></div>}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Cart" element={<div>Cart</div>}></Route>
        <Route path="/Checkout" element={<div>Checkout</div>}></Route>
      </Routes>
    </div>
  );
};

export default App;


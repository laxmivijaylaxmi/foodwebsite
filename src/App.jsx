import React, { useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Pages/Home/Home";
import Cart from "./component/Pages/Cart/Cart";
import Placeholder from "./component/Pages/Placeholder/Placeholder";
import Footer from "./component/Footer/Footer";
import  Menu from "./component/Pages/Menu/Menu"
import Login from "./component/Pages/Login/Login";
import SignUp from "./component/Pages/SignUp/SignUp";
import Contact from "./component/Pages/Contact/Contact"


const App = () => {

  return (
    <Router>
   
      <main className="flex flex-col min-h-screen">
        <Navbar  />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Placeholder />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer />
      </main>
    </Router>
  );
};

export default App;

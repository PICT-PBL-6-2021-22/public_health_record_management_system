import React from "react";
import logo from "../../assets/img/landingPage/logo.png";


import { BrowserRouter, Link, Route, Router , Switch } from 'react-router-dom';
import About from "./About";
export default function Navbar() {
  return (
    

    
    <nav className="bg-white w-screen h-14 shadow-sm px-2 lg:px-16 py-3 flex justify-items-center items-center">
      <img src={logo} alt="logo" className="h-8 pr-3" />
      <h1 className="font-poppins font-medium lg:font-bold text-sm lg:text-xl">
        Healthcare Management System
      </h1>
      <ul className="flex ml-auto w-48 justify-evenly font-lato font-semibold">
        
        <li>About us</li>
        <li>Contact us</li>
        
      </ul>
      
      <button  className="bg-primary py-1 px-3 rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary" >
        Register
      </button>
    </nav>
    
    
    
    
  );
}

import React from "react";
import Navbar from "../components/landingPage/Navbar";
import Vector from "../assets/img/landingPage/vector.svg";
import Login from "../components/landingPage/Login";
import Footer from "../components/landingPage/Footer";

export default function LandingPage() {
  return (
    <div className="h-screen max-h-min flex flex-col">
      <Navbar></Navbar>
      <div className="body flex px-16 w-full h-5/6 ">
        <img src={Vector} alt="Graphics" className="w-1/2 my-auto mx-auto" />
        <div className="ml-auto w-1/2">
          <Login></Login>
        </div>
      </div>
      <div className="mt-auto relative bottom-0">
        <Footer></Footer>
      </div>
    </div>
  );
}

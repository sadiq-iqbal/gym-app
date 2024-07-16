import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Componenets/Navbar";
import Footer from "../Componenets/Footer";

function HomeLayout() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default HomeLayout;

import React from "react";

import { Outlet } from "react-router-dom";

import './App.css';

import Sidebar from "./partials/Sidebar";
import Footer from "./partials/Footer";

const App = () => {
  return (
    <>
      {/* <Sidebar /> */}

      <Outlet />
      {/* <Footer /> */}
    </>
  )
}

export default App;

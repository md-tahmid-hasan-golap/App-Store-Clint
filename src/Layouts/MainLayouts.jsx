import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const MainLayouts = () => {
  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto">
        <Outlet />
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;

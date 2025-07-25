import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";

const MainLayouts = () => {
  return (
    <div>
      <Header></Header>
      <div className="max-w-6xl mx-auto">
        {" "}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayouts;

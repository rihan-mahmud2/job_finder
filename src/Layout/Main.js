import React from "react";
import Nav from "../components/Nav";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Nav />
      <div class="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
};

export default Main;

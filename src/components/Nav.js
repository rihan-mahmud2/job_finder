import React from "react";
import logo from "../assets/images/logo.svg";
const Nav = () => {
  return (
    <nav class="max-w-[90rem] mx-auto py-4 fixed top-0 w-full left-1/2 -translate-x-1/2 px-4 md:px-0">
      <img alt="Logo" src={logo} />
    </nav>
  );
};

export default Nav;

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <Navbar />
      <h1>
        Hello ! I'm Alexandra, <br />a <em>Junior full-stack</em>
        <br /> web developer
      </h1>
    </header>
  );
};
export default Header;

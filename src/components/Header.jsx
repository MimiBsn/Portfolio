import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <Navbar />
      <h1>
        Hello ! I'm Alexandra, <br />a{" "}
        <em>
          Junior
          <br /> full-stack
        </em>{" "}
        web developer
      </h1>
      <h2>Nice to meet you</h2>
    </header>
  );
};
export default Header;

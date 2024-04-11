import React from "react";
import Logo from "./logo.tsx";
import Home from "./Home.tsx";
import Profile from "./Profile.tsx";

import "../App.css";
import "../index.css";

const Navbar: React.FC = () => {
  return (
    <div className="Navbar">
      <span>
        <Logo />
      </span>
      <div className="rightNav">
        <Home />

        <span>Event</span>
        <span>Donation</span>
        <span className="profile">
          <Profile />
        </span>
      </div>
    </div>
  );
};

export default Navbar;

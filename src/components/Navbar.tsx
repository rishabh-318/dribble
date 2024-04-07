import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="Navbar">
      <span>logo</span>
      <div className="rightNav">
        <span>Home</span>
        <span>Event</span>
        <span>Donation</span>
        <span className="profile">Profile</span>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
  <header className="navbar">
    <div className="Nav-brand">TODO</div>
    <div className="nav-end">
      <button className="btn" >Sign in</button>
      <button className="btn" >Sign up</button>
    </div>
  </header>);
};

export default Navbar;

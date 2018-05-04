import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      <li><NavLink exact to="/" activeStyle={{backgroundColor: "tomato"}}>Home</NavLink></li>
      <li><NavLink to="/about" activeStyle={{backgroundColor: "tomato"}}>About</NavLink></li>
      <li><NavLink to="/teachers" activeStyle={{backgroundColor: "tomato"}}>Teachers</NavLink></li>
      <li><NavLink to="/courses" activeStyle={{backgroundColor: "tomato"}}>Courses</NavLink></li>
    </ul>
  </header>
);

export default Header;
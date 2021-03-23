import React from "react";
import Logo from "../assets/images/logo.png";
import { AiOutlineTwitter, AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid d-flex">
      <div className="left">
        <img src={Logo} />
        <div className="icons">
          <i>
            <AiOutlineTwitter />
          </i>
          <i>
            <AiOutlineGoogle />
          </i>
          <i>
            <FaFacebookF />
          </i>
        </div>
      </div>
      <div className="getintouch">
        <h6>Get in touch</h6>
        <p className="email">hpgajjar95336@gmail.com</p>
        <p className="phone">+91 9106639372</p>
        <div className="header">
          <NavLink className="navlink" to="/" exact activeClassName="active">
            Home
          </NavLink>
          <NavLink
            className="navlink ml-4"
            to="/about"
            exact
            activeClassName="active"
          >
            About
          </NavLink>
          <NavLink
            className="navlink ml-4"
            to="/projects"
            exact
            activeClassName="active"
          >
            Projects
          </NavLink>
          <NavLink
            className="navlink ml-4"
            to="/studio"
            exact
            activeClassName="active"
          >
            Studio
          </NavLink>
          <NavLink
            className="navlink ml-4"
            to="/blog"
            exact
            activeClassName="active"
          >
            Blog
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;

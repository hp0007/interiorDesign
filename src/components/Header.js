import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { VscThreeBars } from "react-icons/vsc";

const Header = () => {
  useEffect(() => {
    const nav = document.getElementById("navbar");
    if (window.pageYOffset >= 0) {
      nav.classList.add("fixed-top");
    } else {
      nav.classList.remove("fixed-top");
    }
  });
  const data = {
    navData: [
      {
        id: 1,
        name: "Home",
        path: "/interiorDesign",
      },
      {
        id: 2,
        name: "About",
        path: "/about",
      },
      {
        id: 3,
        name: "Projects",
        path: "/projects",
      },
      {
        id: 4,
        name: "Studio",
        path: "/studio",
      },
      {
        id: 5,
        name: "Blog",
        path: "/blog",
      },
      {
        id: 6,
        name: "Contact",
        path: "/contact",
      },
    ],
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg  pt-3 pb-3" id="navbar">
        <NavLink className="navbar-brand ml-5" to="/">
          <img src={Logo} alt="logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ color: "#000" }}>
            {" "}
            <i class="fa-nav">
              <VscThreeBars />
            </i>
          </span>
        </button>
        <div className="collapse navbar-collapse pr-0" id="navbarNav">
          <ul className="navbar-nav ml-auto mr-3">
            {data.navData.map((val) => {
              return (
                <li className="nav-item" key={val.id}>
                  <NavLink
                    className="nav-link mr-2"
                    to={val.path}
                    exact
                    activeClassName="active"
                  >
                    {val.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;

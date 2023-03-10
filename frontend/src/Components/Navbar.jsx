//import styles from "./Navbar.module.css";
import './Navibar.scss'
import { useTheme } from "../contexts/useTheme"
import { Link, Navigate } from "react-router-dom";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Navbar = ({ history }) => {

  const { theme, changeTheme } = useTheme();
  const navigate = useNavigate();


  return (
    <header className="sticky-top">

      <nav
        className={`navbar navbar-expand-sm navbar-${theme} bg-${theme}`}
        aria-label="Third navbar example"
      >
        <div className="container">

          <Link to={'/home'} className={`navbar-brand navbarBrand`}> Pricemet </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExample03"
          >
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className={`nav-item navBarLink`}>

                <Link to={'/home'} className={`nav-link`}> Home </Link>


              </li>
              <li className={`nav-item`}>

                {theme == "dark" && <button className={`btn btn-light btnStyle`} onClick={() => changeTheme("light")}>☀</button>}
                {theme == "light" && <button className={`btn btn-dark btnStyle`} onClick={() => changeTheme("dark")}>🌙</button>}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

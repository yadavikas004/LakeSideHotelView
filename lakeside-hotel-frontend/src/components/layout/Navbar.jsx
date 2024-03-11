// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-bootstrap";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-5 shadow mt-5 sticky-top">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          <span className="hotel-color">Lakeside Hotel</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to={"/browse-all-rooms"}
              >
                Browse all rooms
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" aria-current="page" to={"/admin"}>
                Admin
              </NavLink>
            </li>
          </ul>

          <ul className="d-flex navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to={"/find-booking"}>
                Find My Booking
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              {/* <a href="#"
               // eslint-disable-next-line no-undef
               className={`nav-link dropdown-toggle ${showAccount ? "show" : ""}`}
               role="button"
               data-bs-toggle="dropdown"
               aria-expanded="false"
               // eslint-disable-next-line no-undef
               onClick={handleAccountClick}
              >
                {" "}
                Account
              </a> */}
              <ul>
                <li>
                  <Link className="dropdown-item" to={"/login"}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/profile"}>
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/logout"}>
                    Logout
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

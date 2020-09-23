import React from "react";
import "./styles.css";

function Head() {
  return (
    <nav className="navbar navbar-light bg-light navbar-expand-lg fixed-top">
      <a href="#" className="navbar-brand">
        P.ink'с
      </a>

      <i
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        className="ri-more-2-fill"
      ></i>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto">
          <li className="navbar-item">
            <a href="#aboutMe" className="nav-link">
              about
            </a>
          </li>
          <li className="navbar-item">
            <a href="#workSection" className="nav-link">
              work
            </a>
          </li>
          <li className="navbar-item">
            <a href="#faq" className="nav-link">
              faq
            </a>
          </li>
          <li className="navbar-item">
            <a href="#contactMe" className="nav-link">
              contacts
            </a>
          </li>
          <li className="booking-item navbar-item">
            <a href="#booking" className="booking-link nav-link">
              booking
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Head;

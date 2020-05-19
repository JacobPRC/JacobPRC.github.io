import React from "react";
import Search from "./Search";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = (props) => (
  // <Router>
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        Weather App
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/current-weather" className="nav-link">
              Current Weather
            </Link>
          </li>
        </ul>
        <Search searchHandler={props.searchHandler} />
      </div>
    </nav>
  </header>
);

export default Header;

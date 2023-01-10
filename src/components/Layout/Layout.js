import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Layout.scss";
const Layout = () => {
  return (
    <div className="App">
      <nav>
        <ul>
          <li className="logo">
            <Link to="/">STREAM</Link>
          </li>
          <li>
            <Link to="/security">security</Link>{" "}
          </li>
          <li>
            <Link to="/contacts">contacts</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;

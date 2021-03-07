/**
 * IN THIS COMPONENT WE ARE GONNA BE USTIZILING THE ROUTER AND MAYBE PROTECTED ROUTES
 *
 */

import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <AppBar position="relative" style={{ backgroundColor: "green" }}>
      <Toolbar>
        <p style={{ fontSize: "20px" }}>Austin Small Business</p>
        <Typography variant="h6" style={{ flexGrow: "1" }}></Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">LISTING</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/login">LOGIN</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/addlisting">ADD LISTING</Link>
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;

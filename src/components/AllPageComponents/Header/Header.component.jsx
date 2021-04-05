import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Switch from "@material-ui/core/Switch";

const HeaderComponent = ({ bool, handleChange }) => {
  return (
    <div className="site-header">
      <div className="logo">
        <img src="/images/logo.png" />
      </div>
      <div>
        <label className="switch">Lighter</label>
        <Switch
          checked={bool}
          onChange={handleChange}
          name="checkedB"
          color="primary"
        />
        <label className="switch">Darken</label>
      </div>

      <menu className="menu">
        <Link className="menu-item" to={"/home"}>
          <h4>Home</h4>
        </Link>
        <Link className="menu-item" to={"/favorites"}>
          <h4>Favorites</h4>
        </Link>
      </menu>
    </div>
  );
};

export default HeaderComponent;

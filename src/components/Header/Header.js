import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import Dropdown from "../Dropdown/Dropdown";

/**
 * @name Header
 * @function
 * @description Header component having navigation menus and category dropdown
 * @param {number} props.cartCount Contains product counts added in cart
 */

const Header = (props) => {
  return (
    <div className="topnav">
      <span>SCart</span>
      <nav className="topnav-right">
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/cart"}>
          Cart
          <FontAwesomeIcon icon={faShoppingCart} />
          {props.cartCount}
        </NavLink>
        <Dropdown />
      </nav>
    </div>
  );
};

export default Header;

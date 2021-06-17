import React from "react";
import "./styles.css";

/**
 * @name Dropdown
 * @function
 * @description Displays the category dropdown in header
 */

const Dropdown = () => {
  return (
    <div class="dropdown">
      <button class="dropbtn">Categories</button>
      <div class="dropdown-content">
        <a href="/products/category/mens">Mens</a>
        <a href="/products/category/electronics">Electronics</a>
        <a href="/products/category/jewelery">Jewelery</a>
        <a href="/products/category/womens">Womens</a>
      </div>
    </div>
  );
};
export default Dropdown;

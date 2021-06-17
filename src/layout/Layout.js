import React from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import "./styles.css";

/**
 * @name Layout
 * @function
 * @description Layout component for display header and pages
 * @param {number} props.cartCount Contains product counts added in cart
 * @param {object} props.children Contains pages for home and cart
 */

const Layout = (props) => {
  return (
    <>
      <Header cartCount={props.cartCount} />
      <main className="margin-top">{props.children}</main>
    </>
  );
};
const mapStateToProps = (state) => ({
  cartCount: state.cartCount,
});

export default connect(mapStateToProps)(Layout);

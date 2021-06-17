import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addItemToCart, removeCartItem } from "../../actions/actions";
import * as Constants from "../../config/Constants";
import "./styles.css";

/**
 * @name Card
 * @function
 * @description Displays the cards having the product details
 * @param {Object} props.product Object containing product details
 * @param {array}  Constants.CartItems Array to add and remove product
 */

const Card = (props) => {
  
  const [btnText, setbtnText] = useState("Add to Cart");

  useEffect(() => {
    if (Constants.CartItems) {
      const itemIndex = Constants.CartItems.findIndex(
        (cartItem) => cartItem.id === props.product.id
      );
      itemIndex != -1 && setbtnText("Remove");
    }
  });

  /**
   * @name cartAction
   * @function
   * @description Add or remove products from cart
   */

  function cartAction(product) {
    if (btnText === "Add to Cart") {
      props.addItemToCart(product);
    } else props.removeCartItem(product);
    setbtnText(btnText === "Add to Cart" ? "Remove" : "Add to Cart");
  }

  return (
    <div className="card">
      <img className="card-image" src={props.product.image} alt="Denim Jeans" />
      <h3>{props.product.title}</h3>
      <p className="card-price">{props.product.price}</p>
      <p className="card-desc">{props.product.description}</p>
      <button className="add-to-cart" onClick={() => cartAction(props.product)}>
        {btnText}
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addItemToCart,
      removeCartItem,
    },
    dispatch
  );

export default connect(mapDispatchToProps)(Card);

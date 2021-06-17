import React, { useState, useEffect } from "react";
import Layout from "../../layout/Layout";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { fetchCartItemsSource, clearCartItems } from "../../actions/actions";

/**
 * @name Cart
 * @function
 * @description Cart page displays list of selected products
 * @param {Array} props.cartItems Contains products list
 */

const Cart = (props) => {
  let totalPrice = 0;

  const [total, setTotal] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (props.cartItems.length === 0) {
      props.fetchCartItemsSource();
    }
    props.cartItems.map((item) => (totalPrice += item.price));
    setTotal(totalPrice.toFixed(2));
  });

  /**
   * @name checkout
   * @function
   * @description Display checkout message modal
   */

  const checkout = () => {
    setShowMessage(true);
    props.clearCartItems();
  };

  /**
   * @name closeModal
   * @function
   * @description Close checkout message modal
   */

  const closeModal = () => {
    setShowMessage(false);
  };

  const Message = () => (
    <div className="modal">
      <form class="modal-content">
        <div class="modal-container">
          <h1>Thanks...! You order will be deliver soon</h1>
          <button type="button" onClick={closeModal} className="cancel-btn">
            Okay
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <>
      <Layout>
        <div className="cart-container">
          <div className="cart-items-container">
            {!props.cartItems.length && (
              <div className="emptyCart">
                <h1>Your cart is empty...!</h1>{" "}
              </div>
            )}
            {props.cartItems.map((item) => (
              <div className="cart-item">
                <div className="cart-item-info">
                  <img
                    className="cart-item-info-image"
                    src={item.image}
                    alt="product"
                  />
                  <span>{item.title}</span>
                </div>

                <span className="cart-item-actions">
                  <span>$ {item.price}</span>
                </span>
              </div>
            ))}
          </div>
          <div className="cart-checkout-container">
            <h4 className="cart-checkout-total-items">
              Total Cart Items <FontAwesomeIcon icon={faShoppingCart} />
              <span>{props.cartItems.length}</span>
            </h4>
            <p className="cart-checkout-total-amount">
              Total:
              <span className="cart-checkout-total-amount-value">${total}</span>
            </p>
            <div className="checkout-btnContainer">
              <button className="checkout-btn" onClick={checkout}>
                Checkout
              </button>
            </div>
            {showMessage ? <Message /> : null}
          </div>
        </div>
      </Layout>
    </>
  );
};
const mapStateToProps = (state) => ({
  cartItems: state.cartItems,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchCartItemsSource,
      clearCartItems,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

import * as Constants from "../config/Constants";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export const FETCH_CARTITEMS = "FETCH_CARTITEMS";
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";

export function fetchProducts(products) {
  return {
    type: FETCH_PRODUCTS,
    payload: products,
  };
}

export function fetchProductsSource() {
  return (dispatch) => {
    fetch(Constants.Base_Url + "/products")
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchProducts(json));
      });
  };
}

export function fetchProductCategory(pageName) {
  return (dispatch) => {
    fetch(Constants.Base_Url + "/products/category/" + pageName)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchProducts(json));
      });
  };
}

export function addToCart(product) {
  return {
    type: ADD_ITEM_TO_CART,
    payload: product,
  };
}

export function addItemToCart(product) {
  return (dispatch) => {
    Constants.CartItems.push(product);
    dispatch(fetchCartItems(Constants.CartItems));
  };
}

export function removeFromCart(item) {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: item,
  };
}

export function removeCartItem(product) {
  return (dispatch) => {
    const itemIndex = Constants.CartItems.findIndex(
      (cartItem) => cartItem.id === product.id
    );
    itemIndex != -1 && Constants.CartItems.splice(itemIndex, 1);
    dispatch(fetchCartItems(Constants.CartItems));
  };
}

export function fetchCartItems(cartItems) {
  return {
    type: FETCH_CARTITEMS,
    payload: cartItems,
  };
}

export function fetchCartItemsSource() {
  return (dispatch) => dispatch(fetchCartItems(Constants.CartItems));
}

export function clearCartItems() {
  Constants.CartItems.splice(0, Constants.CartItems.length);
  return (dispatch) => dispatch(fetchCartItems(Constants.CartItems));
}

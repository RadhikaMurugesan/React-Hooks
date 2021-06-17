import { FETCH_PRODUCTS, FETCH_CARTITEMS } from "../actions/actions";

const initialState = {
  products: [],
  cartItems: [],
  cartCount: "",
};

export default function sourceReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case FETCH_CARTITEMS:
      return {
        ...state,
        cartItems: action.payload,
        cartCount: action.payload.length,
      };

    default:
      return state;
  }
}

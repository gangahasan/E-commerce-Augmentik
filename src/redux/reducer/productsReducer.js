import { ADDTO_WISHLIST,ADD_TO_CART,REMOVE_FROM_CART, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from "../actions/productactions";
const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
const initState = {
  products: [],
  loading: false,
  error: null,
  wishlist:[],
  cart:storedCart,
};
export const productsReducer=(state=initState,action)=>{
    switch (action.type) {
      case FETCH_PRODUCTS_REQUEST:
        return { ...state, loading: true, error: null };

      case FETCH_PRODUCTS_SUCCESS:
        // console.log("Fetched Books Data:", action.payload);
        return { ...state, products: action.payload, loading: false };

      case FETCH_PRODUCTS_FAILURE:
        return { ...state, loading: false, error: action.payload };

      case ADDTO_WISHLIST:
        return {
          ...state,
          wishlist: action.payload,
        };
      case ADD_TO_CART:
        return { ...state, cart: action.payload };

      case REMOVE_FROM_CART:
        return { ...state, cart: action.payload };

      default:
        return state;
    }

}

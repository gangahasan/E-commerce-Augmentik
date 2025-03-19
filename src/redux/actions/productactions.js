import axios from "axios";

export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";
export const ADDTO_WISHLIST = "ADDTO_WISHLIST";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";


export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });
    const response = await axios.get(
      "https://e-commerce-augmentik-default-rtdb.firebaseio.com/products.json"
    );
    // console.log(response, "response");
    const products = Object.entries(response.data).map(([id, productdata]) => ({
      id,
      ...productdata,
    }));
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: products });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
  }
};

export const addtoWishlist = (product) => (dispatch) => {
  const existingWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  // Check if product is already in the wishlist
  const isDuplicate = existingWishlist.some((item) => item.id === product.id);

  if (!isDuplicate) {
    const updatedWishlist = [...existingWishlist, product];
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    dispatch({ type: ADDTO_WISHLIST, payload: updatedWishlist });
    console.log("Product added to wishlist");
  } else {
    console.log("Product already in wishlist");
  }
};


// Add to Cart Action
export const addToCart = (product) => async (dispatch) => {
  // Retrieve current cart from localStorage
  const cartlist = JSON.parse(localStorage.getItem("cart")) || [];
  console.log("Current cartlist from localStorage:", cartlist);

  // Check if product is already in the cart
  const updatedcartlist = cartlist.some((item) => item.id === product.id)
    ? cartlist
    : [...cartlist, product];

  console.log("Updated cartlist to be saved:", updatedcartlist);

  // Save updated cart to localStorage (using key "cart")
  localStorage.setItem("cart", JSON.stringify(updatedcartlist));

  // Dispatch action to update Redux state
  dispatch({ type: ADD_TO_CART, payload: updatedcartlist });

  console.log("Product added to Cart");
};



// Remove from Cart Action
export const removeFromCart = (product) => async (dispatch) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  console.log("Cart before removal:", cart);

  const updatedCart = cart.filter((item) => item.id !== product.id);
  console.log("Cart after removal:", updatedCart);

  localStorage.setItem("cart", JSON.stringify(updatedCart));
  console.log("Item removed from cart");

  dispatch({ type: REMOVE_FROM_CART, payload: updatedCart });
};


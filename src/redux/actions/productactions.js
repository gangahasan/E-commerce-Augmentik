import axios from "axios";

export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

export const ADDTO_WISHLIST = "ADDTO_WISHLIST";

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

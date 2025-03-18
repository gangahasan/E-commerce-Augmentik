import axios from "axios";

export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

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

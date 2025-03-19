import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { removeFromCart } from "../redux/actions/productactions";
import "../styles/cart.css"

const Cart = () => {
  const cart = useSelector((state) => state.products.cart) || [];

  let cartprice = cart.reduce((sum, item) => {
    // Convert price to string then remove any non-digit/non-decimal characters
    const priceStr = String(item?.price);
    const numericPrice = Number(priceStr.replace(/[^\d.]/g, ""));
    return sum + numericPrice * (item?.quantity || 1);
  }, 0);


   // Fixed delivery fee (e.g., 5.00)
   let deliveryFee = 5.0;
   let total = cartprice + deliveryFee;

  console.log(cart,"from cart page")
  const dispatch = useDispatch();

   const handleRemove = (product) => {
     dispatch(removeFromCart(product));
   };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length > 0 ? (
        <div>
          <div className="cart-container">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <div>
                  <img src={item.image} alt={item.title} />
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>Price: ${item.price}</p>
                  <p>Rating: {item.rating}</p>
                </div>
                <button onClick={() => handleRemove(item)}>Remove</button>
              </div>
            ))}
          </div>

          <div className="order-summary">
            <h2>Order Summary</h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>
                Cart price: <span style={{ color: "red" }}>${cartprice}</span>
              </p>
              <p>
                delevery Fee: <span style={{ color: "red" }}>$5</span>
              </p>
              <hr />
              <p>
                Total Price:<span style={{ color: "red" }}>${total}</span>
              </p>
            </div>
            <button>Proceed To Checkout</button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;

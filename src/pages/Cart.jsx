import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { removeFromCart } from "../redux/actions/productactions";
import "../styles/cart.css"

const Cart = () => {
  const cart = useSelector((state) => state.products.cart) || [];
  console.log(cart,"from cart page")
  const dispatch = useDispatch();

   const handleRemove = (product) => {
     dispatch(removeFromCart(product));
   };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length > 0 ? (
        <div className="cart-container">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <p>Price: ${item.price}</p>
              <p>Rating: {item.rating}</p>
              <button onClick={() => handleRemove(item)}>
                Remove from cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;

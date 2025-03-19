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
                <div>
                    <img src={item.image} alt={item.title} />
                </div>
                <div>
                    <h4>{item.title}</h4>
                    <p>Price: ${item.price}</p>
                    <p>Rating: {item.rating}</p>
                </div>    
              <button onClick={() => handleRemove(item)}>
                Remove
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

import React from "react";
import "../styles/wishlist.css"
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/productactions";

const Wishlist = () => {
  // Fetch wishlist data from localStorage
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const dispatch = useDispatch();

    const handleAddToCart = (product) => {
          dispatch(addToCart(product));
          alert("item added to cart")
        };
  return (
    <div className="wishlist">
      <h1>Your Wishlist</h1>
      {wishlist.length > 0 ? (
        <div className="wishlist-container">
          {wishlist.map((item, index) => (
            <div key={index} className="wishlist-item">
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <p>Price: {item.price}</p>
              <p>Rating: ⭐ {item.rating}</p>
              <button onClick={() => handleAddToCart(item)}>
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default Wishlist;

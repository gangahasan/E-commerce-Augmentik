import React from 'react'
import "../styles/nav.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FaCartShopping } from "react-icons/fa6";
import { logout } from '../redux/actions/authactions'

const Navbar = () => {
    const user = useSelector((state)=>state.auth.user);
    const cart = useSelector((state)=>state.products.cart);
    const wishlist = useSelector((state) => state.products.wishlist);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout=()=>{
        dispatch(logout());
        navigate("/")
    }
  return (
    <div className="navbar">
      <div className="nav-left">
        <NavLink to="/products" className="logo">
          Shop Mart
        </NavLink>
      </div>
      <div className="nav-right">
        {/* <NavLink to="/products" className="navlinks"> */}
        {/* Store */}
        {/* </NavLink> */}
        <NavLink to="/wishlist" className="navlinks">
          <img
            src="../src/assets/heart.png"
            width="30px"
            height="30px"
            alt="wishlist Icon"
            className="img"
          />
          <span id="wishlist-count">{wishlist.length}</span>
        </NavLink>
        <NavLink to="/cart" className="navlinks">
          <img
            src="../src/assets/shopping-cart.png"
            width="30px"
            height="30px"
            alt="Cart Icon"
            className="img"
          />
          <span id="cart-count">{cart.length}</span>
        </NavLink>
        {!user ? (
          <NavLink
            to="/"
            className="navlinks"
            style={{ color: "rgb(245, 95, 95)" }}
          >
            Login
          </NavLink>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
      </div>
    </div>
  );
}

export default Navbar
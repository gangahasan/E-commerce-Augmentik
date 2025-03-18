import React from 'react'
import "../styles/nav.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <NavLink to="/products" className="logo">Shop Mart</NavLink>
      </div>
      <div className="nav-right">
        {/* <NavLink to="/products" className="navlinks"> */}
          {/* Store */}
        {/* </NavLink> */}
        <NavLink to="/wishlist" className="navlinks">
          WishList
        </NavLink>
        <NavLink to="/cart" className="navlinks">
          Cart
        </NavLink>
        <NavLink to="/" className="navlinks">
          Login
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar
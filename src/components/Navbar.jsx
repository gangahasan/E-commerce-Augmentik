import React from 'react'
import "../styles/nav.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/actions/authactions'

const Navbar = () => {
    const user = useSelector((state)=>state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout=()=>{
        dispatch(logout());
        navigate("/")
    }
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
        {!user?(<NavLink to="/" className="navlinks">
          Login
        </NavLink>):(
            <button onClick={handleLogout}>Logout</button>
        )}
        
      </div>
    </div>
  );
}

export default Navbar
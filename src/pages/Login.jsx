import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import { login } from "../redux/actions/authactions";
import "../styles/login.css"

const Login = () => {
const user = useSelector((state)=> state.auth.user);
console.log(user,"user from loginpage")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, "login");

    dispatch(login(email, password));
    navigate("/products");
    alert("login successful");
  };
  return (
    <div>
    
        <div className="user-login">
          <form onSubmit={handleLogin}>
            <h1>LogIn</h1>
            <input
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input type="submit" value="Login" />
          </form>
          <h3>New user can <Link to="/register">Register</Link> here</h3>
        </div>
    
    </div>
  );
};

export default Login;

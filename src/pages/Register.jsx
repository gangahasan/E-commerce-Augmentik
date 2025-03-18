import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/actions/authactions";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSignup = () => {
    dispatch(register(email, password));
    alert("Sign Up Success");
    navigate("/login");
  };

  return (
    <div>
        <form>
            <h1>Register</h1>
            <input
            type="text"
            value={email}
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            <input
                type="password"
                value={password}
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button onClick={handleSignup} style={{backgroundColor:"blueviolet",color:"white",border:"none",padding:"10px",borderRadius:"8px",margin:'20px'}}>SignUp</button>
        </form>
      
    </div>
  );
};

export default Register;

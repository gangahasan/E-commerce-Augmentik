
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
export const PrivateRoute=({children})=>{
    const user = useSelector((state)=>state.auth.user);
    return user ? children : <Navigate to="/" />;

}
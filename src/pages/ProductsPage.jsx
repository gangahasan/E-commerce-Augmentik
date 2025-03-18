import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/actions/productactions';
import "../styles/products.css"
import { logout } from '../redux/actions/authactions';
import { useNavigate } from 'react-router-dom';

const ProductsPage = () => {
    const products = useSelector((state)=>state.products.products);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(fetchProducts());
    },[dispatch])

    const handleLogout=()=>{
        dispatch(logout());
        navigate("/");
    }
  return (
    <div>
        <button style={{float:"right"}} onClick={handleLogout}>logout</button>
      <div className="productCont">
        {products.length > 0 &&
          products.map((product, index) => {
            return (
              <div key={index} className="product">
                <img src={product.image} />
                <h2>Title: {product.title}</h2>
                <p>Price:{product.price}</p>
                <p>Rating:{product.rating}</p>
                <div className="buttons">
                  <button>Add to WishList</button>
                  <button>Add To Cart</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ProductsPage
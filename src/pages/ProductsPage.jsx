import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, addtoWishlist, fetchProducts } from '../redux/actions/productactions';
import "../styles/products.css"
import { useNavigate } from 'react-router-dom';

const ProductsPage = () => {
    const products = useSelector((state)=>state.products.products);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(fetchProducts());
    },[dispatch])

    const handleAddtoWishlist=(product)=>{
        dispatch(addtoWishlist(product));

    }
    const handleAddToCart = (product) => {
      console.log("Add to Cart clicked", product);
      dispatch(addToCart(product));
      alert("item added to cart")
    };


    
  return (
    <div>
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
                  <button onClick={() => handleAddtoWishlist(product)}>
                    Add to WishList
                  </button>
                  <button onClick={() => handleAddToCart(product)}>
                    Add To Cart
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ProductsPage
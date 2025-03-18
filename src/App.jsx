import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import Home from './pages/Home'
import Login from './pages/Login'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import { PrivateRoute } from './components/PrivateRoute'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/wishlist" element={
          <PrivateRoute><Wishlist /></PrivateRoute>}/>
        <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  )
}

export default App
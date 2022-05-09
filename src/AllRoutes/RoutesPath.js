import React from 'react'
import {
  Routes,
  Route
} from "react-router-dom";
import { Homepage ,
  LandingPage ,
  Logout ,
  ProductListing ,
  SignIn ,
  Signup,
Cart,
Wishlist} from '../pages/index';
import Mockman from "mockman-js";

function RoutesPath() {
  return (
    <>
      <Routes>
      <Route path="/mockman" element={ <Mockman />}></Route> 
      <Route path="/cart" element={<Cart />}></Route> 
      <Route path="/wishlist" element={<Wishlist />}></Route>
      <Route path="/signin" element={ <SignIn /> }></Route>
      <Route path="/logout" element={<Logout/>}></Route>
      <Route path="/signup" element={ <Signup /> }></Route>
      <Route path="/productListing" element={<ProductListing/>} />
      <Route  path="/products" element={<Homepage />} />
      <Route exact path="/" element={ <LandingPage /> }></Route>
      
    </Routes>

    </>
  )
}

export default RoutesPath
import React from 'react'
import {
  Routes,
  Route
} from "react-router-dom";
import Homepage from '../pages/Homepage-components/Homepage';
import ProductListing from '../pages/ProductListingPage/ProductListing';
import Mockman from "mockman-js";
import LandingPage from '../pages/landingPage/LandingPage';
import SignIn from '../pages/SignIn/SignIn';
import Signup from '../pages/Signup/Signup';
import Logout from '../pages/Logout/Logout';

function RoutesPath() {
  return (
    <>

      <Routes>
      <Route path="/mockman" element={ <Mockman />}></Route>  
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
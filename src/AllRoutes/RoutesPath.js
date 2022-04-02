import React from 'react'
import {
  Routes,
  Route
} from "react-router-dom";
import Homepage from '../Homepage-components/Homepage';
import ProductListing from '../ProductListingPage/ProductListing';

function RoutesPath() {
  return (
    <>
      <Routes>
      <Route path="/productListing" element={<ProductListing/>} />
      <Route exact path="/" element={<Homepage />} />
    </Routes>

    </>
  )
}

export default RoutesPath
import React from 'react'
import {  Navbar } from '../Homepage-components'
import SideBar from '../SideBar/SideBar'
import ProductCard from '../ProductListingPage/ProductCards/ProductCard'


const  ProductListing = () => {
  return (
    <div>
      <Navbar/>
      <SideBar/>
      <ProductCard/>
    </div>
    
  )
}

export {ProductListing}
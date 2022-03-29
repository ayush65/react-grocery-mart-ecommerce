import React from 'react'
import {
  Navbar,
  Carousel,
  Categorycard,
  Footer
  } from '../Homepage-components/index'
  
function Homepage() {
  return (
    <>
        <Navbar />
        <Carousel />
        <Categorycard/>
        <Footer />
    </>
    
  )
}

export default Homepage
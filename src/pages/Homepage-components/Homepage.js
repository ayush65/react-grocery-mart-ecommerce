import React from 'react'
import {
  Navbar,
  Carousel,
  Categorycard,
  Footer
  } from '../Homepage-components/index'
  
const  Homepage = () => {
  return (
    <>
        <Navbar />
        <Carousel />
        <Categorycard/>
        <Footer />
    </>
    
  )
}

export {Homepage}
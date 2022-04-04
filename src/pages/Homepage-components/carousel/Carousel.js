import React from 'react'
import { Link } from 'react-router-dom'
import './carousel.css'


const  Carousel = () => {
  return (
    <>
    <div className="Banner-image">

    </div>
    <div className="Banner-container">
      <h1>Grocery Mart</h1>
      <h2>100% Fresh And Organic</h2>
      <Link to="/productListing" className="btn btn-banner">Shop Now</Link>

    </div>

    </>
  )
}

export default Carousel
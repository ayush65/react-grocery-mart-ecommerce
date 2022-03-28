import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Homepage/carousel/Banner'
import CategoryCard from './category-card/Categorycard'
import Footer from './Footer/Footer'

function Homepage() {
  return (
    <>

        <Navbar />
        <Banner />
        <CategoryCard/>
        <Footer />

    </>
    
  )
}

export default Homepage
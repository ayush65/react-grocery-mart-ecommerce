import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../Homepage-components'
import './LandingPage.css'

function LandingPage() {
  return (
    <>
    <Navbar/>

     <div className="landing-page-component">
        <h1 className="landing-page-heading">Grocery Mart</h1>
        <h1 className="landing-page-content">Your One stop destination for your everyday needs.</h1>
        <Link to="/signin" className="button simple-button" >Login</Link>
        <Link to="" className="button primary-outline" >Sign up</Link> 

        </div>
    </>
  )
}

export default LandingPage

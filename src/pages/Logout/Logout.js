import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../Homepage-components'
import './Logout.css'

const Logout = () => { 
  return (
    <>
    <Navbar/>
    <div className="logout-page-component">
        <h2 className="logout-heading">Are you sure you want to logout?</h2>
        <Link className="button simple-button btn-logout" to="/">Logout</Link>
    </div>
    </>
  )
}

export {Logout}
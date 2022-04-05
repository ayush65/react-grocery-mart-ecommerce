import React from 'react'
import "./Cart.css"
import { Navbar } from '../Homepage-components'
import CardCart from './CartCard/CardCart'
import { useFilter } from "../../context/filter-context";


const  Cart = () => {

  const { state } = useFilter();
  const cartItems = state.product.filter((item) => item.isAddedToCart);



  return (
    <>
    <Navbar/>

    <h1 className="cart-items-heading">My cart ({cartItems.length})</h1>
    {cartItems.map((item) => (
            <CardCart item={item} />
          ))}
    
    </>
  )
}

export  {Cart}
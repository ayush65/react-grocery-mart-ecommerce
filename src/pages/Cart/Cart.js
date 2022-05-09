import React from 'react'
import "./Cart.css"
import { Navbar } from '../Homepage-components'
import CardCart from './CartCard/CardCart'
import { useFilter } from "../../context/filter-context";
import { useCart } from '../../context/cart-context';


const  Cart = () => {

  const { state } = useFilter();
  const cartItems = state.product.filter((item) => item.isAddedToCart);
  const { statetotal } = useCart();


  return (
    <>
    <Navbar/>

    <h1 className="cart-items-heading">My cart </h1>
    {cartItems.map((item) => (
            <CardCart item={item} />
          ))}

<div className="cart-total">
  
      <h1 className="card-Heading">Price Items</h1>
      <h1 className="para-item">Number of the item </h1>
      <h1 className="price-item">{statetotal.count} </h1>
      <div className="div-total">
      <h1 className="para-item item"> total price</h1>
      <h1 className="price-item item">Rs{statetotal.totalprice}</h1>
      </div>
      </div>  
    
    </>
    
  )
}

export  {Cart}
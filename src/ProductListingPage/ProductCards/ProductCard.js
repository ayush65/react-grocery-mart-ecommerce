import React from 'react'
import axios from "axios";
import { useState,useEffect } from "react";
import './ProductCard.css';

function ProductCard() {



  const[data,setData]=useState([])

  async function getCategories() {
    try {
      const response = await axios.get("/api/products");
      const res = response.data.products;
      setData(res);

    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => getCategories(), []);

  return (
    <div>

<div className="product-container">
<div className="card-grid">{
            data.map((item) => {
              return <div key={item._id} className="card card-shadow">
                <div className="card-header card-image">
                  <img src={item.imgUrl} alt={item.alt}/>
                </div>
                <h1 className="card-body">
                  {item.itemName}
                </h1>
                <h1 className="card-body">
                  Rs  {item.price}
                </h1>
                <button className="btn-product-card">Add To Cart</button>
                <button className="btn-product-card">Add To Wishlist</button>
              </div>
            })
    }
    </div>

</div>

    </div>
  )
}

export default ProductCard
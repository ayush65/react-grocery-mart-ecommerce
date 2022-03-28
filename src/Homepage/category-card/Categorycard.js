import React from 'react'
import './Categorycard.css'
import axios from "axios";
import { useState,useEffect } from "react";


function Categorycard() {

  const[data,setData]=useState([])

  async function getCategories() {
    try {
      const response = await axios.get("/api/categories");
      const res = response.data.categories;
      setData(res);

    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => getCategories(), []);

  return (
    <div className="Categorycard">
  <h1 className="Categorycard-heading">Categories</h1>
  <div className="card-grid">{
            data.map((item) => {
              return <div className="card card-shadow">
                <div className="card-header card-image">
                  <img src={item.img}/>
                </div>
                <h1 className="card-body">
                  {item.Description}
                </h1>
              </div>
            })
    }
    </div>
    </div>
  )
}

export default Categorycard
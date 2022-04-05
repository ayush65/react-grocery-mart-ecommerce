import React from 'react'
import './ProductCard.css';
import { useFilter } from "../../../context/filter-context";

function ProductCard() {

  const { State } = useFilter();
  const { Dispatch } = useFilter();

  return (
    <div>
<div className="product-container">
<div className="card-grid">{
            State.product.map((item) => {
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
                
                <button
        onClick={() => Dispatch({
                type: "ADD_TO_CART",
                payload: { itemId: item._id },
              })
        }
        className="btn-product-card"
      >Add To Cart
      </button>
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
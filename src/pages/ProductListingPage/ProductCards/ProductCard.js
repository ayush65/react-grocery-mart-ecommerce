import React from 'react'
import './ProductCard.css';
import { useFilter } from "../../../context/filter-context";

function ProductCard() {

  const { state } = useFilter();
  const { dispatch } = useFilter();

  return (
    <div>
<div className="product-container">
<div className="card-grid">{
            state.product.map((item) => {
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
        onClick={() => dispatch({
                type: "ADD_TO_CART",
                payload: { itemId: item._id },
              })
        }
        className="btn-product-card"
      >Add To Cart
      </button>
      <button
          onClick={() =>
            dispatch({
              type: "ADD_TO_WISHLIST",
              payload: { itemId: item._id },
            })
          }
          className="btn-product-card"
        >Add to wishlist
        </button>
              </div>
            })
    }
    </div>
</div>
</div>


  )
}

export default ProductCard
import React from 'react'
import { useFilter } from "../../../context/filter-context";


function WishlistCard({item}) {
    const { dispatch } = useFilter();
    const { _id, itemName, price, imgUrl, alt} = item;

  return (
    <div>
 <div className="cart-container">
    <div className="card-grid">
              <div key={_id} className="card card-shadow cart-card" >
                <div className="card-header card-image cart-image">
                  <img src={imgUrl} alt={alt}/>
                </div>
                <h1 className="card-body cart-item-align">
                  {itemName}
                </h1>
                <h1 className="card-body cart-item-align">
                  Rs{price}
                </h1>

                <button className="btn-product-card cart-btn"
                          onClick={() =>
                            dispatch({
                              type: "ADD_TO_CART",
                              payload: { itemId: _id },
                            })
                          }>Add To Cart</button>

              </div>
    </div>

</div>
    </div>
  )
}

export default WishlistCard
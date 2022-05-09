import React,{ useContext , useState } from 'react'
import { useFilter } from "../../../context/filter-context";
import "./CartCard.css"
import { useCart } from '../../../context/cart-context';

export const reducerFunc = (statetotal , action ) => {
  switch(action.type) {
    case 'increment': {
      return {
        ...statetotal, 
        count: statetotal.count + 1,
        totalprice : Number(statetotal.totalprice) + Number(action.payload),
      }
    }
    case 'decrement': {
        return {
          ...statetotal, 
          count: statetotal.count - 1,
          totalprice : Number(statetotal.totalprice) - Number(action.payload),
      }
    }
    default: return statetotal
    
  }
}

export const initialstate = {
  count: 0,
  totalprice : 0,
};

function CardCart({item}) {
    const { dispatch } = useFilter();
    const { _id, itemName, price, imgUrl, alt} = item;

    const { stateDispatch } = useCart();

    const [total , setTotal] = useState(0);

  return (
    <>
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
                <div className="card-items-number">
                    <button onClick={() => stateDispatch({ type : 'increment' , payload : price})} className="cart-items-button btn-gap">+</button>
                    
                    <button onClick={() => stateDispatch({ type : 'decrement'  , payload : price})} className="cart-items-button">-</button>
                </div>

                <button className="btn-product-card cart-btn"
                          onClick={() =>
                            dispatch({
                              type: "ADD_TO_WISHLIST",
                              payload: { itemId: _id },
                            })
                          }>Add To Wishlist</button>
                <button
                   onClick={() =>
                      dispatch({
                       type: "REMOVE_FROM_CART",
                        payload: { itemId: _id },
                       })
                    }
                     class="btn-product-card cart-btn"
                  >Remove from Cart</button>

              </div>
    </div>
    


</div> 
    </>
  )
}

export default CardCart 
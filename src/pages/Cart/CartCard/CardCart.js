import React,{useState} from 'react'
import { useFilter } from "../../../context/filter-context";
import "./CartCard.css"

function CardCart({item}) {
    const { Dispatch } = useFilter();
    const { _id, itemName, price, imgUrl, alt} = item;
    const [itemsNumber , SetItemNumber] = useState(1);

    const addItems = () => {
        SetItemNumber(itemsNumber + 1);
    }

    const removeItems = () => {
        if(itemsNumber == 1){
            return itemsNumber;
        }
        SetItemNumber(itemsNumber - 1);
    }
    
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
                    <button onClick={() => addItems()} className="cart-items-button">+</button>
                    <h1 className="cart-item-number-text">  {itemsNumber}  </h1>
                    <button onClick={() => removeItems()} className="cart-items-button">-</button>
                </div>

                <button className="btn-product-card cart-btn">Add To Wishlist</button>
        <button
          onClick={() =>
            Dispatch({
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
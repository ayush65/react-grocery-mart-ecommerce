import React from "react";
import './SideBar.css'
import { AiTwotoneStar } from "react-icons/ai";
import { useFilter } from "../context/filter-context";


function SideBar() {

  const { State, Dispatch } = useFilter();
  const { price, category, sort } = State;

  return (
    <>

        <div className="main-menu">

        <h1>Sort by Price</h1>
        <ul className="sidebar-components-margin">
          <li>
        <label
          onClick={() =>
            Dispatch({ type: "SORT_FILTER", payload: { sort: "LOW_TO_HIGH" } })
          }
          className="radio"
        >
          <input
            type="radio"
            value="highToLow"
            name="price"
            checked={sort === "LOW_TO_HIGH"}
          />
          <span className="radio_text">Price- High to low</span>
        </label>
          
            </li>
              <li>
        <label
          onClick={() =>
            Dispatch({ type: "SORT_FILTER", payload: { sort: "HIGH_TO_LOW" } })
          }
          className="radio"
        >
          <input
            type="radio"
            value="lowToHigh"
            name="price"
            checked={sort === "HIGH_TO_LOW"}
          />
          <span className="radio_text">Price: Low to High</span>
        </label>
        </li>

        </ul>



        <h1 className="sidebar-margin">Price Range</h1>
        <ul className="sidebar-components-margin">
        <input
              onChange={(e) => {
                Dispatch({
                  type: "RANGE_FILTER",
                  payload: { maxPrice: e.target.value },
                });
              }}
              type="range"
              min="0"
              max="30"
              value={price}
              className="rangeSlider"
            />

        </ul>

        <h1 className="sidebar-margin">Rating</h1>
        <ul className="sidebar-components-margin">
        <li>
        <span
              onClick={() =>
                Dispatch({
                  type: "RATING_FILTER",
                  payload: { rating: 1 },
                })
              }
              
            >
              1 <AiTwotoneStar /> 
           </span>
           </li>
           <li>
        <span
              onClick={() =>
                Dispatch({
                  type: "RATING_FILTER",
                  payload: { rating: 2 },
                })
              }
              
            >
              2 <AiTwotoneStar /> <AiTwotoneStar /> 
           </span>
           </li>
        
        <li>
        <span
              onClick={() =>
                Dispatch({
                  type: "RATING_FILTER",
                  payload: { rating: 3 },
                })
              }
              
            >
              3 <AiTwotoneStar /> <AiTwotoneStar /> <AiTwotoneStar /> 
           </span>
           </li>
        <li>
        <span
              onClick={() =>
                Dispatch({
                  type: "RATING_FILTER",
                  payload: { rating: 4 },
                })
              }
              
            >
              4 <AiTwotoneStar /> <AiTwotoneStar /> <AiTwotoneStar /> <AiTwotoneStar /> 
           </span>
           </li>

            <li>
        <span
              onClick={() =>
                Dispatch({
                  type: "RATING_FILTER",
                  payload: { rating: 5 },
                })
              }
              
            >
              5 <AiTwotoneStar /> <AiTwotoneStar /> <AiTwotoneStar /> <AiTwotoneStar /> <AiTwotoneStar />
           </span>
           </li>
        </ul>




        <h1 className="sidebar-margin">Category</h1>
        <ul className="sidebar-components-margin">
        <li>
        <label  className="sidebar-price-ranging">
          <input
            onChange={() =>
              Dispatch({
                type: "TOGGLE_CATEGORY",
                payload: { category: "bakery" },
              })
            }
            type="checkbox"
            name="Bakery"
            value="Bakery"
            checked={category.includes("bakery")}
          />
          <span className="chechbox_text">Bakery</span>
        </label>
        </li>

        <li>
        <label  className="sidebar-price-ranging" >
          <input
            onChange={() =>
              Dispatch({
                type: "TOGGLE_CATEGORY",
                payload: { category: "vegetable" },
              })
            }
            type="checkbox"
            name="vegetables"
            value="vegetables"
            checked={category.includes("vegetable")}
          />
          <span className="chechbox_text">Fruits And Vegetables</span>
        </label>
        </li>



        <li>
        <label   className="sidebar-price-ranging">
          <input
            onChange={() =>
              Dispatch({
                type: "TOGGLE_CATEGORY",
                payload: { category: "juice" },
              })
            }
            type="checkbox"
            name="Juice"
            value="Juice"
            checked={category.includes("juice")}
          />
          <span className="chechbox_text">Juice</span>
        </label>
        </li>

        <li>
        <label  className="sidebar-price-ranging">
          <input
            onChange={() =>
              Dispatch({
                type: "TOGGLE_CATEGORY",
                payload: { category: "Home" },
              })
            }
            type="checkbox"
            name="Home"
            value="Home"
            checked={category.includes("Home")}
          />
          <span className="chechbox_text">Home Essential</span>
        </label>
        </li>

        <li>
        <label  className="sidebar-price-ranging">
          <input
            onChange={() =>
              Dispatch({
                type: "TOGGLE_CATEGORY",
                payload: { category: "breakfast" },
              })
            }
            type="checkbox"
            name="breakfast"
            value="breakfast"
            checked={category.includes("breakfast")}
          />
          <span className="chechbox_text">breakfast Essential</span>
        </label>
        </li>
  

        <li>
        <label  className="sidebar-price-ranging">
          <input
            onChange={() =>
              Dispatch({
                type: "TOGGLE_CATEGORY",
                payload: { category: "snacks" },
              })
            }
            type="checkbox"
            name="snacks"
            value="snacks"
            checked={category.includes("snacks")}
          />
          <span className="chechbox_text">Snacks</span>
        </label>
        </li>


        <li>
        <label   className="sidebar-price-ranging">
          <input
            onChange={() =>
              Dispatch({
                type: "TOGGLE_CATEGORY",
                payload: { category: "healthy" },
              })
            }
            type="checkbox"
            name="healthy"
            value="healthy"
            checked={category.includes("healthy")}
          />
          <span className="chechbox_text">Healthy</span>
        </label>
        </li>

        <li>
        <label  className="sidebar-price-ranging">
          <input
            onChange={() =>
              Dispatch({
                type: "TOGGLE_CATEGORY",
                payload: { category: "pulse" },
              })
            }
            type="checkbox"
            name="pulse"
            value="pulse"
            checked={category.includes("pulse")}
          />
          <span className="chechbox_text">Rice And Dal</span>
        </label>
        </li>
        </ul>


       
    </div>


    </>
  )
}

export default SideBar
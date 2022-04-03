import React from "react";
import './SideBar.css'


function SideBar() {


  return (
    <>

        <div className="main-menu">

        


        <h1>Sort by Price</h1>
        <ul className="sidebar-components-margin">
        <li>
            <input type="radio" className="sidebar-price sidebar-price-low-to-high" name="price" value="price-sort"/>
            <label >Low to High</label>
        </li>

        <li>
            <input type="radio" className="sidebar-price sidebar-price-high-to-low" name="price" value="price-sort"/>
            <label>High to Low</label>
        </li>
        </ul>

        <h1 className="sidebar-margin">Price Range</h1>
        <ul className="sidebar-components-margin">
        <li>
        <input type="radio" className="sidebar-price-ranging price-range-below-100" name="price-ranging" value="price-range"/>
        <label >Below 100</label>
        </li>

        <li>
        <input type="radio" className="sidebar-price-ranging price-range-btw-100-500" name="price-ranging" value="price-range"/>
        <label >100 to 500</label>
        </li>
        <li>
        <input type="radio" className="sidebar-price-ranging price-range-btw-500-1000" name="price-ranging" value="price-range"/>
        <label >500 to 1000</label>
        </li>
        <li>
        <input type="radio" className="sidebar-price-ranging price-range-btw-1000-1500" name="price-ranging" value="price-range"/>
        <label >1000 to 1500</label>
        </li>
        <li>
        <input type="radio" className="sidebar-price-ranging price-range-btw-1500-2000" name="price-ranging" value="price-range"/>
        <label >1500 to 2000</label>
        </li>
              
        <li>
        <input type="radio" className="sidebar-price-ranging price-range-btw-2000-2500" name="price-ranging" value="price-range"/>
        <label >2000 to 2500</label>
        </li>
        <li>
        <input type="radio" className="sidebar-price-ranging price-range-above-2500" name="price-ranging" value="price-range"/>
        <label >2500 and Above</label>
        </li>
        </ul>




        <h1 className="sidebar-margin">Category</h1>
        <ul className="sidebar-components-margin">
        <li>
        <input type="checkbox" className="sidebar-price-ranging price-range-below-100" name="price-ranging" value="price-range"/>
        <label >Fruits And Vegetables</label>
        </li>

        <li>
        <input type="checkbox" className="sidebar-price-ranging price-range-btw-100-500" name="price-ranging" value="price-range"/>
        <label >Dairy And Egg</label>
        </li>
        <li>
        <input type="checkbox" className="sidebar-price-ranging price-range-btw-500-1000" name="price-ranging" value="price-range"/>
        <label >Breakafast And instant food</label>
        </li>
        <li>
        <input type="checkbox" className="sidebar-price-ranging price-range-btw-1000-1500" name="price-ranging" value="price-range"/>
        <label >Bakery Products</label>
        </li>
        <li>
        <input type="checkbox" className="sidebar-price-ranging price-range-btw-1500-2000" name="price-ranging" value="price-range"/>
        <label >Snacks</label>
        </li>
              
        <li>
        <input type="checkbox" className="sidebar-price-ranging price-range-btw-2000-2500" name="price-ranging" value="price-range"/>
        <label >Cold drinks and juices</label>
        </li>
        <li>
        <input type="checkbox" className="sidebar-price-ranging price-range-above-2500" name="price-ranging" value="price-range"/>
        <label >Sweets</label>
        </li>
        </ul>
  
    </div>


    </>
  )
}

export default SideBar
import React,{useState} from 'react'
import "./Navbar.css";
import { BsFillHeartFill , BsFillCartFill , BsPersonCircle} from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const  Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
     <div className="navbar-container">  
     <div className="navbar-logo">
            <h1>Grocery Mart</h1>
    </div>
    <div className={
            showMediaIcons ? "menu-link mobile-menu-link navbar-menu" : "menu-link navbar-menu"
          }>
            <ui className="navbar-list-links">
                <li className="navbar-links">
                    <a href="#" className="navbar-links">Bakery</a>
                </li>
                <li className="navbar-links">
                    <a href="#" className="navbar-links" >Fruits And Vegetables</a>
                </li>
                <li className="navbar-links">
                    <a href="#" className="navbar-links">Home Essential</a>
                </li>
            </ui>
        </div>

        <div className="navbar-components">
            <ui className="navbar-list-links-components"> 
                <li className="navbar-links icons-align">
                    <a href="#" className="icon-size"><BsFillHeartFill/></a>
                </li>
                <li className="navbar-links icons-align">
                    <a href="#" className="icon-size"><BsFillCartFill/></a>
                </li>
                <li className="navbar-links icons-align">
                    <a href="#" className="icon-size"><BsPersonCircle /></a>
                </li>
            </ui>
        </div>
        <div className="hamburger-menu">
            <a href="#" className="icon-size" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
  </div>
    </>
  )
}

export default Navbar
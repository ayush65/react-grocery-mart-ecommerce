/** @format */

import React from "react";
import "./Navbar.css";
import {
  BsFillHeartFill,
  BsFillCartFill,
  BsPersonCircle,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { useFilter } from "../../context/filter-context";

const Navbar = () => {
  const { dispatch } = useFilter();

  return (
    <>
      <div className='navbar-container'>
        <div className='navbar-logo'>
          <Link to='/' className='navbar-links-header'>
            <h1>Grocery Mart</h1>
          </Link>
        </div>
        <div>
          <ul className='navbar-list-links'>
            <li className='navbar-links'>
              <Link
                to='/productListing'
                className='navbar-links'
                onClick={() => {
                  dispatch({
                    type: "TOGGLE_CATEGORY",
                    payload: { category: "bakery" },
                  });
                }}>
                Bakery
              </Link>
            </li>
            <li className='navbar-links'>
              <Link
                to='/productListing'
                className='navbar-links'
                onClick={() => {
                  dispatch({
                    type: "TOGGLE_CATEGORY",
                    payload: { category: "vegetable" },
                  });
                }}>
                Fruits And Vegetables
              </Link>
            </li>
            <li className='navbar-links'>
              <Link
                to='/productListing'
                className='navbar-links'
                onClick={() => {
                  dispatch({
                    type: "TOGGLE_CATEGORY",
                    payload: { category: "Home" },
                  });
                }}>
                Home Essential
              </Link>
            </li>
          </ul>
        </div>

        <div className='navbar-link-componentss'>
          <ul className='navbar-list-links-components'>
            <li className='navbar-links icons-align'>
              <Link to='/wishlist' className='icon-size'>
                <BsFillHeartFill />
              </Link>
            </li>
            <li className='navbar-links icons-align'>
              <Link to='/cart' className='icon-size'>
                <BsFillCartFill />
              </Link>
            </li>
            <li className='navbar-links icons-align'>
              <Link to='/logout' className='icon-size'>
                <BsPersonCircle />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

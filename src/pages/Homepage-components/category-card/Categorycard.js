/** @format */

import React from "react";
import "./Categorycard.css";
import { Link } from "react-router-dom";
import { useFilter } from "../../../context/filter-context";
import { categories } from "../../../backend/db/categories";

const Categorycard = () => {
  const { dispatch } = useFilter();

  return (
    <div className='Categorycard'>
      <h1 className='Categorycard-heading'>Categories</h1>
      <div className='card-grid'>
        <Link
          to='/productListing'
          key={categories[0]._id}
          className='card card-shadow'
          onClick={() => {
            dispatch({
              type: "TOGGLE_CATEGORY",
              payload: { category: "vegetable" },
            });
          }}>
          <div className='card-header card-image'>
            <img src={categories[0].img} alt={categories[1].alt} />
          </div>
        </Link>

        <Link
          to='/productListing'
          key={categories[1]._id}
          className='card card-shadow'
          onClick={() => {
            dispatch({
              type: "TOGGLE_CATEGORY",
              payload: { category: "snacks" },
            });
          }}>
          <div className='card-header card-image'>
            <img src={categories[1].img} alt={categories[1].alt} />
          </div>
        </Link>
        <Link
          to='/productListing'
          key={categories[2]._id}
          className='card card-shadow'
          onClick={() => {
            dispatch({
              type: "TOGGLE_CATEGORY",
              payload: { category: "breakfast" },
            });
          }}>
          <div className='card-header card-image'>
            <img src={categories[2].img} alt={categories[2].alt} />
          </div>
        </Link>
        <Link
          to='/productListing'
          key={categories[3]._id}
          className='card card-shadow'
          onClick={() => {
            dispatch({
              type: "TOGGLE_CATEGORY",
              payload: { category: "bakery" },
            });
          }}>
          <div className='card-header card-image'>
            <img src={categories[3].img} alt={categories[3].alt} />
          </div>
        </Link>
        <Link
          to='/productListing'
          key={categories[4]._id}
          className='card card-shadow'
          onClick={() => {
            dispatch({
              type: "TOGGLE_CATEGORY",
              payload: { category: "juice" },
            });
          }}>
          <div className='card-header card-image'>
            <img src={categories[4].img} alt={categories[4].alt} />
          </div>
        </Link>
        <Link
          to='/productListing'
          key={categories[5]._id}
          className='card card-shadow'
          onClick={() => {
            dispatch({
              type: "TOGGLE_CATEGORY",
              payload: { category: "sweets" },
            });
          }}>
          <div className='card-header card-image'>
            <img src={categories[5].img} alt={categories[5].alt} />
          </div>
        </Link>
        <Link
          to='/productListing'
          key={categories[6]._id}
          className='card card-shadow'
          onClick={() => {
            dispatch({
              type: "TOGGLE_CATEGORY",
              payload: { category: "healthy" },
            });
          }}>
          <div className='card-header card-image'>
            <img src={categories[6].img} alt={categories[6].alt} />
          </div>
        </Link>
        <Link
          to='/productListing'
          key={categories[7]._id}
          className='card card-shadow'
          onClick={() => {
            dispatch({
              type: "TOGGLE_CATEGORY",
              payload: { category: "medicine" },
            });
          }}>
          <div className='card-header card-image'>
            <img src={categories[7].img} alt={categories[7].alt} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categorycard;

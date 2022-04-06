import React from 'react'
import { useFilter } from "../../context/filter-context";
import { Navbar } from '../Homepage-components';
import WishlistCard from './WishlistCard/WishlistCard';

const Wishlist = ()  => {
    const { state } = useFilter();
    const wishlistedItems = state.product.filter(
      (item) => item.isWishlisted
    );

  return (
    <div>
        <Navbar />
        <h1 className="cart-items-heading"> My Wishlist ({wishlistedItems.length})</h1>
        {wishlistedItems.map((item) => (
          <WishlistCard item={item} />
        ))}
    </div>
  )
}

export {Wishlist}
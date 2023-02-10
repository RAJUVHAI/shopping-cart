import React from "react";
import WishlistItem from "./WishlistItem";
import { Context, useContext } from "../../context/Index";
export default function WishlistCard(probs) {
  const { state } = useContext(Context);

  return (
    <div>
      {" "}
      <div className=" bg-gray-100 py-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Wishlist Items</h1>
        {state.wishlist.length <= 0 ? (
          <h2 className="text-center text-red-500">No wishlist is added</h2>
        ) : (
          " "
        )}
        {state.wishlist.map((products) => (
          <WishlistItem
            key={products.id}
            products={products}
            wishlist={state.wishlist}
          />
        ))}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./App.css";
import FrontendRoutes from "./routes/FrontendRoutes";
import { Context } from "./context/Index";
import data from "./data/Data";

const App = () => {
  const [state, setState] = useState({
    data: data,
    cart: [],
    wishlist: [],
  });

  const addToCart = (products) => {
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === products.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === products.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...products, count: 1 }],
    });
  };
  const addToWishlist = (products) => {
    setState({
      ...state,
      wishlist: state.wishlist.find(
        (wishlistItem) => wishlistItem.id === products.id
      )
        ? state.wishlist.map((wishlistItem) =>
            wishlistItem.id === products.id
              ? { ...wishlistItem, count: wishlistItem.count + 1 }
              : wishlistItem
          )
        : [...state.wishlist, { ...products, count: 1 }],
    });
  };

  const increase = (products) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === products.id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      ),
    });
  };

  const decrease = (products) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === products.id
          ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
          : cartItem
      ),
    });
  };

  const removeItem = (id) => {
    setState({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== id),
    });
  };
  const removeWishlistItem = (id) => {
    setState({
      ...state,
      wishlist: state.wishlist.filter((cartItem) => cartItem.id !== id),
    });
  };
  const cartItemCount = state.cart.reduce(
    (acc, data) => (acc += data.count),
    0
  );
  const wishlistItemCount = state.wishlist.reduce(
    (acc, data) => (acc += data.count),
    0
  );

  return (
    <div>
      <Context.Provider
        value={{
          state: state,
          addToCart,
          addToWishlist,
          increase,
          decrease,
          removeItem,
          removeWishlistItem,
          cartItemCount,
          wishlistItemCount,
        }}
      >
        <FrontendRoutes />
      </Context.Provider>
    </div>
  );
};

export default App;

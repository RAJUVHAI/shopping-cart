import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Context, useContext } from "../../context/Index";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
export default function ProductsItem(probs) {
  const { addToCart, addToWishlist } = useContext(Context);
  const { products } = probs;
  const [isDisabled, setDisabled] = useState(false);
  const handleDisable = () => {
    setDisabled(true);
    toast.success("Product added in a cart!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div>
      <div
        className=" bg-white shadow-md rounded-xl duration-500 gap-x-14 hover:scale-105 hover:shadow-xl"
        key={products.id}
      >
        <img
          src={products.images[1]}
          alt="Product"
          className="h-80 w-full bg-cover bg-center object-cover rounded-t-xl"
        />

        <div className="px-4 py-3 ">
          <span className="text-gray-400 mr-3 uppercase text-xs">
            {products.brand}
          </span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            {products.title}
          </p>
          <div className="flex productss-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              ${products.price}
            </p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">
                ${products.discountPercentage}
              </p>
            </del>

            <div className="ml-auto">
              <FaHeart
                width={20}
                height={20}
                className="hover:scale-125 hover:text-indigo-700 cursor-pointer"
                onClick={() => addToWishlist(products)}
              />
            </div>
          </div>
        </div>
        <div
          className="flex space-x-2 justify-center p-2"
          onClick={handleDisable}
        >
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="  btn  btn-primary m-2 w-full bg-indigo-700 rounded-full px-5 py-1 font-semibold  active:shadow-lg transition duration-150 ease-in-out"
            disabled={isDisabled}
            onClick={() => addToCart(products)}
          >
            {isDisabled ? "Added to cart" : "Add to cart"}
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

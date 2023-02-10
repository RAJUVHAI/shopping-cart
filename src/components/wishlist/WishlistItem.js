import React, { useState } from "react";

import { Context, useContext } from "../../context/Index";
export default function WishlistItem(probs) {
  const { addToCart, removeWishlistItem } = useContext(Context);
  const { products } = probs;
  const [isDisabled, setDisabled] = useState(false);
  const handleDisable = () => {
    setDisabled(true);
  };
  return (
    <div>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          <div>
            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <img
                src={products.images[1]}
                alt="Product"
                className="w-full rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">
                    {products.title}
                  </h2>
                  <p className="mt-1 text-xs text-gray-700">
                    {products.description}
                  </p>
                  <p className="mt-1 text-xs text-gray-700">
                    Discount price <del> ${products.discountPercentage}</del>
                  </p>
                  <p className="mt-1 text-xs text-gray-700">
                    {products.stock} items is stock.
                  </p>
                  <div onClick={() => handleDisable()}>
                    <button
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      className="  btn  btn-primary my-2 bg-indigo-700 rounded-full font-semibold  active:shadow-lg transition duration-150 ease-in-out"
                      disabled={isDisabled}
                      onClick={() => addToCart(products)}
                    >
                      {isDisabled ? "Added to cart" : "Add to cart"}
                    </button>
                  </div>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100"></div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm">Delete</p>
                    <svg
                      onClick={() => removeWishlistItem(products.id)}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

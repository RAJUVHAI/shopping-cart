import React, { useState } from "react";

import { Context, useContext } from "../../context/Index";

export default function CartCard() {
  const { state, increase, decrease, removeItem } = useContext(Context);
  const subTotal = state.cart.reduce(
    (acc, curr) => acc + curr.price * curr.count,
    0
  );
  const subTotalVat = subTotal + 4;

  const [shippingData, setShippingData] = useState({
    name: "",
    email: "",
    address: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setShippingData({ ...shippingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: shippingData.name,
      email: shippingData.email,
      address: shippingData.address,
      subTotalVat: subTotalVat,
    };

    alert("order is completed!");

    console.log(data);
  };

  return (
    <>
      <div className="cart">
        <div>
          <div className=" bg-gray-100 py-20">
            <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
            {state.cart.length <= 0 ? (
              <h2 className="text-center text-red-500">
                No product is added !
              </h2>
            ) : (
              " "
            )}
            <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
              <div className="rounded-lg md:w-2/3">
                {state.cart.map((products, index) => (
                  <>
                    <div>
                      <div
                        key={index}
                        className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                      >
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
                              Discount price{" "}
                              <del> ${products.discountPercentage}</del>
                            </p>
                            <p className="mt-1 text-xs text-gray-700">
                              {products.stock} items is stock.
                            </p>
                          </div>
                          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                            <div className="flex items-center border-gray-100">
                              <span
                                onClick={() => decrease(products)}
                                className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                              >
                                {" "}
                                -{" "}
                              </span>
                              <input
                                className="h-8 w-8 border bg-white text-center text-xs outline-none"
                                type="number"
                                value={products.count}
                              />
                              <span
                                onClick={() => increase(products)}
                                className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                              >
                                {" "}
                                +{" "}
                              </span>
                            </div>
                            <div className="flex items-center space-x-4">
                              <p className="text-sm">
                                Total:${" "}
                                {(products.price * products.count).toFixed(2)}
                              </p>
                              <svg
                                onClick={() => removeItem(products.id)}
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
                  </>
                ))}
              </div>
              {/* Sub total */}
              {/* check out section start */}
              <form
                onSubmit={handleSubmit}
                className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3"
              >
                <div>
                  {/* shipping address start */}

                  <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-1/2">
                      <div className="relative">
                        <label
                          htmlFor="name"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Enter your name"
                          onChange={handleInput}
                          value={shippingData.name}
                          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                    <div className="p-2 w-1/2">
                      <div className="relative">
                        <label
                          htmlFor="email"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Enter your email address"
                          onChange={handleInput}
                          value={shippingData.email}
                          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                    <div className="p-2 w-full">
                      <div className="relative">
                        <label
                          htmlFor="message"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Shipping Address
                        </label>
                        <textarea
                          id="message"
                          name="address"
                          placeholder="Enter your shipping address"
                          onChange={handleInput}
                          value={shippingData.address}
                          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                  </div>
                  {/* shipping address end */}
                  <div className="mb-2 flex justify-between">
                    <p className="text-gray-700">Subtotal</p>
                    <p className="text-gray-700">${subTotal}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-700">Shipping</p>
                    <p className="text-gray-700">$4.99</p>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between">
                    <p className="text-lg font-bold">Total</p>
                    <div className>
                      <p className="mb-1 text-lg font-bold">
                        ${subTotalVat} USD
                      </p>
                      <p className="text-sm text-gray-700">including VAT</p>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
                  >
                    Check out
                  </button>
                </div>
              </form>
              {/* check out section end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { Context, useContext } from "../../context/Index";
import ProductsItem from "./ProductsItem";

function ProductsCard(probs) {
  // console.log(ProductsData.users);
  const { state } = useContext(Context);
  return (
    <div>
      {/* ✅ Grid Section - Starts Here 👇 */}
      <section className="w-fit grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-stretch mx-auto gap-y-20 gap-x-14 mt-5 mb-5 p-10 ">
        {state.data.map((products) => (
          <ProductsItem
            key={products.id}
            products={products}
            cart={state.cart}
          />
        ))}
      </section>
      {/* 🛑 Grid Section - Ends Here */}
    </div>
  );
}

export default ProductsCard;

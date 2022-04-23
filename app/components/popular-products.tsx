import React from "react";
import { json, LoaderFunction, useLoaderData } from "remix";
import { getPopularProducts } from "~/models/products.server";
import Product from "./product";

export default function PopularProducts(): JSX.Element {
  const data = useLoaderData();

  return (
    <div className="relative flex h-[650px] flex-col items-center justify-center bg-beige bg-slate-100">
      <h1 className="mb-9 mt-6 font-bebas-neue text-3xl font-semibold tracking-wider">
        Most Popular Products
      </h1>
      <div className="h-11/12 grid w-11/12 grid-cols-4 justify-center bg-green">
        {data?.popularProducts.map((product) => (
          <div
            key={product.title}
            className="w-68 flex cursor-pointer flex-col items-center justify-start rounded-md bg-white py-4 md:mx-3 md:p-3"
          >
            <Product
              className="w-fit"
              key={product.id}
              primaryImage={product.primaryImage}
              secondaryImage={product.secondaryImage}
              title={product.title}
              price={product.price}
              link={product.link}
              // onSaveProduct={() => handleSaveProduct(item)}
              // onRemoveProduct={() => handleRemoveProduct(item.id)}
              heartStartActive={product.isSaved}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

import * as React from "react";
import { useState } from "react";
import { getProducts } from "~/models/products.server";
import { useLoaderData, LoaderFunction, json } from "remix";
import { Banner, Header, Product, Filters, Spinner } from "../components";

export const loader: LoaderFunction = async () => {
  const products = await getProducts(); // TODO - add filters for "decor"
  return json({ items: products });
};

export default function Decor() {
  const data = useLoaderData();

  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <Banner />
      <Header />
      <div className="absolute top-28 h-full w-full">
        <h2 className="my-7 text-center text-3xl">Shop All</h2>
        <div className="flex w-full">
          <div className="ml-5 flex w-1/4 flex-col border p-6 font-light">
            <Filters
              categories={[
                "Rugs",
                "Lighting",
                "Wall Art",
                "Pillows",
                "Candles",
              ]}
            />
          </div>
          <div className="mx-10 grid w-full grid-cols-2 gap-5 md:grid-cols-3 lg:w-3/4 lg:grid-cols-3 xl:w-3/4 xl:grid-cols-4">
            {!data ? (
              <div className="col-span-3 flex items-center justify-center">
                <Spinner />
              </div>
            ) : (
              <>
                {data.items.map((item) => (
                  <Product
                    key={item.id}
                    primaryImage={item.primaryImage}
                    secondaryImage={item.secondaryImage}
                    title={item.title}
                    price={item.price}
                    link={item.link}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

import * as React from "react";
import { useState } from "react";
import { getProducts } from "~/models/products.server";
import { useLoaderData, LoaderFunction, json } from "remix";
import {
  Banner,
  Header,
  Product,
  Filters,
  Spinner,
  CategoryTitle,
} from "../components";

export const loader: LoaderFunction = async () => {
  const products = await getProducts(); // TODO - add filters for "decor"
  return json({ items: products });
};

export default function Decor() {
  const data = useLoaderData();

  return (
    <main className="relative min-h-screen bg-beige text-text sm:flex sm:items-center sm:justify-center">
      <Banner />
      <Header />
      <div className="absolute top-28 h-full w-full">
        <div className="flex w-full">
          <div className="ml-5 mt-2 flex w-1/4 flex-col p-6 font-light">
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
          <div className="m-5 w-9/12 pr-8">
            <CategoryTitle
              category="Décor"
              productNumber={data.items.length}
              className="ml-3 mt-2"
            />
            <div className="mr-2 mt-8 grid w-full grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
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
      </div>
    </main>
  );
}

import * as React from "react";
import { useState } from "react";
import { getProducts } from "~/models/products.server";
import { useLoaderData, LoaderFunction, json } from "remix";
import {
  Banner,
  Header,
  Product,
  CategoryIcons,
  Spinner,
  CategoryTitle,
  Select,
} from "../components";

export const loader: LoaderFunction = async () => {
  const products = await getProducts();
  return json({ items: products });
};

export default function Decor() {
  const data = useLoaderData();
  const categories = [
    { title: "Chef", imgSrc: "/icons/chef-hat", active: false },
    { title: "Tech", imgSrc: "/icons/apple-watch", active: false },
    { title: "Homebird", imgSrc: "/icons/slippers", active: false },
    { title: "Beach", imgSrc: "/icons/beach", active: false },
    { title: "Clever", imgSrc: "/icons/brain", active: false },
    { title: "Outdoor", imgSrc: "/icons/campfire", active: false },
    { title: "Happy", imgSrc: "/icons/cocktail", active: false },
    // { title: "Old Spirit", imgSrc: "/icons/grandma", active: false },
    { title: "Sporty", imgSrc: "/icons/muscle", active: false },
    { title: "Kardashian", imgSrc: "/icons/lipstick", active: false },
    {
      title: "Unique",
      imgSrc: "/icons/unicorn",
      active: false,
      animatedSrc: "/icons/unicorn.gif",
    },
    { title: "Foodie", imgSrc: "/icons/noodles", active: false },
    // { title: "Pets", imgSrc: "/icons/pets", active: false },
    { title: "Geek", imgSrc: "/icons/nerd", active: false },
    {
      title: "Cutie",
      imgSrc: "/icons/panda",
      active: false,
      animatedSrc: "/icons/panda.gif",
    },
    { title: "Healthy", imgSrc: "/icons/heart", active: false },
  ];
  return (
    <main className="relative min-h-screen bg-beige text-text sm:flex sm:items-center sm:justify-center">
      <Banner />
      <Header categories={categories} />
      <div className="absolute top-44 h-full w-full">
        <div className="flex w-full justify-center">
          <div className="mx-32 w-10/12 pr-8">
            <CategoryTitle
              category={data.category}
              productNumber={data.items.length}
              className="ml-3 mt-8"
            />
            <div className="mt-5 grid w-full grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
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

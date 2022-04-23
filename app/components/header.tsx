import clsx from "clsx";
import { Link, useLoaderData } from "@remix-run/react";
import React, { useEffect, useState } from "react";
import SiteName from "./site-name";
import BounceAnimation from "./bounce-animation";
import Heart from "./heart";
import CategoryIcons from "./category-icons";
import type { Category } from "./types";
import Categories from "./categories";
import BigHeart from "./big-heart";
import Hamburger from "./hamburger";

type Props = {
  categories?: Category[];
  onClick: Function;
  withIcons?: boolean;
  numSavedItems: number;
  initialItem?: string;
  initialShowSunCategories?: boolean;
};

export default function Header({
  initialItem = "DECOR",
  onClick,
  numSavedItems,
  initialShowSunCategories = true,
}: Props): JSX.Element {
  const data = useLoaderData();
  const [initialMainCategory, setInitialMainCategory] =
    useState<string>(initialItem);
  const [itemWithCategoriesToShow, setItemWithCategoriesToShow] =
    useState<string>(initialItem);
  const [showSubCategories, setShowSubCategories] = useState<boolean>(
    initialShowSunCategories
  );

  const isActive = (title: string) => {
    return data?.category === title.toLocaleLowerCase();
  };

  const decorCategories = [
    { title: "Best Sellers", active: false },
    { title: "Furniture", active: false },
    { title: "Blankets", active: false },
    { title: "Plants", active: false },
    { title: "Vases", active: false },
    { title: "Rugs", active: false },
    { title: "Wall Art", active: false },
    { title: "Pillows", active: false },
    { title: "Candles", active: false },
  ];
  const kitchenCategories = [
    { title: "Best Sellers", active: true },
    { title: "Dinnerwear", active: false },
    { title: "Drinkwear", active: false },
    { title: "Mugs", active: false },
    { title: "Cookwear", active: false },
  ];
  const bedroomCategories = [
    { title: "Best Sellers", active: true },
    { title: "Bedding", active: false },
    { title: "Pillows", active: false },
    { title: "Blankets", active: false },
    { title: "Lighting", active: false },
  ];
  const bathCategories = [
    { title: "Best Sellers", active: true },
    { title: "Shower Curtains", active: false },
    { title: "Towels", active: false },
    { title: "Accessories", active: false },
    { title: "Lighting", active: false },
  ];
  const outdoorCategories = [
    { title: "Best Sellers", active: true },
    { title: "Plants", active: false },
    { title: "Dining", active: false },
    { title: "Rugs", active: false },
    { title: "Flowers", active: false },
  ];

  const handleMouseOver = (name: string) => {
    setItemWithCategoriesToShow(name);

    if (!showSubCategories) {
      setShowSubCategories(true);
    }
  };

  const handleMouseOut = () => {
    setItemWithCategoriesToShow(initialMainCategory);

    if (!initialShowSunCategories) {
      setShowSubCategories(false);
    }
  };

  const getCategories = () => {
    return headerItems.find((item) => item.name === itemWithCategoriesToShow)
      ?.categories;
  };

  const handleCategoryClicked = (category, mainCategory) => {
    onClick(category);
    setInitialMainCategory(mainCategory.toUpperCase());
  };

  const headerItems = [
    { name: "DECOR", link: "/decor", categories: decorCategories },
    { name: "KITCHEN", link: "/kitchen", categories: kitchenCategories },
    {
      name: "BEDROOM",
      link: "/bedroom",
      categories: bedroomCategories,
    },
    { name: "BATH", link: "/bath", categories: bathCategories },
    {
      name: "OUTDOOR",
      link: "/outdoor",
      categories: outdoorCategories,
    },
  ];

  return (
    <div
      className="absolute top-0 z-50 pb-6 md:top-9"
      onMouseLeave={handleMouseOut}
    >
      <div className="sticky top-0 z-50">
        <Hamburger />
        <div className="relative top-5 m-auto flex w-1/2 flex-col items-center justify-center border-b-[1px] border-gray-200 pb-2 md:w-2/3 xl:w-1/2">
          <div className="flex items-center">
            <SiteName />
          </div>
          <div className="mb-3 hidden h-full pt-3 font-roboto-mono font-semibold tracking-wide md:block">
            {headerItems.map((item) => (
              <Link
                key={item.name}
                to={`/shop${item.link}`}
                className={clsx(
                  "hover:text-red md:m-3",
                  isActive(item.name) && "text-red"
                )}
                onMouseEnter={() => handleMouseOver(item.name)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <BigHeart numSaved={numSavedItems} />
        </div>
        <Categories
          mainCategory={itemWithCategoriesToShow.toLocaleLowerCase()}
          categories={getCategories()}
          onClick={handleCategoryClicked}
          show={showSubCategories}
        />
      </div>
    </div>
  );
}

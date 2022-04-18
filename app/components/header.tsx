import clsx from "clsx";
import { Link } from "@remix-run/react";
import React, { useEffect, useState } from "react";
import SiteName from "./site-name";
import BounceAnimation from "./bounce-animation";
import Heart from "./heart";
import CategoryIcons from "./category-icons";
import type { Category } from "./types";
import Categories from "./categories";

type Props = {
  categories?: Category[];
  onClick?: Function;
  withIcons?: boolean;
};

export default function Header({
  categories,
  onClick,
  withIcons = false,
}: Props): JSX.Element {
  const isActive = (title: string) => {
    // TODO - get the current active item (by looking at the URL)
    return false;
  };

  return (
    <div className="absolute top-12 z-50">
      <div className="sticky top-0 z-50">
        <div className="relative mb-2 flex w-full flex-col items-center justify-center border-b-[1px] border-gray-200">
          <SiteName />
          <div className="hidden h-full p-3 font-medium md:block">
            {[
              { name: "DECOR", link: "/decor" },
              { name: "KITCHEN", link: "/shop" },
              { name: "BEDROOM", link: "/bedding" },
              { name: "BATH", link: "/bath" },
              { name: "OUTDOOR", link: "/outdoor" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className={clsx(
                  "hover:text-red md:m-3",
                  isActive(item.name) && "text-red"
                )}
              >
                {item.withAnimation ? (
                  <BounceAnimation word={item.name} />
                ) : (
                  item.name
                )}
              </Link>
            ))}
          </div>
          <Link to="/saved">
            <Heart
              withAnimation={false}
              large
              className={clsx(
                "absolute right-16 bottom-5 w-12",
                categories && "right-[229px]"
              )}
            />
          </Link>
        </div>
        {withIcons ? (
          <CategoryIcons categories={categories} onClick={onClick} />
        ) : (
          <Categories categories={categories} onClick={onClick} />
        )}
      </div>
    </div>
  );
}

import { Link } from "@remix-run/react";
import React from "react";
import SiteName from "./site-name";
import BounceAnimation from "./bounce-animation";
import { HeartIcon } from "@heroicons/react/outline";

type Props = {};

export default function Header({}: Props): JSX.Element {
  return (
    <div className="absolute top-9 flex h-[75px] w-full items-center justify-center border-b-2 border-black">
      <SiteName />
      <div className="hidden p-3 md:block">
        {[
          { name: "Décor", link: "decor" },
          { name: "Kitchen + Dining", link: "kitchen" },
          { name: "Bedding", link: "bedding" },
          { name: "Bath", link: "bath" },
          { name: "Outdoor", link: "outdoor" },
          { name: "Nursery", link: "nursery" },
        ].map((item) => (
          <Link key={item.name} to={item.link} className="md:m-3">
            {item.withAnimation ? (
              <BounceAnimation word={item.name} />
            ) : (
              item.name
            )}
          </Link>
        ))}
      </div>
      <HeartIcon className="absolute right-7 h-7 w-7" />
    </div>
  );
}

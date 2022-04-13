import { Link } from "@remix-run/react";
import React from "react";
import SiteName from "./site-name";
import BounceAnimation from "./bounce-animation";
import { HeartIcon } from "@heroicons/react/outline";
import Heart from "./heart";

type Props = {};

export default function Header({}: Props): JSX.Element {
  return (
    <div className="absolute top-11 flex h-[75px] w-full items-center justify-center border-b-[1px] border-black">
      <Link to="home" className="mb-6">
        <SiteName />
      </Link>
      <div className="hidden p-3 md:block">
        {[
          { name: "Décor", link: "decor" },
          { name: "Kitchen + Dining", link: "kitchen" },
          { name: "Bedding", link: "bedding" },
          { name: "Bath", link: "bath" },
          { name: "Outdoor", link: "outdoor" },
          { name: "Nursery", link: "nursery" },
        ].map((item) => (
          <Link
            key={item.name}
            to={item.link}
            className="hover:text-red md:m-3"
          >
            {item.withAnimation ? (
              <BounceAnimation word={item.name} />
            ) : (
              item.name
            )}
          </Link>
        ))}
      </div>
      <Heart
        withAnimation={false}
        large
        className="absolute right-7 h-12 w-12"
      />
    </div>
  );
}

import React from "react";
import { GiftIcon } from "@heroicons/react/solid";

type Props = {};

export default function SiteName({}: Props): JSX.Element {
  return (
    <div className="absolute left-8 flex h-5 w-1/5 items-center">
      <div className="flex items-center md:hidden">
        <button className="mobile-menu-button outline-none">
          <svg
            className="h-6 w-6 text-gray-500"
            x-show="!showMenu"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <h1 className="ml-3 font-caveat text-5xl">Bosga Home</h1>
    </div>
  );
}

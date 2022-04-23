import React from "react";

export default function Hamburger(): JSX.Element {
  return (
    <div className="absolute top-3 left-3 flex items-center md:hidden">
      <button className="mobile-menu-button outline-none">
        <svg
          className="h-8 w-8 text-gray-500"
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
  );
}

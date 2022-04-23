import React from "react";
import { GiftIcon } from "@heroicons/react/solid";
import { Link } from "remix";

type Props = {};

export default function SiteName({}: Props): JSX.Element {
  return (
    <div>
      <Link to="/">
        <h1 className="ml-3 font-bebas-neue text-5xl font-bold tracking-wider">
          Bosga Home
        </h1>
      </Link>
    </div>
  );
}

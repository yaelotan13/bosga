import React from "react";

type Props = {};

export default function Banner({}: Props): JSX.Element {
  return (
    <div className="absolute top-0 hidden h-9 w-full items-center justify-center bg-primary text-sm tracking-wide text-white md:flex">
      Home goodies from all over the internet in one place
    </div>
  );
}

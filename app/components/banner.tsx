import React from "react";

type Props = {};

export default function Banner({}: Props): JSX.Element {
  return (
    <div className="absolute top-0 flex h-11 w-full items-center justify-center bg-primary text-white">
      Home goodies from all over the internet in one place
    </div>
  );
}

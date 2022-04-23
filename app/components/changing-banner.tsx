import React from "react";

type Props = {};

export default function ChangingBanner({}: Props): JSX.Element {
  return (
    <div className="flex w-full flex-col-reverse justify-between bg-beige bg-hand-drawn-flowers bg-right-top py-11 md:h-[400px] md:flex-row">
      <div className="flex w-full flex-col items-center justify-center">
        <h2 className="-mt-5 font-roboto-mono text-2xl font-semibold tracking-wide md:mt-12 md:mb-5 md:text-4xl">
          Find the perfect product
        </h2>
        <p className="mt-4 w-3/5 text-center tracking-wider md:w-1/2">
          Bosga scan millions of products online from many online shops and
          present to you the best of the best. We put our effort into selecting
          the most unique and beautiful products out there, saving you the time
          and effort of endlessly browsing the internet.
        </p>
      </div>
    </div>
  );
}

import React from "react";

type Props = {};

export default function ImageBanner({}: Props): JSX.Element {
  return (
    <div className="flex h-[800px] w-full flex-col-reverse justify-between bg-beige md:h-[600px] md:flex-row">
      <div className="flex w-full flex-col items-center justify-center">
        <h2 className="mt-12 text-3xl md:mb-5 md:-mt-5 md:text-4xl">
          Find the perfect gift
        </h2>
        <p className="mt-4 w-1/2 text-center">
          Bosga scan millions of products online from many online shops and
          present to you the best of the best{" "}
        </p>
      </div>
      <img
        src="./images/gifts.jpg"
        alt="gifts"
        className="h-full w-full md:h-full md:w-1/2 lg:h-full"
      />
    </div>
  );
}

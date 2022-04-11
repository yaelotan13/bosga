import React, { useState } from "react";

type Props = {
  primaryImage: string;
  secondaryImage: string;
  title: string;
  price: string;
  link: string;
};

export default function Product({
  primaryImage,
  secondaryImage,
  title,
  price,
  link,
}: Props): JSX.Element {
  const [curImage, setCurImage] = useState(primaryImage);

  return (
    <div
      className="h-[450px] cursor-pointer p-3"
      onClick={() => {
        window.open(link, "_blank").focus();
      }}
    >
      <img
        onMouseEnter={() => {
          setCurImage(secondaryImage);
        }}
        onMouseLeave={() => {
          setCurImage(primaryImage);
        }}
        src={curImage}
        alt={title}
        className="h-3/4 w-full rounded-md hover:opacity-90"
      />
      <div className="relative mt-3 w-full">
        <img
          src="https://scrnshts.club/wp-content/uploads/2019/05/anthropologie.jpg"
          alt="anthropologie icon"
          className="absolute left-1 top-1 mr-2 h-6 w-6 justify-start rounded-full"
        />
        <div className="flex flex-col items-center">
          <p className="mt-0 w-3/4 text-center text-sm">{title}</p>
          <hr className="mt-3 h-[2px] w-12" color="#e3e3e3" />
          <p className="my-3 text-sm font-light">{price}</p>
        </div>
      </div>
    </div>
  );
}

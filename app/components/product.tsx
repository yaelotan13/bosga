import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { Heart } from "../components";

type Props = {
  primaryImage: string;
  secondaryImage: string;
  title: string;
  price: string;
  link: string;
  heartStartActive?: boolean;
  onSaveProduct: Function;
  onRemoveProduct: Function;
  show?: boolean;
};

export default function Product({
  primaryImage,
  secondaryImage,
  title,
  price,
  link,
  onRemoveProduct,
  onSaveProduct,
  heartStartActive = false,
  show = true,
}: Props): JSX.Element {
  const [curImage, setCurImage] = useState(primaryImage);

  return (
    <Transition
      show={show}
      enter="transition-opacity duration-175"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-350"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="h-[450px] p-3">
        <img
          onClick={() => {
            window.open(link, "_blank").focus();
          }}
          onMouseEnter={() => {
            setCurImage(secondaryImage);
          }}
          onMouseLeave={() => {
            setCurImage(primaryImage);
          }}
          src={curImage}
          alt={title}
          className="h-3/4 w-full cursor-pointer rounded-md hover:opacity-90"
        />
        <div className="relative mt-3 w-full">
          <img
            src="https://scrnshts.club/wp-content/uploads/2019/05/anthropologie.jpg"
            alt="anthropologie icon"
            className="absolute left-1 top-1 mr-2 h-6 w-6 justify-start rounded-full"
          />
          <div className="flex flex-col items-center">
            <p
              className="mt-0 w-3/5 cursor-pointer text-center text-sm"
              onClick={() => {
                window.open(link, "_blank").focus();
              }}
            >
              {title}
            </p>
            <hr className="mt-3 h-[2px] w-12" color="#e3e3e3" />
            <p className="my-3 text-sm font-light">{price}</p>
          </div>
          <Heart
            className="absolute -right-3 -top-3"
            heartStartActive={heartStartActive}
            onSaveProduct={onSaveProduct}
            onRemoveProduct={onRemoveProduct}
          />
        </div>
      </div>
    </Transition>
  );
}

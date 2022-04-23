import React from "react";
import { Link } from "remix";

type BigHeartProps = {
  numSaved: number;
  numItemsChanged?: Function;
};

type BadgeProps = {
  number: number;
};

const Badge = ({ number }: BadgeProps): JSX.Element => {
  return (
    <div className="absolute right-4 top-4 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] text-white">
      {number}
    </div>
  );
};

export default function BigHeart({ numSaved }: BigHeartProps): JSX.Element {
  return (
    <Link
      to="/saved"
      className="absolute -right-32 bottom-3 md:bottom-0 md:-right-5"
    >
      <div className="h-[70px] w-[70px] cursor-pointer bg-heart bg-heart-size bg-right bg-no-repeat">
        {numSaved > 0 && <Badge number={numSaved} />}
      </div>
    </Link>
  );
}

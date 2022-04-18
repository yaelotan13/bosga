import clsx from "clsx";
import { useState } from "react";

type CategoryIconProps = {
  title: string;
  imgSrc: string;
  active?: boolean;
  onClick: Function;
  animatedSrc?: string;
};

export default function CategoryIcon({
  title,
  imgSrc,
  active,
  onClick,
  animatedSrc,
}: CategoryIconProps): JSX.Element {
  const [src, setSrc] = useState<string>(getImgSrc);

  function getImgSrc() {
    if (active && animatedSrc) {
      return animatedSrc;
    }

    return `${imgSrc}${active ? "-color" : ""}.png`;
  }

  return (
    <div
      className={
        "flex h-20 w-24 cursor-pointer flex-col items-center rounded-md p-2"
      }
      onClick={() => onClick(title)}
    >
      <img
        src={src}
        alt={title}
        className="h-2/4 w-2/5 hover:scale-110"
        onMouseEnter={() => setSrc(animatedSrc ?? `${imgSrc}-color.png`)}
        onMouseLeave={() => setSrc(getImgSrc())}
      />
      <p
        className={clsx(
          "mt-0.5 text-center text-sm font-light",
          active && "font-normal"
        )}
      >
        {title}
      </p>
    </div>
  );
}

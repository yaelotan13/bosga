import clsx from "clsx";
import { useState } from "react";
import { Link } from "remix";

type CategoryIconProps = {
  title: string;
  imgSrc: string;
  active?: boolean;
  onClick: Function;
  animated?: boolean;
  className?: string;
  withTitle?: boolean;
};

export default function CategoryIcon({
  title,
  imgSrc,
  active,
  onClick,
  animated,
  className,
  withTitle = true,
}: CategoryIconProps): JSX.Element {
  const [src, setSrc] = useState<string>(getImgSrc);

  function getImgSrc() {
    if (active && animated) {
      return `${imgSrc}.gif`;
    }

    return `${imgSrc}${active ? "-color" : ""}.png`;
  }

  return (
    <Link to={`/shop/${title.toLocaleLowerCase()}`}>
      <div
        className={
          "flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-md"
        }
        onClick={() => onClick(title)}
      >
        <img
          src={src}
          alt={title}
          className="h-1/2 hover:scale-110 sm:h-2/5"
          onMouseEnter={() =>
            setSrc(animated ? `${imgSrc}.gif` : `${imgSrc}-color.png`)
          }
          onMouseLeave={() => setSrc(getImgSrc())}
        />
        {withTitle && <p className="mt-3">{title}</p>}
      </div>
    </Link>
  );
}

import clsx from "clsx";
import { useState } from "react";

type HeartProps = {
  className?: string;
  withAnimation?: boolean;
  large?: boolean;
};

export default function Heart({
  className,
  large,
  withAnimation = true,
}: HeartProps): JSX.Element {
  const [animate, setAnimate] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);

  const toggleSaved = () => {
    setSaved(!saved);
    withAnimation && setAnimate(!saved);
  };

  return (
    <div
      onClick={toggleSaved}
      className={clsx(
        "h-[50px] w-[50px] cursor-pointer bg-heart bg-heart-size bg-left bg-no-repeat pt-4 hover:scale-110 hover:bg-right",
        className,
        animate && "animate-heart-burst",
        large && "h-[90px] w-[90px]"
      )}
    />
  );
}

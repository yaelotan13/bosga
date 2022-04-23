import clsx from "clsx";
import { useState } from "react";

type HeartProps = {
  className?: string;
  withAnimation?: boolean;
  onSaveProduct?: Function;
  onRemoveProduct?: Function;
  heartStartActive?: boolean;
};

export default function Heart({
  className,
  onSaveProduct,
  onRemoveProduct,
  heartStartActive = false,
  withAnimation = true,
}: HeartProps): JSX.Element {
  const [animate, setAnimate] = useState<boolean>(heartStartActive);
  const [saved, setSaved] = useState<boolean>(heartStartActive);

  const toggleSaved = () => {
    const newSavedValue = !saved;

    setSaved(newSavedValue);
    withAnimation && setAnimate(!saved);

    if (onSaveProduct && newSavedValue) {
      onSaveProduct();
    }
    if (onRemoveProduct && !newSavedValue) {
      onRemoveProduct();
    }
  };

  return (
    <div
      onClick={toggleSaved}
      className={clsx(
        "h-[50px] w-[50px] cursor-pointer bg-heart bg-heart-size bg-left bg-no-repeat pt-4 hover:bg-right",
        className,
        animate && "animate-heart-burst"
      )}
    />
  );
}

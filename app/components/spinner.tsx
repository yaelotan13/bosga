import clsx from "clsx";
import React from "react";

enum Size {
  small = "small",
  medium = "medium",
  large = "large",
}

type SpinnerProps = {
  loading?: boolean;
  size?: Size;
};

export default function Spinner({
  loading = true,
  size = Size.medium,
}: SpinnerProps) {
  const getSize = () => {
    switch (size) {
      case Size.small:
        return "w-2 h-2";
      case Size.medium:
        return "w-3 h-3";
      case Size.large:
        return "w-5 h-5";
    }
  };
  const selectedSize = getSize();
  const baseStyle = {
    [selectedSize]: true,
    "rounded-full animate-dot-bounce bg-black": true,
  };

  return (
    <div
      className={clsx(
        "ml-4 flex items-center justify-center space-x-2",
        !loading && "hidden"
      )}
      data-test="dot-spinner"
    >
      <div className={clsx(baseStyle)} style={{ animationDelay: "0.1s" }} />
      <div className={clsx(baseStyle)} style={{ animationDelay: "0.2s" }} />
      <div className={clsx(baseStyle)} style={{ animationDelay: "0.3s" }} />
    </div>
  );
}

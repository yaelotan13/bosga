import clsx from "clsx";

type CategoryTitleProps = {
  category: string;
  productNumber: number;
  className: string;
};

export default function CategoryTitle({
  category,
  productNumber,
  className,
}: CategoryTitleProps): JSX.Element {
  return (
    <h2 className={clsx("text-2xl text-text", className)}>
      {category}
      <span className="ml-2.5 text-sm font-light text-grey">{`${productNumber} products`}</span>
    </h2>
  );
}

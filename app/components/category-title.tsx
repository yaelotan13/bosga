import clsx from "clsx";

import Select from "./select";

type CategoryTitleProps = {
  category: string;
  productNumber?: number;
  className: string;
  withFilters?: boolean;
};

export default function CategoryTitle({
  category,
  productNumber,
  className,
  withFilters = true,
}: CategoryTitleProps): JSX.Element {
  const prices = [
    { name: "All prices" },
    { name: "Up to $25" },
    { name: "$25 - $50 " },
    { name: "$100 - $200" },
    { name: "$200 - $300" },
    { name: "Over $300" },
  ];

  return (
    <div className="flex items-end justify-between pr-4">
      <h2 className={clsx("text-2xl text-text", className)}>
        {category}
        {productNumber && (
          <span className="ml-2.5 text-sm font-light text-grey">{`${productNumber} products`}</span>
        )}
      </h2>
      {withFilters && <Select selects={prices} />}
    </div>
  );
}

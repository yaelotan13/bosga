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
    {
      name: "All prices",
      from: "0",
      to: "1000000000",
    },
    {
      name: "Up to $25",
      from: "0",
      to: "25",
    },
    {
      name: "$25 - $50",
      from: "25",
      to: "50",
    },
    {
      name: "$100 - $200",
      from: "100",
      to: "200",
    },
    {
      name: "$200 - $300",
      from: "200",
      to: "300",
    },
    {
      name: "Over $300",
      filterValue: "300",
      operand: "moreThen",
      from: "300",
      to: "1000000000",
    },
  ];

  return (
    <div className="flex items-end justify-between pr-4">
      <h2 className={clsx("text-2xl text-text", className)}>
        {category}
        {productNumber !== 0 && (
          <span className="ml-2.5 text-sm font-light text-grey">{`${productNumber} products`}</span>
        )}
      </h2>
      {withFilters && <Select selects={prices} />}
    </div>
  );
}

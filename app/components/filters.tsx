type FiltersProps = {
  categories: string[];
};

export default function Filters({ categories }: FiltersProps): JSX.Element {
  return (
    <>
      <h3 className="text-2xl text-text">Filter by</h3>
      <hr className="my-4 h-[5px] w-2/3" />
      <h2 className="mb-1.5 text-lg font-normal text-text">
        Product categories
      </h2>
      {categories.map((category) => (
        <p
          key={category}
          className="mb-1 cursor-pointer text-sm text-text hover:underline"
        >
          {category}
        </p>
      ))}
      <h3 className="mt-5 mb-1.5 text-lg font-normal text-text">Price</h3>
      {[
        "Less then $25",
        "$25 - $50",
        "$50 - $100",
        "$100 - $200",
        "More then $200",
      ].map((price) => (
        <p
          key={price}
          className="mb-1 cursor-pointer text-sm text-text hover:underline"
        >
          {price}
        </p>
      ))}
    </>
  );
}

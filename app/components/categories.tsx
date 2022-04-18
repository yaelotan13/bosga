import clsx from "clsx";
import { useState } from "react";

type Category = {
  title: string;
  active: boolean;
};

type CategoryIconsProps = {
  categories?: Category[];
  onClick: Function;
};

export default function Categories({
  categories,
  onClick,
}: CategoryIconsProps): JSX.Element {
  const [stateCategories, setCategories] = useState(categories);

  const handleCategoryClicked = (title: string) => {
    const categoriesCopy = [...categories];
    const categoryIndex = categories.findIndex(
      (category) => category.title === title
    );

    categoriesCopy[categoryIndex].active =
      !categoriesCopy[categoryIndex].active;
    setCategories(categoriesCopy);

    onClick(title.toLocaleLowerCase());
  };

  return (
    <div className="mt-2 flex justify-center">
      {stateCategories?.map((category) => (
        <div
          key={category.title}
          onClick={handleCategoryClicked}
          className={clsx("mr-6", category.active && "text-red")}
        >
          {category.title}
        </div>
      ))}
    </div>
  );
}

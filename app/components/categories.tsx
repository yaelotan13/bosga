import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "remix";

type Category = {
  title: string;
  active: boolean;
};

type CategoryIconsProps = {
  categories: Category[];
  onClick: Function;
  show: boolean;
  mainCategory: string;
};

export default function Categories({
  categories,
  onClick,
  mainCategory,
  show = true,
}: CategoryIconsProps): JSX.Element {
  const data = useLoaderData();
  console.log("^^^ mainCategory ^^^", mainCategory);
  const [stateCategories, setCategories] = useState(categories);
  useEffect(() => {
    setCategories(categories);
  }, categories);

  const handleCategoryClicked = (title: string) => {
    const categoriesCopy = [...categories];
    const categoryIndex = categories.findIndex(
      (category) => category.title === title
    );
    const currentActiveCategory = categories.findIndex(
      (category) => category.active
    );

    if (currentActiveCategory !== -1) {
      categoriesCopy[currentActiveCategory].active = false;
    }

    categoriesCopy[categoryIndex].active =
      !categoriesCopy[categoryIndex].active;
    setCategories(categoriesCopy);

    onClick(title.toLocaleLowerCase());
  };

  const isActive = (category: string) =>
    category ? category?.toLocaleLowerCase() === data?.subCategory : false;

  return (
    <div
      className={clsx(
        "z-50 mt-4 flex w-screen justify-center overflow-x-scroll bg-beige py-3 text-sm tracking-wide text-grey-dark scrollbar-hide first-letter:capitalize",
        show ? "opacity-100" : "opacity-0"
      )}
    >
      {stateCategories?.map((category) => (
        <div
          key={category.title}
          onClick={() => onClick(category.title, mainCategory)}
          className={clsx(
            "mr-6 cursor-pointer whitespace-nowrap hover:text-red",
            isActive(category.title) && "text-red"
          )}
        >
          <Link
            to={`/shop/${mainCategory}?subCategory=${category.title.toLocaleLowerCase()}`}
          >
            {category.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

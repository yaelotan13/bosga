import { useState } from "react";
import CategoryIcon from "./category-icon";

type Category = {
  title: string;
  imgSrc: string;
  active: boolean;
  animatedSrc?: string;
};

type CategoryIconsProps = {
  categories?: Category[];
  onClick: Function;
};

export default function CategoryIcons({
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
    <div className="flex justify-center">
      {stateCategories?.map((category) => (
        <CategoryIcon
          key={category.title}
          title={category.title}
          imgSrc={category.imgSrc}
          active={category.active}
          onClick={handleCategoryClicked}
          animatedSrc={category.animatedSrc}
        />
      ))}
    </div>
  );
}

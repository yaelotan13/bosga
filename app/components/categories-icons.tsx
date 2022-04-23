import React from "react";
import CategoryIcon from "./category-icon";

export default function CategoriesIcons(): JSX.Element {
  const categories = [
    {
      title: "Best Sellers",
      imgSrc: "/icons/rocket",
      animated: true,
      active: false,
    },
    { title: "Plants", imgSrc: "/icons/plant1", animated: true, active: false },
    {
      title: "Fitness",
      imgSrc: "/icons/dumbbell",
      animated: true,
      active: false,
    },
    {
      title: "Mags",
      imgSrc: "/icons/coffee-cup",
      animated: true,
      active: false,
    },
    {
      title: "Home Office",
      imgSrc: "/icons/workplace",
      animated: true,
      active: false,
    },
    { title: "Cooking", imgSrc: "/icons/hat", animated: true, active: false },
  ];

  const handleCategoryClicked = (category) => {};
  return (
    <div className="flex h-[340px] flex-col items-center justify-center bg-beige p-11 sm:p-6 md:h-[500px]">
      <h1 className="mb-9 font-bebas-neue text-3xl font-semibold tracking-wider">
        Explore more categories
      </h1>
      <div className="flex w-screen justify-center overflow-x-scroll scrollbar-hide sm:w-screen md:w-full lg:w-11/12">
        {categories.map((category) => (
          <div
            key={category.title}
            className="mx-3 flex w-44 cursor-pointer flex-col items-center justify-center rounded-md border bg-white"
          >
            <CategoryIcon
              title={category.title}
              imgSrc={category.imgSrc}
              active={category.active}
              onClick={handleCategoryClicked}
              animated={category.animated}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

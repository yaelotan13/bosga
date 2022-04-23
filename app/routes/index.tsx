import { useEffect, useState } from "react";
import { json, Link, LoaderFunction, useLoaderData } from "remix";
import { getPopularProducts } from "~/models/products.server";
import {
  Banner,
  Header,
  ImageBanner,
  CurrentTheme,
  CategoriesIcons,
  CategoriesImages,
  ChangingBanner,
  AboutUs,
  Footer,
  PopularProducts,
} from "../components";

export const loader: LoaderFunction = async () => {
  const products = await getPopularProducts();

  return json({ popularProducts: products });
};

export default function Index() {
  const [numSavedItems, setNumSavedItems] = useState<number>(0);

  useEffect(() => {
    setNumSavedItems(Object.keys({ ...window.localStorage }).length);
  }, []);

  return (
    <main className="relative min-h-screen bg-beige sm:flex sm:items-center sm:justify-center">
      <Banner />
      <Header
        categories={[]}
        initialShowSunCategories={false}
        numSavedItems={numSavedItems}
      />
      <div className="absolute top-20 h-full w-full md:top-40">
        <ChangingBanner />
        {/* <ImageBanner /> */}
        {/* <CurrentTheme /> */}
        {/* <div className="h-96"></div> */}
        <CategoriesImages />
        <CategoriesIcons />
        {/* <PopularProducts /> */}
        <AboutUs />
        <Footer />
      </div>
    </main>
  );
}

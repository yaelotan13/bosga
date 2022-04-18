import * as React from "react";
import { useState } from "react";
import { getProducts, getProductsByCategory } from "~/models/products.server";
import { useLoaderData, LoaderFunction, json } from "remix";
import { Banner, Header, Product, Spinner, CategoryTitle } from "../components";

export const loader: LoaderFunction = async () => {
  const products = await getProducts(); // TODO - add filters for "decor"
  return json({ items: products });
};

export default function Decor() {
  const data = useLoaderData();
  const [products, setProducts] = useState([]);
  const categories = [
    // { title: "New", imgSrc: "/icons/new", active: true },
    {
      title: "Unique",
      imgSrc: "/icons/unicorn",
      animatedSrc: "/icons/unicorn.gif",
      active: true,
    },
    { title: "Best Sellers", imgSrc: "/icons/bestsellers", active: false },
    { title: "Furniture", imgSrc: "/icons/bureau", active: false },
    { title: "Blankets", imgSrc: "/icons/blanket", active: false },
    { title: "Plants", imgSrc: "/icons/plant", active: false },
    { title: "Vases", imgSrc: "/icons/pottery", active: false },
    { title: "Rugs", imgSrc: "/icons/rug", active: false },
    { title: "Wall Art", imgSrc: "/icons/wall-art", active: false },
    { title: "Pillows", imgSrc: "/icons/pillow", active: false },
    { title: "Candles", imgSrc: "/icons/candle", active: false },
  ];

  React.useEffect(() => {
    const mappedProducts = [...data.items];
    data.items.forEach((item, index) => {
      if (productIsSaved(item.id)) {
        mappedProducts[index].isSaved = true;
      } else {
        mappedProducts[index].isSaved = false;
      }
    });

    setProducts(mappedProducts);
    console.log("** mapped products! ", mappedProducts);
  }, data);
  const handleCategoryClicked = async (category) => {
    // TODO - get products by category
  };

  const handleSaveProduct = (product) => {
    window.localStorage.setItem(
      "bosga".concat(product.id),
      JSON.stringify(product)
    );
  };

  const handleRemoveProduct = (productId: string) => {
    window.localStorage.removeItem("bosga".concat(productId));
  };

  const productIsSaved = (productId: string): boolean => {
    return window.localStorage.getItem("bosga".concat(productId)) !== null;
  };

  return (
    <main className="relative min-h-screen bg-beige text-text sm:flex sm:items-center sm:justify-center">
      <Banner />
      <Header
        categories={categories}
        onClick={handleCategoryClicked}
        withIcons={false}
      />
      <div className="absolute top-36 h-full w-full">
        <div className="flex w-full justify-center">
          <div className="mx-32 w-10/12 pr-8">
            <CategoryTitle
              category="Décor"
              productNumber={products.length}
              className="ml-3 mt-32"
            />
            <div className="mt-5 grid w-full grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
              {!data ? (
                <div className="col-span-3 flex items-center justify-center">
                  <Spinner />
                </div>
              ) : (
                <>
                  {products.map((item) => (
                    <Product
                      key={item.id}
                      primaryImage={item.primaryImage}
                      secondaryImage={item.secondaryImage}
                      title={item.title}
                      price={item.price}
                      link={item.link}
                      onSaveProduct={() => handleSaveProduct(item)}
                      onRemoveProduct={() => handleRemoveProduct(item.id)}
                      heartStartActive={item.isSaved}
                    />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

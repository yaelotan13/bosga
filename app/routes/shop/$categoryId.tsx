import React, { useEffect, useState } from "react";
import type { LoaderFunction } from "remix";
import { json, useLoaderData } from "remix";
import { Banner, CategoryTitle, Header, Product, Spinner } from "~/components";
import { getProducts } from "~/models/products.server";

export const loader: LoaderFunction = async ({ request, params }) => {
  const url = new URL(request.url);
  const subCategory = url?.searchParams.get("subCategory");
  const from = url?.searchParams.get("from");
  const to = url?.searchParams.get("to");

  const products = await getProducts(
    params.categoryId,
    subCategory ?? undefined,
    from ?? undefined,
    to ?? undefined
  );

  return json({
    items: products,
    category: params.categoryId,
    subCategory,
  });
};

export default function Products() {
  const data = useLoaderData();
  const [products, setProducts] = useState([]);
  const [numSaved, setNameSaved] = useState<number>(0);

  useEffect(() => {
    const mappedProducts = [...data.items];

    data.items.forEach((item, index) => {
      if (productIsSaved(item.id)) {
        mappedProducts[index].isSaved = true;
      } else {
        mappedProducts[index].isSaved = false;
      }
    });

    setProducts(mappedProducts);

    const savedItems = { ...window.localStorage };
    setNameSaved(Object.keys(savedItems).length);
  }, [data]);

  const handleCategoryClicked = async (category) => {
    // TODO - get products by category
    console.log("-- !!!! clicked!!!! --", category);
  };

  const handleSaveProduct = (product) => {
    const newNumSaved = numSaved + 1;
    setNameSaved(newNumSaved);

    window.localStorage.setItem(
      "bosga".concat(product.id),
      JSON.stringify(product)
    );
  };

  const handleRemoveProduct = (productId: string) => {
    const newNumSaved = numSaved - 1;
    setNameSaved(newNumSaved);
    window.localStorage.removeItem("bosga".concat(productId));
  };

  const productIsSaved = (productId: string): boolean => {
    return window.localStorage.getItem("bosga".concat(productId)) !== null;
  };

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <main className="relative min-h-screen bg-beige text-text sm:flex sm:items-center sm:justify-center">
      <Banner />
      <Header onClick={handleCategoryClicked} numSavedItems={numSaved} />
      <div className="absolute top-16 h-full w-full md:top-40">
        <div className="flex w-full justify-center">
          <div className="mx-6 lg:mx-32 lg:w-10/12 lg:pr-8">
            <CategoryTitle
              category={capitalizeFirstLetter(
                data.subCategory ?? data.category
              )}
              productNumber={products.length}
              className="mt-24 ml-3"
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

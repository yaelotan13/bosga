import React, { useEffect, useState } from "react";
import { Banner, Header, Product } from "~/components";

export default function Saved(): JSX.Element {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const items = { ...window.localStorage };
    const savedProducts = [];

    for (const [key, value] of Object.entries(items)) {
      if (key.startsWith("bosga")) {
        savedProducts.push(JSON.parse(value));
      }
    }
    setProducts(savedProducts);
  }, []);

  const handleRemoveProduct = (productId: string) => {
    window.localStorage.removeItem(productId);
    // also remove from the current list of products
    const productIndex = products.findIndex(
      (product) => product.id === productId
    );
    const productsCopy = [...products];

    productsCopy[productIndex].show = false;
    setProducts(productsCopy);
  };

  return (
    <main className="relative min-h-screen bg-beige text-text sm:flex sm:items-center sm:justify-center">
      <Banner />
      <Header withIcons={false} />
      <div className="absolute top-36 h-full w-full">
        <h1 className="m-auto my-7 w-fit text-xl text-red">SAVED</h1>
        <div className="m-auto flex w-10/12 justify-center">
          <div className="mt-5 grid w-full grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((item) => (
              <Product
                key={item.id}
                primaryImage={item.primaryImage}
                secondaryImage={item.secondaryImage}
                title={item.title}
                price={item.price}
                link={item.link}
                heartStartActive={true}
                onRemoveProduct={() => handleRemoveProduct(item.id)}
                show={item.show}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

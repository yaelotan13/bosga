import * as React from "react";
import { useLoaderData, LoaderFunction, json } from "remix";
import { Banner, Header, Product } from "../components";

export const loader: LoaderFunction = async () => {
  return json({
    items: [
      {
        id: "1",
        image:
          "https://images.urbndata.com/is/image/Anthropologie/64516602_095_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1314",
        link: "https://www.anthropologie.com/anthroliving/shop/printed-jem-shower-curtain?category=anthroliving-bathroom&color=095&type=STANDARD&size=72%20X%2072&quantity=1",
        title: "Printed Jem Shower Curtain",
        price: "$62.40",
        seller: "anthropologie",
        primaryImage:
          "https://images.urbndata.com/is/image/Anthropologie/64516602_095_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=131",
        secondaryImage:
          "https://images.urbndata.com/is/image/Anthropologie/64516602_095_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1314",
      },
      {
        id: "2",
        image:
          "https://images.urbndata.com/is/image/Anthropologie/45447789AA_095_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1314",
        link: "https://www.anthropologie.com/anthroliving/shop/tasseled-sun-bath-mat?category=anthroliving-bathroom&color=095&type=STANDARD&size=S&quantity=1",
        title: "Tasseled Sun Bath Mat",
        price: "$43.20",
        seller: "anthropologie",
        primaryImage:
          "https://images.urbndata.com/is/image/Anthropologie/45447789AA_095_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1314",
        secondaryImage:
          "https://images.urbndata.com/is/image/Anthropologie/45447789AA_095_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1314",
      },
      {
        id: "3",
        image:
          "https://images.urbndata.com/is/image/Anthropologie/65672875_040_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1314",
        link: "https://www.anthropologie.com/anthroliving/shop/sarah-campbell-bamboo-melamine-tumbler?category=anthroliving-kitchen&color=040&type=STANDARD&size=Tumbler&quantity=1",
        title: "Sarah Campbell Bamboo Melamine Tumbler",
        price: "$7.00",
        seller: "anthropologie",
        primaryImage:
          "https://images.urbndata.com/is/image/Anthropologie/65672875_040_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1314",
        secondaryImage:
          "https://images.urbndata.com/is/image/Anthropologie/65672875_040_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1314",
      },
      {
        id: "4",
        image:
          "https://images.urbndata.com/is/image/Anthropologie/65979049_015_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1314",
        link: "https://www.anthropologie.com/anthroliving/shop/amber-lewis-for-anthropologie-utensil-caddy?category=anthroliving-kitchen&color=015&type=STANDARD&size=One%20Size&quantity=1",
        title: "Amber Lewis for Anthropologie Utensil Caddy",
        price: "$58.00",
        seller: "anthropologie",
        primaryImage:
          "https://images.urbndata.com/is/image/Anthropologie/65979049_015_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1314",
        secondaryImage:
          "https://images.urbndata.com/is/image/Anthropologie/65979049_015_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1314",
      },
      {
        id: "5",
        image:
          "https://images.urbndata.com/is/image/Anthropologie/60657715_000_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1314",
        link: "https://www.anthropologie.com/anthroliving/shop/mabelle-table-lamp?category=anthroliving-room-wall-decor&color=000&type=STANDARD&size=One%20Size&quantity=1",
        title: "Mabelle Table Lamp",
        price: "$158.00",
        seller: "anthropologie",
        primaryImage:
          "https://images.urbndata.com/is/image/Anthropologie/60657715_000_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1314",
        secondaryImage:
          "https://images.urbndata.com/is/image/Anthropologie/60657715_000_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1314",
      },
      {
        id: "6",
        image:
          "https://images.urbndata.com/is/image/Anthropologie/45541485AA_066_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1314",
        link: "https://www.anthropologie.com/anthroliving/shop/carmo-vase?category=anthroliving-room-wall-decor&color=066&type=STANDARD&size=S&quantity=1",
        title: "Carmo Vase",
        price: "$32.00",
        seller: "anthropologie",
        primaryImage:
          "https://images.urbndata.com/is/image/Anthropologie/45541485AA_066_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1314",
        secondaryImage:
          "https://images.urbndata.com/is/image/Anthropologie/45541485AA_066_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1314",
      },
      {
        id: "7",
        image:
          "https://images.urbndata.com/is/image/Anthropologie/48097422_070_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1314",
        link: "https://www.anthropologie.com/anthroliving/shop/grecian-bust-pot?category=anthroliving-room-wall-decor&color=070&type=STANDARD&quantity=1",
        title: "Grecian Bust Pot",
        price: "$24.00 – $44.00",
        seller: "anthropologie",
        primaryImage:
          "https://images.urbndata.com/is/image/Anthropologie/48097422_070_b10?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1314",
        secondaryImage:
          "https://images.urbndata.com/is/image/Anthropologie/48097422_070_b4?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1314",
      },
      {
        id: "8",
        image:
          "https://images.urbndata.com/is/image/Anthropologie/D48088652_901_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1314",
        link: "https://www.anthropologie.com/anthroliving/shop/tiled-margot-monogram-mug?category=anthroliving-all-gifts&color=901&type=STANDARD&quantity=1",
        title: "Tiled Margot Monogram Mug",
        price: "$14.00",
        seller: "anthropologie",
        primaryImage:
          "https://images.urbndata.com/is/image/Anthropologie/D48088652_901_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1314",
        secondaryImage:
          "https://images.urbndata.com/is/image/Anthropologie/D48088652_901_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1314",
      },
    ],
  });
};

export default function Shop() {
  const data = useLoaderData();

  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <Banner />
      <Header />
      <div className="absolute top-28 h-full w-full">
        <h2 className="my-7 text-center text-3xl">Shop All</h2>
        <div className="flex w-full">
          <div className="ml-5 flex w-1/4 flex-col border p-6 font-light">
            <h3 className="text-2xl">Filter by</h3>
            <hr className="my-4 h-[5px]" />
            <h2 className="mb-1.5 text-lg">Product categories</h2>
            <p className="mb-1 cursor-pointer text-sm">Home + Decor</p>
            <p className="mb-1 cursor-pointer text-sm">Wellness</p>
          </div>
          <div className="mx-7 grid w-full grid-cols-2 gap-5 md:grid-cols-3 lg:w-3/4 lg:grid-cols-3 xl:w-3/4 xl:grid-cols-4">
            {data.items.map((item) => (
              <Product
                key={item.id}
                primaryImage={item.primaryImage}
                secondaryImage={item.secondaryImage}
                title={item.title}
                price={item.price}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

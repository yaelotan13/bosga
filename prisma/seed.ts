import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
  const email = "rachel@remix.run";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = await bcrypt.hash("racheliscool", 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  await prisma.note.create({
    data: {
      title: "My first note",
      body: "Hello, world!",
      userId: user.id,
    },
  });

  await prisma.note.create({
    data: {
      title: "My second note",
      body: "Hello, world!",
      userId: user.id,
    },
  });

  await prisma.note.create({
    data: {
      title: "My second note",
      body: "Hello, world!",
      userId: user.id,
    },
  });

  const items = [
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
  ];

  for (let i = 0; i < items.length; i++) {
    await prisma.product.create({
      data: {
        link: items[i].link,
        title: items[i].title,
        price: items[i].price,
        seller: items[i].seller,
        primaryImage: items[i].primaryImage,
        secondaryImage: items[i].secondaryImage,
      },
    });
  }

  const tags = [
    { name: "kitchen" },
    { name: "decor" },
    { name: "bedroom" },
    { name: "bedding" },
    { name: "bath" },
    { name: "outdoor" },
    { name: "nursery" },
    { name: "bestSellers" },
    { name: "new" },
    { name: "furniture" },
    { name: "blankets" },
    { name: "plants" },
    { name: "vases" },
    { name: "rugs" },
    { name: "wallArt" },
    { name: "pillows" },
    { name: "candles" },
  ];

  for (let i = 0; i < tags.length; i++) {
    await prisma.tag.create({
      data: {
        name: tags[i].name,
      },
    });
  }
  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

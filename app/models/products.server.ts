import { prisma } from "~/db.server";

export function getProducts(
  category?: string,
  subCategory: string | undefined = undefined,
  from: string = "0",
  to: string = "100000000"
) {
  return prisma.product.findMany({
    where: {
      OR: [
        {
          tags: {
            some: {
              tag: {
                name: category,
              },
            },
          },
        },
        {
          tags: {
            some: {
              tag: {
                name: subCategory,
              },
            },
          },
        },
      ],
      AND: [
        {
          price: {
            gte: parseFloat(from),
          },
        },
        {
          price: {
            lte: parseFloat(to),
          },
        },
      ],
    },
  });
}

export async function getPopularProducts() {
  return prisma.product.findMany({
    where: {
      tags: {
        some: {
          tag: {
            name: "popular",
          },
        },
      },
    },
  });
}

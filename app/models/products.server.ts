import { prisma } from "~/db.server";

export function getProducts() {
  return prisma.product.findMany();
}

export function getProductsByCategory(category) {
  return prisma.product.findMany({
    where: {
      tags: {
        some: {
          name: {
            contains: category,
          },
        },
      },
    },
  });
}

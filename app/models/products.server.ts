import { prisma } from "~/db.server";

export function getProducts() {
  return prisma.product.findMany();
}

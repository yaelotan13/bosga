-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "primaryImage" TEXT NOT NULL,
    "secondaryImage" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "seller" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

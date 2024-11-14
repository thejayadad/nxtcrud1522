/*
  Warnings:

  - Made the column `rating` on table `Book` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Book" ALTER COLUMN "readStatus" SET DATA TYPE TEXT,
ALTER COLUMN "rating" SET NOT NULL,
ALTER COLUMN "rating" SET DATA TYPE TEXT;

/*
  Warnings:

  - You are about to drop the column `name` on the `Product` table. All the data in the column will be lost.
  - Added the required column `department` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subtitle` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "name",
ADD COLUMN     "department" TEXT NOT NULL,
ADD COLUMN     "subtitle" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

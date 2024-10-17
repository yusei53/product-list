/*
  Warnings:

  - You are about to drop the column `department` on the `Product` table. All the data in the column will be lost.
  - The `developer` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `developType` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "department",
ADD COLUMN     "developType" TEXT NOT NULL,
ADD COLUMN     "productURL" TEXT,
DROP COLUMN "developer",
ADD COLUMN     "developer" TEXT[];

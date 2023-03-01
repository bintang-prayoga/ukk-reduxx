/*
  Warnings:

  - You are about to drop the column `release` on the `Comic` table. All the data in the column will be lost.
  - Added the required column `publication` to the `Comic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comic" DROP COLUMN "release",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "publication" TEXT NOT NULL;

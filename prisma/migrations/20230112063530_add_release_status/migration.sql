/*
  Warnings:

  - Added the required column `release` to the `Manga` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Manga` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Manga" ADD COLUMN     "release" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL;

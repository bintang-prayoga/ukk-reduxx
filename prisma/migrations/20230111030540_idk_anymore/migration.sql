/*
  Warnings:

  - Added the required column `coverArt` to the `Manga` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Manga" ADD COLUMN     "coverArt" TEXT NOT NULL;

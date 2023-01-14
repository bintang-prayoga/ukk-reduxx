/*
  Warnings:

  - You are about to drop the column `coverArt` on the `Manga` table. All the data in the column will be lost.
  - You are about to drop the `Chapter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Chapter_on_User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Favorite` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Genre_on_Manga` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Images_on_Chapter` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Chapter" DROP CONSTRAINT "Chapter_mangaId_fkey";

-- DropForeignKey
ALTER TABLE "Chapter_on_User" DROP CONSTRAINT "Chapter_on_User_chapterId_fkey";

-- DropForeignKey
ALTER TABLE "Chapter_on_User" DROP CONSTRAINT "Chapter_on_User_userId_fkey";

-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_mangaId_fkey";

-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_userId_fkey";

-- DropForeignKey
ALTER TABLE "Genre_on_Manga" DROP CONSTRAINT "Genre_on_Manga_genreId_fkey";

-- DropForeignKey
ALTER TABLE "Genre_on_Manga" DROP CONSTRAINT "Genre_on_Manga_mangaId_fkey";

-- DropForeignKey
ALTER TABLE "Images_on_Chapter" DROP CONSTRAINT "Images_on_Chapter_chapterId_fkey";

-- DropForeignKey
ALTER TABLE "Images_on_Chapter" DROP CONSTRAINT "Images_on_Chapter_imagesId_fkey";

-- AlterTable
ALTER TABLE "Manga" DROP COLUMN "coverArt";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "Chapter";

-- DropTable
DROP TABLE "Chapter_on_User";

-- DropTable
DROP TABLE "Favorite";

-- DropTable
DROP TABLE "Genre_on_Manga";

-- DropTable
DROP TABLE "Images_on_Chapter";

-- CreateTable
CREATE TABLE "Chapters" (
    "id" TEXT NOT NULL,
    "mangaId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "chapNum" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Chapters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GenreToManga" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_GenreToManga_AB_unique" ON "_GenreToManga"("A", "B");

-- CreateIndex
CREATE INDEX "_GenreToManga_B_index" ON "_GenreToManga"("B");

-- AddForeignKey
ALTER TABLE "Chapters" ADD CONSTRAINT "Chapters_mangaId_fkey" FOREIGN KEY ("mangaId") REFERENCES "Manga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToManga" ADD CONSTRAINT "_GenreToManga_A_fkey" FOREIGN KEY ("A") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToManga" ADD CONSTRAINT "_GenreToManga_B_fkey" FOREIGN KEY ("B") REFERENCES "Manga"("id") ON DELETE CASCADE ON UPDATE CASCADE;

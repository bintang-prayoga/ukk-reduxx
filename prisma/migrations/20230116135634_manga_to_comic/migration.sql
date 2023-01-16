/*
  Warnings:

  - You are about to drop the column `mangaId` on the `Chapters` table. All the data in the column will be lost.
  - You are about to drop the column `mangaId` on the `Favorite` table. All the data in the column will be lost.
  - You are about to drop the `Manga` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_GenreToManga` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `comicId` to the `Chapters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comicId` to the `Favorite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `chapterId` to the `Images` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Chapters" DROP CONSTRAINT "Chapters_mangaId_fkey";

-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_mangaId_fkey";

-- DropForeignKey
ALTER TABLE "_GenreToManga" DROP CONSTRAINT "_GenreToManga_A_fkey";

-- DropForeignKey
ALTER TABLE "_GenreToManga" DROP CONSTRAINT "_GenreToManga_B_fkey";

-- AlterTable
ALTER TABLE "Chapters" DROP COLUMN "mangaId",
ADD COLUMN     "comicId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Favorite" DROP COLUMN "mangaId",
ADD COLUMN     "comicId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Images" ADD COLUMN     "chapterId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Manga";

-- DropTable
DROP TABLE "_GenreToManga";

-- CreateTable
CREATE TABLE "Comic" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "synopsis" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "coverArt" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "release" TEXT NOT NULL,
    "featured" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Comic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ComicToGenre" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ComicToGenre_AB_unique" ON "_ComicToGenre"("A", "B");

-- CreateIndex
CREATE INDEX "_ComicToGenre_B_index" ON "_ComicToGenre"("B");

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_comicId_fkey" FOREIGN KEY ("comicId") REFERENCES "Comic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chapters" ADD CONSTRAINT "Chapters_comicId_fkey" FOREIGN KEY ("comicId") REFERENCES "Comic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Images" ADD CONSTRAINT "Images_chapterId_fkey" FOREIGN KEY ("chapterId") REFERENCES "Chapters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ComicToGenre" ADD CONSTRAINT "_ComicToGenre_A_fkey" FOREIGN KEY ("A") REFERENCES "Comic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ComicToGenre" ADD CONSTRAINT "_ComicToGenre_B_fkey" FOREIGN KEY ("B") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

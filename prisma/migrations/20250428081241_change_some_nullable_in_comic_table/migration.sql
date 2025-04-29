/*
  Warnings:

  - The primary key for the `_ComicToGenre` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `_bookmarks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `_createdComic` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[A,B]` on the table `_ComicToGenre` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[A,B]` on the table `_bookmarks` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[A,B]` on the table `_createdComic` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `exclusivity` to the `Comic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Comic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comic" ADD COLUMN     "exclusivity" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL,
ALTER COLUMN "author" DROP NOT NULL,
ALTER COLUMN "artist" DROP NOT NULL,
ALTER COLUMN "status" DROP NOT NULL,
ALTER COLUMN "publication" DROP NOT NULL;

-- AlterTable
ALTER TABLE "_ComicToGenre" DROP CONSTRAINT "_ComicToGenre_AB_pkey";

-- AlterTable
ALTER TABLE "_bookmarks" DROP CONSTRAINT "_bookmarks_AB_pkey";

-- AlterTable
ALTER TABLE "_createdComic" DROP CONSTRAINT "_createdComic_AB_pkey";

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "comicId" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "dislikes" INTEGER NOT NULL DEFAULT 0,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "isEdited" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "parentId" TEXT,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "_ComicToGenre_AB_unique" ON "_ComicToGenre"("A", "B");

-- CreateIndex
CREATE UNIQUE INDEX "_bookmarks_AB_unique" ON "_bookmarks"("A", "B");

-- CreateIndex
CREATE UNIQUE INDEX "_createdComic_AB_unique" ON "_createdComic"("A", "B");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_comicId_fkey" FOREIGN KEY ("comicId") REFERENCES "Comic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

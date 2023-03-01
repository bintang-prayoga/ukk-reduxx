/*
  Warnings:

  - The primary key for the `Favorite` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Favorite` table. All the data in the column will be lost.
  - You are about to drop the `_ComicToFavorite` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_FavoriteToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `comicId` to the `Favorite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Favorite` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ComicToFavorite" DROP CONSTRAINT "_ComicToFavorite_A_fkey";

-- DropForeignKey
ALTER TABLE "_ComicToFavorite" DROP CONSTRAINT "_ComicToFavorite_B_fkey";

-- DropForeignKey
ALTER TABLE "_FavoriteToUser" DROP CONSTRAINT "_FavoriteToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_FavoriteToUser" DROP CONSTRAINT "_FavoriteToUser_B_fkey";

-- AlterTable
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_pkey",
DROP COLUMN "id",
ADD COLUMN     "comicId" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ADD CONSTRAINT "Favorite_pkey" PRIMARY KEY ("userId", "comicId");

-- DropTable
DROP TABLE "_ComicToFavorite";

-- DropTable
DROP TABLE "_FavoriteToUser";

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_comicId_fkey" FOREIGN KEY ("comicId") REFERENCES "Comic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - The primary key for the `Chapter_on_User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Favorite` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Genre_on_Manga` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Images_on_Chapter` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `id` was added to the `Chapter_on_User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `Favorite` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `Genre_on_Manga` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `Images_on_Chapter` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Chapter_on_User" DROP CONSTRAINT "Chapter_on_User_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Chapter_on_User_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Favorite_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Genre_on_Manga" DROP CONSTRAINT "Genre_on_Manga_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Genre_on_Manga_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Images_on_Chapter" DROP CONSTRAINT "Images_on_Chapter_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Images_on_Chapter_pkey" PRIMARY KEY ("id");

/*
  Warnings:

  - The primary key for the `Images` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Images` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Images" DROP CONSTRAINT "Images_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Images_pkey" PRIMARY KEY ("chapterId", "pageNum");

/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Comic` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Comic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comic" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Comic_slug_key" ON "Comic"("slug");

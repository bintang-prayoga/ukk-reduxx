/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Comic` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Comic_title_key" ON "Comic"("title");

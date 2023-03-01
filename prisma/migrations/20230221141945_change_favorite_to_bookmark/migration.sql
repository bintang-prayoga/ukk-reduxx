/*
  Warnings:

  - You are about to drop the `_favorites` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_favorites" DROP CONSTRAINT "_favorites_A_fkey";

-- DropForeignKey
ALTER TABLE "_favorites" DROP CONSTRAINT "_favorites_B_fkey";

-- DropTable
DROP TABLE "_favorites";

-- CreateTable
CREATE TABLE "_bookmarks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_bookmarks_AB_unique" ON "_bookmarks"("A", "B");

-- CreateIndex
CREATE INDEX "_bookmarks_B_index" ON "_bookmarks"("B");

-- AddForeignKey
ALTER TABLE "_bookmarks" ADD CONSTRAINT "_bookmarks_A_fkey" FOREIGN KEY ("A") REFERENCES "Comic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_bookmarks" ADD CONSTRAINT "_bookmarks_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

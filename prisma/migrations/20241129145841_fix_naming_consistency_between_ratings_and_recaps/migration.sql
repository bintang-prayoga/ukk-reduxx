-- AlterTable
ALTER TABLE "_ComicToGenre" ADD CONSTRAINT "_ComicToGenre_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_ComicToGenre_AB_unique";

-- AlterTable
ALTER TABLE "_bookmarks" ADD CONSTRAINT "_bookmarks_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_bookmarks_AB_unique";

-- AlterTable
ALTER TABLE "_createdComic" ADD CONSTRAINT "_createdComic_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_createdComic_AB_unique";

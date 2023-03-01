/*
  Warnings:

  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sessions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "Sessions" DROP CONSTRAINT "Sessions_userId_fkey";

-- AlterTable
ALTER TABLE "Comic" ADD COLUMN     "createdById" TEXT NOT NULL DEFAULT '';

-- DropTable
DROP TABLE "Account";

-- DropTable
DROP TABLE "Sessions";

-- AddForeignKey
ALTER TABLE "Comic" ADD CONSTRAINT "Comic_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

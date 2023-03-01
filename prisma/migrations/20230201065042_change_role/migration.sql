/*
  Warnings:

  - You are about to drop the column `isAdmin` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isSuper` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "isAdmin",
DROP COLUMN "isSuper",
ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'user';

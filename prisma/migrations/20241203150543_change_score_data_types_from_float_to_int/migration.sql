/*
  Warnings:

  - You are about to alter the column `score` on the `Rating` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Rating" ALTER COLUMN "score" DROP NOT NULL,
ALTER COLUMN "score" SET DATA TYPE INTEGER;

/*
  Warnings:

  - You are about to alter the column `pageNum` on the `Images` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Images" ALTER COLUMN "pageNum" SET DATA TYPE INTEGER;

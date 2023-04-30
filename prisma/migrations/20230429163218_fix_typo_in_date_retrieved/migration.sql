/*
  Warnings:

  - You are about to drop the column `dataRetrieved` on the `LostFound` table. All the data in the column will be lost.
  - Added the required column `dateRetrieved` to the `LostFound` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LostFound" DROP COLUMN "dataRetrieved",
ADD COLUMN     "dateRetrieved" TEXT NOT NULL;

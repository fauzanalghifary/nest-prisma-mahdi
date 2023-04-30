/*
  Warnings:

  - Changed the type of `dateFound` on the `LostFound` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `dateRetrieved` on the `LostFound` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "LostFound" DROP COLUMN "dateFound",
ADD COLUMN     "dateFound" TIMESTAMP(3) NOT NULL,
DROP COLUMN "dateRetrieved",
ADD COLUMN     "dateRetrieved" TIMESTAMP(3) NOT NULL;

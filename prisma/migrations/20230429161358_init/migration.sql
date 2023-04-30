-- CreateEnum
CREATE TYPE "Status" AS ENUM ('FOUND', 'LOST', 'RETRIEVED');

-- CreateTable
CREATE TABLE "LostFound" (
    "id" SERIAL NOT NULL,
    "item" TEXT NOT NULL,
    "characteristic" TEXT NOT NULL,
    "status" "Status" NOT NULL,
    "location" TEXT NOT NULL,
    "dateFound" TEXT NOT NULL,
    "dataRetrieved" TEXT NOT NULL,

    CONSTRAINT "LostFound_pkey" PRIMARY KEY ("id")
);

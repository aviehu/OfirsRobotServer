/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Positions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" INTEGER NOT NULL,
    "timeToGet" INTEGER NOT NULL,
    "timeToStay" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Positions_name_key" ON "Positions"("name");

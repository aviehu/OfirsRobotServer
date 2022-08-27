/*
  Warnings:

  - Added the required column `position` to the `Positions` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Positions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" INTEGER NOT NULL,
    "timeToGet" INTEGER NOT NULL,
    "timeToStay" INTEGER NOT NULL,
    "position" INTEGER NOT NULL
);
INSERT INTO "new_Positions" ("id", "name", "timeToGet", "timeToStay") SELECT "id", "name", "timeToGet", "timeToStay" FROM "Positions";
DROP TABLE "Positions";
ALTER TABLE "new_Positions" RENAME TO "Positions";
CREATE UNIQUE INDEX "Positions_name_key" ON "Positions"("name");
CREATE UNIQUE INDEX "Positions_position_key" ON "Positions"("position");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

/*
  Warnings:

  - You are about to alter the column `resource` on the `rolepermission` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `rolepermission` MODIFY `resource` ENUM('all', 'user_all', 'lab_all', 'pharmacy_all') NOT NULL;

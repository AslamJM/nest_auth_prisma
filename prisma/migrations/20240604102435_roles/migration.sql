/*
  Warnings:

  - You are about to drop the `_roletorolepermissions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_roletouser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `rolepermissions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_roletorolepermissions` DROP FOREIGN KEY `_RoleToRolePermissions_A_fkey`;

-- DropForeignKey
ALTER TABLE `_roletorolepermissions` DROP FOREIGN KEY `_RoleToRolePermissions_B_fkey`;

-- DropForeignKey
ALTER TABLE `_roletouser` DROP FOREIGN KEY `_RoleToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_roletouser` DROP FOREIGN KEY `_RoleToUser_B_fkey`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `role_id` INTEGER NULL;

-- DropTable
DROP TABLE `_roletorolepermissions`;

-- DropTable
DROP TABLE `_roletouser`;

-- DropTable
DROP TABLE `rolepermissions`;

-- CreateTable
CREATE TABLE `RolePermission` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `resource` VARCHAR(191) NOT NULL,
    `can_create` BOOLEAN NOT NULL,
    `can_view` BOOLEAN NOT NULL,
    `can_edit` BOOLEAN NOT NULL,
    `can_delete` BOOLEAN NOT NULL,
    `role_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RolePermission` ADD CONSTRAINT `RolePermission_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

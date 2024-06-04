/*
  Warnings:

  - The primary key for the `grn` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `grn` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `purchase_order_id` on the `grn` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `grn_details` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `grn_details` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `grn_id` on the `grn_details` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `purchase_histories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `purchase_histories` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `purchase_order_id` on the `purchase_histories` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `purchase_order_details` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `purchase_order_details` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `purchase_order_id` on the `purchase_order_details` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `purchase_orders` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `purchase_orders` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `purchase_returns` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `purchase_returns` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `purchase_order_id` on the `purchase_returns` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `saledetails` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `saledetails` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `sale_id` on the `saledetails` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `salegoodsdetails` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `salegoodsdetails` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `sale_details_id` on the `salegoodsdetails` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `grn_id` on the `salegoodsdetails` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `salereturnsdetails` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `salereturnsdetails` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `sale_good_details_id` on the `salereturnsdetails` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `sales` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `sales` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `sales_histories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `sales_histories` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `sale_id` on the `sales_histories` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `transfer_good_details` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `transfer_good_details` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `transfer_request_details_id` on the `transfer_good_details` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `grn_id` on the `transfer_good_details` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `transfer_request_details` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `transfer_request_details` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `transfer_request_id` on the `transfer_request_details` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `transfer_request_histories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `transfer_request_histories` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `transfer_request_id` on the `transfer_request_histories` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `transfer_requests` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `transfer_requests` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to drop the `users_roles` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `remarks` to the `purchase_histories` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `grn` DROP FOREIGN KEY `grn_purchase_order_id_fkey`;

-- DropForeignKey
ALTER TABLE `grn_details` DROP FOREIGN KEY `grn_details_grn_id_fkey`;

-- DropForeignKey
ALTER TABLE `purchase_histories` DROP FOREIGN KEY `purchase_histories_purchase_order_id_fkey`;

-- DropForeignKey
ALTER TABLE `purchase_order_details` DROP FOREIGN KEY `purchase_order_details_purchase_order_id_fkey`;

-- DropForeignKey
ALTER TABLE `saledetails` DROP FOREIGN KEY `SaleDetails_sale_id_fkey`;

-- DropForeignKey
ALTER TABLE `salegoodsdetails` DROP FOREIGN KEY `SaleGoodsDetails_sale_details_id_fkey`;

-- DropForeignKey
ALTER TABLE `salereturnsdetails` DROP FOREIGN KEY `SaleReturnsDetails_sale_good_details_id_fkey`;

-- DropForeignKey
ALTER TABLE `sales_histories` DROP FOREIGN KEY `sales_histories_sale_id_fkey`;

-- DropForeignKey
ALTER TABLE `transfer_good_details` DROP FOREIGN KEY `transfer_good_details_transfer_request_details_id_fkey`;

-- DropForeignKey
ALTER TABLE `transfer_request_details` DROP FOREIGN KEY `transfer_request_details_transfer_request_id_fkey`;

-- DropForeignKey
ALTER TABLE `transfer_request_histories` DROP FOREIGN KEY `transfer_request_histories_transfer_request_id_fkey`;

-- DropForeignKey
ALTER TABLE `users_roles` DROP FOREIGN KEY `users_roles_user_id_fkey`;

-- AlterTable
ALTER TABLE `grn` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `purchase_order_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `grn_details` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `grn_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `purchase_histories` DROP PRIMARY KEY,
    ADD COLUMN `remarks` VARCHAR(191) NOT NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `purchase_order_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `purchase_order_details` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `purchase_order_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `purchase_orders` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `purchase_returns` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `purchase_order_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `saledetails` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `sale_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `salegoodsdetails` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `sale_details_id` INTEGER NOT NULL,
    MODIFY `grn_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `salereturnsdetails` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `sale_good_details_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `sales` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `sales_histories` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `sale_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `transfer_good_details` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `transfer_request_details_id` INTEGER NOT NULL,
    MODIFY `grn_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `transfer_request_details` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `transfer_request_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `transfer_request_histories` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `transfer_request_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `transfer_requests` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `users_roles`;

-- CreateTable
CREATE TABLE `RolePermissions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `resource_name` VARCHAR(191) NOT NULL,
    `can_create` BOOLEAN NOT NULL,
    `can_view` BOOLEAN NOT NULL,
    `can_edit` BOOLEAN NOT NULL,
    `can_delete` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_RoleToUser` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_RoleToUser_AB_unique`(`A`, `B`),
    INDEX `_RoleToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_RoleToRolePermissions` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_RoleToRolePermissions_AB_unique`(`A`, `B`),
    INDEX `_RoleToRolePermissions_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `purchase_order_details` ADD CONSTRAINT `purchase_order_details_purchase_order_id_fkey` FOREIGN KEY (`purchase_order_id`) REFERENCES `purchase_orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `grn` ADD CONSTRAINT `grn_purchase_order_id_fkey` FOREIGN KEY (`purchase_order_id`) REFERENCES `purchase_orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `grn_details` ADD CONSTRAINT `grn_details_grn_id_fkey` FOREIGN KEY (`grn_id`) REFERENCES `grn`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `purchase_histories` ADD CONSTRAINT `purchase_histories_purchase_order_id_fkey` FOREIGN KEY (`purchase_order_id`) REFERENCES `purchase_orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transfer_request_details` ADD CONSTRAINT `transfer_request_details_transfer_request_id_fkey` FOREIGN KEY (`transfer_request_id`) REFERENCES `transfer_requests`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transfer_good_details` ADD CONSTRAINT `transfer_good_details_transfer_request_details_id_fkey` FOREIGN KEY (`transfer_request_details_id`) REFERENCES `transfer_request_details`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transfer_request_histories` ADD CONSTRAINT `transfer_request_histories_transfer_request_id_fkey` FOREIGN KEY (`transfer_request_id`) REFERENCES `transfer_requests`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SaleDetails` ADD CONSTRAINT `SaleDetails_sale_id_fkey` FOREIGN KEY (`sale_id`) REFERENCES `sales`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SaleGoodsDetails` ADD CONSTRAINT `SaleGoodsDetails_sale_details_id_fkey` FOREIGN KEY (`sale_details_id`) REFERENCES `SaleDetails`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SaleReturnsDetails` ADD CONSTRAINT `SaleReturnsDetails_sale_good_details_id_fkey` FOREIGN KEY (`sale_good_details_id`) REFERENCES `SaleGoodsDetails`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sales_histories` ADD CONSTRAINT `sales_histories_sale_id_fkey` FOREIGN KEY (`sale_id`) REFERENCES `sales`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_RoleToUser` ADD CONSTRAINT `_RoleToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `roles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_RoleToUser` ADD CONSTRAINT `_RoleToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_RoleToRolePermissions` ADD CONSTRAINT `_RoleToRolePermissions_A_fkey` FOREIGN KEY (`A`) REFERENCES `roles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_RoleToRolePermissions` ADD CONSTRAINT `_RoleToRolePermissions_B_fkey` FOREIGN KEY (`B`) REFERENCES `RolePermissions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

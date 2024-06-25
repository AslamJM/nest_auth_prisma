/*
  Warnings:

  - You are about to drop the column `grn_id` on the `salegoodsdetails` table. All the data in the column will be lost.
  - Added the required column `grn_detail_id` to the `SaleGoodsDetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `salegoodsdetails` RENAME COLUMN `grn_id` TO `grn_detail_id`;

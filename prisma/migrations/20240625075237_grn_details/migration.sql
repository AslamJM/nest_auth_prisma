/*
  Warnings:

  - You are about to drop the column `grn_id` on the `transfer_good_details` table. All the data in the column will be lost.
  - Added the required column `grn_detail_id` to the `transfer_good_details` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `transfer_good_details` RENAME COLUMN `grn_id` TO `grn_detail_id`;
   

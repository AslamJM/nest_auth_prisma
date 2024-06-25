-- AlterTable
ALTER TABLE `rolepermission` MODIFY `resource` ENUM('all', 'user_all', 'lab_all', 'pharmacy_all', 'products_all') NOT NULL;

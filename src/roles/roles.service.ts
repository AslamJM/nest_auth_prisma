import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { PermissionResources, Prisma } from '@prisma/client';

@Injectable()
export class RolesService {
    constructor(
        private db: DbService
    ) {
    }

    async getAllRoles() {
        try {
            const roles = await this.db.role.findMany({
            })
            return roles
        } catch (error) {
            throw error
        }
    }

    async getOne(id: number) {
        try {
            return await this.db.role.findUnique({ where: { id } })
        } catch (error) {
            throw error
        }
    }

    async getRolePermissionByResource(resource: PermissionResources) {
        return await this.db.rolePermission.findMany({ where: { resource } })
    }


    async create(dto: Prisma.RoleCreateInput) {
        try {
            const role = await this.db.role.create({
                data: dto
            })
            return role
        } catch (error) {
            throw error
        }
    }

    async update(id: number, dto: Prisma.RoleUpdateInput) {
        try {
            const updated = await this.db.role.update({
                where: { id },
                data: dto
            })
            return updated
        } catch (error) {
            throw error
        }
    }

}

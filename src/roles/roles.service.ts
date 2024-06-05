import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CreateRoleDto } from './dto/createRoleDto.dto';
import { PermissionResources } from '@prisma/client';

@Injectable()
export class RolesService {
    constructor(
        private db: DbService
    ) {
    }

    async getAllRoles() {
        const roles = await this.db.role.findMany({
            include: {
                rolePermissions: true
            }
        })
        return roles
    }

    async getRolePermissionByResource(resource: PermissionResources) {
        return await this.db.rolePermission.findMany({ where: { resource } })
    }


    async create(dto: CreateRoleDto) {
        try {
            const { name, description, rolePermissions } = dto

            const role = await this.db.role.create({
                data: {
                    name,
                    description,
                    rolePermissions: {
                        create: [
                            ...rolePermissions
                        ]
                    }
                },

            })
            return role
        } catch (error) {
            return error
        }
    }

}

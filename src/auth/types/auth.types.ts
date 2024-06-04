import { Role, RolePermission } from '@prisma/client';

export type RoleWithPermission = Role & {
    rolePermissions: RolePermission[]
}
import { PermissionResources } from "@prisma/client";

export class RolePermissionDto {
    resource: PermissionResources
    can_create: boolean
    can_delete: boolean
    can_edit: boolean
    can_view: boolean
}
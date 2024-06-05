import { RolePermissionDto } from "./rolePermissionDto.dto"

export class CreateRoleDto {
    name: string
    description: string
    rolePermissions: Array<RolePermissionDto>
}
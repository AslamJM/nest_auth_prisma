import { Prisma } from "@prisma/client"
import { IsString } from "class-validator";

export class CreateRoleDto implements Prisma.RoleCreateInput {
    @IsString()
    name: string

    @IsString()
    description: string

    rolePermissions?: Prisma.RolePermissionCreateNestedManyWithoutRoleInput;
}
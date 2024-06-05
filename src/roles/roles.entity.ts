import { Role, RolePermission } from "@prisma/client";

export class RoleEntity implements Role {
    id: number;
    name: string;
    description: string;
    status: boolean;
    created_at: Date;
    updated_at: Date;
    rolePermissions: RolePermission[]
}
import { User } from "@prisma/client";
import { RoleEntity } from "src/roles/roles.entity";

export class UserEntity implements User {
    id: number;
    full_name: string;
    username: string;
    password: string;
    email: string;
    phone: string;
    status: boolean;
    created_at: Date;
    updated_at: Date;
    role_id: number;
    role: RoleEntity

}
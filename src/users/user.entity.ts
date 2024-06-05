import { User } from "@prisma/client";

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

}
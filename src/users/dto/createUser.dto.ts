import { Prisma } from "@prisma/client";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto implements Prisma.UserCreateInput {
    @IsString()
    full_name: string;

    @IsString()
    username: string;

    @IsString()
    @Length(8, 32)
    password: string;

    @IsEmail()
    email: string;

    @IsString()
    phone: string;

    role: Prisma.RoleCreateNestedOneWithoutUsersInput;
}
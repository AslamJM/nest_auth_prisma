import { Body, Controller, Get, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { Roles } from 'src/auth/decorators/role.decorator';
import { PermissionResources } from '@prisma/client';
import { RolesGuard } from 'src/auth/guards/role.guard';
import { CreateUserDto } from './dto/createUser.dto';
import { TransformInterceptor } from 'src/interceptors/transform.interceptor';
import { ErrorsInterceptor } from 'src/interceptors/errors.interceptor';

@UseGuards(AuthGuard, RolesGuard)
@Roles(PermissionResources.all)
@UseInterceptors(TransformInterceptor, ErrorsInterceptor)
@Controller('users')
export class UsersController {

    constructor(
        private userService: UsersService
    ) { }


    @Get()
    async all() {
        try {
            const users = await this.userService.all()
            return users
        } catch (error) {
            throw error
        }
    }

    @Post()
    async create(
        @Body() input: CreateUserDto
    ) {
        try {
            const created = await this.userService.create(input)
            return created
        } catch (error) {
            throw error
        }
    }
}

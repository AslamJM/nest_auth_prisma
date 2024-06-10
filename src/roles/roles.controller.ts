import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Patch, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { RolesService } from './roles.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RolesGuard } from 'src/auth/guards/role.guard';
import { Roles } from 'src/auth/decorators/role.decorator';
import { CreateRoleDto } from './dto/createRoleDto.dto';
import { TransformInterceptor } from 'src/interceptors/transform.interceptor';
import { ErrorsInterceptor } from 'src/interceptors/errors.interceptor';
import { UpdateRoleDto } from './dto/updateRole.dto';

@UseGuards(AuthGuard, RolesGuard)
@Roles("all")
@UseInterceptors(TransformInterceptor, ErrorsInterceptor)
@Controller('roles')
export class RolesController {

    constructor(
        private rolesService: RolesService
    ) { }

    @Get("")
    @HttpCode(HttpStatus.OK)
    async all() {
        try {
            const roles = await this.rolesService.getAllRoles()
            return roles
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    @Post("")
    @HttpCode(HttpStatus.CREATED)
    async create(
        @Body() dto: CreateRoleDto
    ) {
        try {
            const role = await this.rolesService.create(dto)
            return role
        } catch (error) {
            throw error
        }
    }

    @Get(":id")
    @HttpCode(HttpStatus.OK)
    async getOne(
        @Param("id", ParseIntPipe) id: number
    ) {
        try {
            const role = await this.rolesService.getOne(id)
            return role
        } catch (error) {
            throw error
        }
    }

    @Patch(":id")
    @HttpCode(HttpStatus.OK)
    async update(
        @Param("id", ParseIntPipe) id: number,
        @Body() dto: UpdateRoleDto
    ) {
        try {
            const updated = await this.rolesService.update(id, dto)
            return updated
        } catch (error) {
            throw error
        }
    }
}

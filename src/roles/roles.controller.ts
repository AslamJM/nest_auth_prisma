import { Body, Controller, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/createRoleDto.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RolesGuard } from 'src/auth/guards/role.guard';
import { Roles } from 'src/auth/decorators/role.decorator';

@UseGuards(AuthGuard, RolesGuard)
@Roles("all")
@Controller('roles')
export class RolesController {

    constructor(
        private rolesService: RolesService
    ) { }

    @Post("")
    async create(
        @Body() dto: CreateRoleDto
    ) {
        try {
            const role = await this.rolesService.create(dto)
            return {
                status: HttpStatus.CREATED,
                data: role
            }
        } catch (error) {
            return {
                status: HttpStatus.BAD_REQUEST,
                error
            }
        }
    }
}

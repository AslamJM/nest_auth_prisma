import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { LabService } from './lab.service';
import { CreateLabDto } from './dto/create-lab.dto';
import { UpdateLabDto } from './dto/update-lab.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RolesGuard } from 'src/auth/guards/role.guard';
import { PermissionsGuard } from 'src/auth/guards/permission.guard';
import { RolesEnum } from 'src/auth/auth.enum';
import { Roles } from 'src/auth/decorators/role.decorator';
import { Permissions } from 'src/auth/decorators/permission.decorator';

@Controller('lab')
export class LabController {
  constructor(private readonly labService: LabService) { }

  @Post()
  create(@Body() createLabDto: CreateLabDto) {
    return this.labService.create(createLabDto);
  }

  @UseGuards(AuthGuard, RolesGuard, PermissionsGuard)
  @Roles(RolesEnum.SUPER_ADMIN)
  @Permissions('lab_view')
  @Get()
  findAll() {
    return this.labService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.labService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLabDto: UpdateLabDto) {
    return this.labService.update(+id, updateLabDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.labService.remove(+id);
  }
}

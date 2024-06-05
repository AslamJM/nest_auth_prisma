import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { LabService } from './lab.service';
import { CreateLabDto } from './dto/create-lab.dto';
import { UpdateLabDto } from './dto/update-lab.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RolesGuard } from 'src/auth/guards/role.guard';
import { Roles } from 'src/auth/decorators/role.decorator';
import { PermissionResources } from '@prisma/client';

@Controller('lab')
export class LabController {
  constructor(private readonly labService: LabService) { }

  @Post()
  create(@Body() createLabDto: CreateLabDto) {
    return this.labService.create(createLabDto);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(PermissionResources.all, PermissionResources.lab_all)
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

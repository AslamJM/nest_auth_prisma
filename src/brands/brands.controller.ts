import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { Prisma } from '@prisma/client';


@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) { }

  @Post()
  async create(@Body() createBrandDto: Prisma.BrandCreateInput) {
    try {
      return await this.brandsService.create(createBrandDto);
    } catch (error) {
      throw error
    }

  }

  @Get()
  async findAll() {
    try {
      return await this.brandsService.findAll();
    } catch (error) {
      throw error
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.brandsService.findOne(+id);
    } catch (error) {
      throw error
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBrandDto: Prisma.BrandUpdateInput) {
    try {
      return await this.brandsService.update(+id, updateBrandDto);
    } catch (error) {
      throw error
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.brandsService.remove(+id);
    } catch (error) {
      throw error
    }
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    try {
      return await this.productsService.create(createProductDto);

    } catch (error) {
      throw error
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.productsService.findAll();

    } catch (error) {
      throw error
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.productsService.findOne(+id);

    } catch (error) {
      throw error
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    try {
      return await this.productsService.update(+id, updateProductDto);

    } catch (error) {
      throw error
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.productsService.remove(+id);
    } catch (error) {
      throw error
    }
  }
}

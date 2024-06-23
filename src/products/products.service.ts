import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class ProductsService {

  constructor(
    private prisma: DbService
  ) { }

  async create(createProductDto: CreateProductDto) {
    try {
      const product = await this.prisma.product.create({
        data: createProductDto
      })
      return product
    } catch (error) {
      throw error
    }

  }

  async findAll() {
    try {
      await this.prisma.product.findMany({
        where: { status: true },
        include: { brand: true, category: true }
      })
    } catch (error) {
      throw error
    }
  }

  async findOne(id: number) {
    try {
      const product = await this.prisma.product.findFirstOrThrow({
        where: { id },
        include: { category: true, brand: true }
      })
      return product
    } catch (error) {
      throw error
    }
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      const updated = await this.prisma.product.update({
        where: { id },
        data: updateProductDto
      })
      return updated
    } catch (error) {
      throw error
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.product.update({ where: { id }, data: { status: false } })
    } catch (error) {
      throw error
    }
  }
}

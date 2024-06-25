import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { DbService } from 'src/db/db.service';
import { omit } from 'underscore'

@Injectable()
export class ProductsService {

  constructor(
    private prisma: DbService
  ) { }

  async create(createProductDto: CreateProductDto) {
    const input = omit(createProductDto, ["category_id", "brand_id", "created_by_id", "updated_by_id"])
    try {
      const product = await this.prisma.product.create({
        data: {
          ...input,
          brand: {
            connect: {
              id: createProductDto.brand_id
            }
          },
          category: {
            connect: {
              id: createProductDto.category_id
            }
          },
          created_by: {
            connect: {
              id: createProductDto.created_by_id
            }
          },
          updated_by: {
            connect: {
              id: createProductDto.created_by_id
            }
          }
        }
      })
      return product
    } catch (error) {
      throw error
    }

  }

  async findAll() {
    try {
      const products = await this.prisma.product.findMany({
        where: { status: true },
        include: { brand: true, category: true }
      })
      return products
    } catch (error) {
      throw error
    }
  }

  async findOne(id: number) {
    try {
      const product = await this.prisma.product.findFirstOrThrow({
        where: { id },
        include: {
          category: true, brand: true, grn_details: {
            include: { store: true }
          }
        }
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

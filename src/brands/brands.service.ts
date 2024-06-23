import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';

@Injectable()
export class BrandsService {

  constructor(
    private prisma: DbService
  ) { }

  async create(input: Prisma.BrandCreateInput) {
    try {
      const brand = await this.prisma.brand.create({ data: input })
      return brand
    } catch (error) {
      throw error
    }
  }

  async findAll() {
    return await this.prisma.brand.findMany()
  }

  async findOne(id: number) {
    return await this.prisma.brand.findFirstOrThrow({ where: { id } })
  }

  async update(id: number, update: Prisma.BrandUpdateInput) {
    try {
      const updated = await this.prisma.brand.update({
        where: { id },
        data: update
      })
      return updated
    } catch (error) {
      throw error
    }
  }

  async remove(id: number) {
    try {
      return await this.update(id, { status: false })
    } catch (error) {
      throw error
    }
  }
}

import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';

@Injectable()
export class CategoriesService {

  constructor(
    private prisma: DbService
  ) { }

  async create(input: Prisma.CategoryCreateInput) {
    try {
      const created = await this.prisma.category.create({
        data: input
      })
      return created
    } catch (error) {
      throw error
    }
  }

  async findAll() {
    return await this.prisma.category.findMany({ where: { status: true } })
  }

  async findOne(id: number) {
    return await this.prisma.category.findFirstOrThrow({ where: { id } })
  }

  async update(id: number, update: Prisma.CategoryUpdateInput) {
    try {
      const updated = await this.prisma.category.update({ where: { id }, data: update })
      return updated
    } catch (error) {
      throw error
    }
  }

  async remove(id: number) {
    try {
      const deleted = await this.update(id, { status: false })
      return deleted
    } catch (error) {
      throw error
    }
  }
}

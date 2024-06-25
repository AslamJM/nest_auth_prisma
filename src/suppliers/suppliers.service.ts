import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';

@Injectable()
export class SuppliersService {
  constructor(
    private prisma: DbService
  ) { }

  async create(createStoreDto: Prisma.SupplierCreateInput) {
    return await this.prisma.supplier.create({
      data: createStoreDto
    })
  }

  async findAll() {
    return await this.prisma.store.findMany()
  }

  async findOne(id: number) {
    return await this.prisma.store.findFirstOrThrow({
      where: { id }
    })
  }

  async update(id: number, updateStoreDto: Prisma.SupplierUpdateInput) {
    return await this.prisma.supplier.update({
      where: { id },
      data: updateStoreDto
    })
  }

  async remove(id: number) {
    return `This action removes a #${id} store`;
  }
}

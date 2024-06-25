import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';

@Injectable()
export class StoresService {

  constructor(
    private prisma: DbService
  ) { }

  async create(createStoreDto: Prisma.StoreCreateInput) {
    return await this.prisma.store.create({
      data: createStoreDto
    })
  }

  async findAll() {
    return await this.prisma.store.findMany({
      where: {
        status: true
      }
    })
  }

  async findOne(id: number) {
    return await this.prisma.store.findFirstOrThrow({
      where: { id }
    })
  }

  async update(id: number, updateStoreDto: Prisma.StoreUpdateInput) {
    return await this.prisma.store.update({
      where: { id },
      data: updateStoreDto
    })
  }

  async remove(id: number) {
    return `This action removes a #${id} store`;
  }
}

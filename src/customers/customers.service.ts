import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';

@Injectable()
export class CustomersService {

  constructor(
    private prisma: DbService
  ) { }

  async create(createCustomerDto: Prisma.CustomerCreateInput) {
    return await this.prisma.customer.create({
      data: createCustomerDto
    })
  }

  async findAll() {
    return await this.prisma.customer.findMany()
  }

  async findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  async update(id: number, updateCustomerDto: Prisma.CustomerUpdateInput) {
    return await this.prisma.customer.update({
      where: { id },
      data: updateCustomerDto
    })
  }

  async remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}

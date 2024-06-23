import { Injectable } from '@nestjs/common';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';
import { DbService } from 'src/db/db.service';
import { Prisma } from '@prisma/client';


@Injectable()
export class UnitsService {

  constructor(
    private prisma: DbService
  ) { }

  create(createUnitDto: CreateUnitDto) {
    return 'This action adds a new unit';
  }

  findAll() {
    return `This action returns all units`;
  }

  findOne(id: number) {
    return `This action returns a #${id} unit`;
  }

  update(id: number, updateUnitDto: UpdateUnitDto) {
    return `This action updates a #${id} unit`;
  }

  remove(id: number) {
    return `This action removes a #${id} unit`;
  }
}

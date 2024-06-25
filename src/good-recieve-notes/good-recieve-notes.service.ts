import { Injectable } from '@nestjs/common';
import { CreateGoodRecieveNoteDto } from './dto/create-good-recieve-note.dto';
import { UpdateGoodRecieveNoteDto } from './dto/update-good-recieve-note.dto';
import { DbService } from 'src/db/db.service';
import { PurchaseOrderActions } from '@prisma/client';

@Injectable()
export class GoodRecieveNotesService {

  constructor(
    private prisma: DbService
  ) {

  }

  async create(createGoodRecieveNoteDto: CreateGoodRecieveNoteDto, userId: number) {
    try {
      const { recieved_date, purchase_order_id, details } = createGoodRecieveNoteDto
      const grn = await this.prisma.gRN.create({
        data: {
          recieved_date,
          purchase_order_id,
          grn_details: {
            create: details
          }
        }
      })

      await this.prisma.purchaseOrderHistory.create({
        data: {
          purchase_order_id,
          done_by_id: userId,
          action: PurchaseOrderActions.GRN_CREATED,
          timestamp: new Date(),
          remarks: "GRN created"
        }
      })

      return grn
    } catch (error) {
      throw error
    }
  }

  async findAll() {
    try {
      await this.prisma.gRN.findMany({ where: { status: true } })
    } catch (error) {
      throw error
    }
  }

  async findOne(id: number) {
    try {
      const grn = await this.prisma.gRN.findFirstOrThrow({
        where: { id },
        include: {
          grn_details: {
            include: {
              product: {
                select: {
                  product_name: true,
                  image: true,
                  brand: true,
                  category: true
                },
              },
              store: {
                select: {
                  id: true, name: true
                }
              }
            }
          },
          purchase_order: true
        }
      })
      return grn
    } catch (error) {
      throw error
    }
  }

  update(id: number, updateGoodRecieveNoteDto: UpdateGoodRecieveNoteDto) {
    return `This action updates a #${id} goodRecieveNote`;
  }

  remove(id: number) {
    return `This action removes a #${id} goodRecieveNote`;
  }
}

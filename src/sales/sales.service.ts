import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { DbService } from 'src/db/db.service';
import { SaleHistoryActions } from '@prisma/client';
import { CreateSaleReturnDto } from './dto/create-sale-return.dto';

@Injectable()
export class SalesService {

  constructor(
    private prisma: DbService
  ) { }

  async create(createSaleDto: CreateSaleDto, userId: number) {
    try {
      const sale = await this.prisma.sale.create({
        data: createSaleDto
      })
      const inventoryUpdates = []

      for (const saleDetail of createSaleDto.sale_details.create) {
        for (const good of saleDetail.sale_goods_details.create) {
          const invPromise = this.prisma.gRNDetails.update({
            where: { id: good.grn_detail_id },
            data: {
              quantity: {
                decrement: good.quantity
              }
            }
          })
          inventoryUpdates.push(invPromise)
        }
      }

      await this.prisma.salesHistory.create({
        data: {
          action: SaleHistoryActions.SALE_CREATED,
          remarks: "sale created",
          sale_id: sale.id,
          done_by_id: userId
        }
      })

      await this.prisma.$transaction(inventoryUpdates)

      return sale
    } catch (error) {
      throw error
    }
  }

  findAll() {
    return `This action returns all sales`;
  }

  async findOne(id: number) {
    try {
      const sale = await this.prisma.sale.findFirstOrThrow({
        where: { id },
        include: {
          sale_details: {
            include: {
              product: true,
              sale_goods_details: {
                include: {
                  sale_returned: true
                }
              },
            }
          },
          sale_histories: {
            include: {
              done_by: true
            }
          }
        }
      })
      return sale
    } catch (error) {
      throw error
    }
  }

  async returnSale(saleId: number, dto: CreateSaleReturnDto, userId: number) {
    try {
      const { details } = dto

      for (const detail of details) {
        const salesGood = await this.prisma.saleGoodsDetails.findFirst({ where: { id: detail.sale_good_details_id } })
        await this.prisma.saleReturnsDetails.create({
          data: detail
        })
        await this.prisma.gRNDetails.update({
          where: {
            id: salesGood.grn_detail_id
          },
          data: {
            quantity: {
              increment: detail.return_quantity
            }
          }
        })
      }

      await this.prisma.salesHistory.create({
        data: {
          sale_id: saleId,
          action: SaleHistoryActions.SALE_GOOD_RETURNED,
          remarks: "returned from sale",
          done_by_id: userId,
        }
      })

      return {
        success: true
      }

    } catch (error) {
      throw error
    }
  }

  update(id: number, updateSaleDto: UpdateSaleDto) {
    return `This action updates a #${id} sale`;
  }

  remove(id: number) {
    return `This action removes a #${id} sale`;
  }
}

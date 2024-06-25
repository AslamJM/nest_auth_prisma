import { Injectable } from '@nestjs/common';
import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
import { UpdatePurchaseOrderDto } from './dto/update-purchase-order.dto';
import { DbService } from 'src/db/db.service';
import { PurchaseOrderActions } from '@prisma/client';
import { CreatePurchaseReturnDto } from './dto/create-purchase-return.dto';


@Injectable()
export class PurchaseOrdersService {

  constructor(
    private prisma: DbService
  ) {

  }

  async create(createPurchaseOrderDto: CreatePurchaseOrderDto, userId: number) {
    try {
      const { order_date, order_status, details } = createPurchaseOrderDto
      const purchaseOrder = await this.prisma.purchaseOrder.create({
        data: {
          order_date,
          order_status,
          purchase_order_details: {
            create: {
              ...details
            }
          },
          order_history: {
            create: {
              action: PurchaseOrderActions.PURCHASE_CREATED,
              remarks: "created purchase order",
              timestamp: new Date(),
              done_by_id: userId
            }
          }

        }
      })
      return purchaseOrder
    } catch (error) {
      throw error
    }
  }

  findAll() {
    return `This action returns all purchaseOrders`;
  }

  async findOne(id: number) {
    try {
      return await this.prisma.purchaseOrder.findFirstOrThrow({
        where: { id }, include: {
          purchase_order_details: {
            include: {
              product: true
            }
          },
          order_history: true,
          grn: {
            include: {
              grn_details: {
                include: {
                  product: true,
                  store: true
                }
              }
            }
          }
        }
      })
    } catch (error) {
      throw error
    }
  }

  async purchaseOrderReturn(orderId: number, dto: CreatePurchaseReturnDto, userId: number) {
    try {
      const purchaseReturn = await this.prisma.purchaseReturn.create({
        data: dto
      })
      await this.prisma.purchaseOrderHistory.create({
        data: {
          action: PurchaseOrderActions.PURCHASE_RETURNED,
          remarks: "retrun some orders",
          done_by_id: userId,
          purchase_order_id: orderId,
          timestamp: new Date()
        }
      })
      return purchaseReturn
    } catch (error) {
      throw error
    }
  }

  update(id: number, updatePurchaseOrderDto: UpdatePurchaseOrderDto) {
    return `This action updates a #${id} purchaseOrder`;
  }

  remove(id: number) {
    return `This action removes a #${id} purchaseOrder`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateTransferRequestDto } from './dto/create-transfer-request.dto';
import { UpdateTransferRequestDto } from './dto/update-transfer-request.dto';
import { DbService } from 'src/db/db.service';
import { TransferAction } from '@prisma/client';
import { ApproveTransferRequestDto } from './dto/approve-tr.dto';

@Injectable()
export class TransferRequestsService {

  constructor(
    private prisma: DbService
  ) { }

  async create(createTransferRequestDto: CreateTransferRequestDto, userId: number) {
    try {

      const transferRequest = await this.prisma.transferRequest.create({
        data: createTransferRequestDto
      })
      await this.prisma.transferRequestHistory.create({
        data: {
          transfer_request_id: transferRequest.id,
          action: TransferAction.REQUEST_CREATED,
          remarks: "transfer request created",
          done_by_id: userId

        }
      })
      return transferRequest
    } catch (error) {
      throw error
    }

  }

  async findAll() {
    try {
      return await this.prisma.transferRequest.findMany({ where: { status: true } })
    } catch (error) {
      throw error
    }
  }

  async findOne(id: number) {
    return await this.prisma.transferRequest.findFirstOrThrow({
      where: { id },
      include: {
        transfer_request_details: {
          include: { good_details: true, product: true }
        },
        transfer_request_history: {
          include: {
            done_by: true
          }
        }
      }
    })
  }

  update(id: number, updateTransferRequestDto: UpdateTransferRequestDto) {
    return `This action updates a #${id} transferRequest`;
  }

  async uproveTransferRequest(trId: number, details: ApproveTransferRequestDto, userId: number) {
    try {

      for (const good of details.details) {
        await this.prisma.transferredGoodsDetails.create({
          data: good
        })
      }


      await this.prisma.transferRequestHistory.create({
        data: {
          action: "GOODS_ACCEPTED",
          remarks: "approved goods",
          timestamp: new Date(),
          done_by_id: userId,
          transfer_request_id: trId
        }
      })


      return await this.findOne(trId)

    } catch (error) {
      throw error
    }
  }

  remove(id: number) {
    return `This action removes a #${id} transferRequest`;
  }
}

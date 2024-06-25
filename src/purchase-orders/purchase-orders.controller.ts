import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, Req } from '@nestjs/common';
import { PurchaseOrdersService } from './purchase-orders.service';
import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
import { UpdatePurchaseOrderDto } from './dto/update-purchase-order.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RolesGuard } from 'src/auth/guards/role.guard';
import { Roles } from 'src/auth/decorators/role.decorator';
import { PermissionResources } from '@prisma/client';
import { TransformInterceptor } from 'src/interceptors/transform.interceptor';
import { ErrorsInterceptor } from 'src/interceptors/errors.interceptor';
import { CreatePurchaseReturnDto } from './dto/create-purchase-return.dto';

@UseGuards(AuthGuard, RolesGuard)
@Roles(PermissionResources.all)
@UseInterceptors(TransformInterceptor, ErrorsInterceptor)
@Controller('purchase-orders')
export class PurchaseOrdersController {
  constructor(private readonly purchaseOrdersService: PurchaseOrdersService) { }

  @Post()
  create(@Body() createPurchaseOrderDto: CreatePurchaseOrderDto,
    @Req() request: any
  ) {
    return this.purchaseOrdersService.create(createPurchaseOrderDto, request.user.id);
  }

  @Post(':id/returns')
  purchaseReturn(
    @Param('id') id: string,
    @Body() dto: CreatePurchaseReturnDto,
    @Req() request: any
  ) {
    return this.purchaseOrdersService.purchaseOrderReturn(+id, dto, request.user.id)
  }

  @Get()
  findAll() {
    return this.purchaseOrdersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchaseOrdersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePurchaseOrderDto: UpdatePurchaseOrderDto) {
    return this.purchaseOrdersService.update(+id, updatePurchaseOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.purchaseOrdersService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, Req } from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RolesGuard } from 'src/auth/guards/role.guard';
import { Roles } from 'src/auth/decorators/role.decorator';
import { PermissionResources } from '@prisma/client';
import { TransformInterceptor } from 'src/interceptors/transform.interceptor';
import { ErrorsInterceptor } from 'src/interceptors/errors.interceptor';
import { CreateSaleReturnDto } from './dto/create-sale-return.dto';

@UseGuards(AuthGuard, RolesGuard)
@Roles(PermissionResources.all)
@UseInterceptors(TransformInterceptor, ErrorsInterceptor)
@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) { }

  @Post()
  create(@Body() createSaleDto: CreateSaleDto,
    @Req() req: any
  ) {
    return this.salesService.create(createSaleDto, req.user.id);
  }

  @Post(":id/returns")
  createSaleReturn(
    @Param('id') id: string,
    @Body() details: CreateSaleReturnDto,
    @Req() req: any
  ) {
    return this.salesService.returnSale(+id, details, req.user.id)
  }

  @Get()
  findAll() {
    return this.salesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSaleDto: UpdateSaleDto) {
    return this.salesService.update(+id, updateSaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salesService.remove(+id);
  }
}

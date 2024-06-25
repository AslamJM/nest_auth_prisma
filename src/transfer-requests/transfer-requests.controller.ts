import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, Req } from '@nestjs/common';
import { TransferRequestsService } from './transfer-requests.service';
import { CreateTransferRequestDto } from './dto/create-transfer-request.dto';
import { UpdateTransferRequestDto } from './dto/update-transfer-request.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RolesGuard } from 'src/auth/guards/role.guard';
import { Roles } from 'src/auth/decorators/role.decorator';
import { PermissionResources } from '@prisma/client';
import { TransformInterceptor } from 'src/interceptors/transform.interceptor';
import { ErrorsInterceptor } from 'src/interceptors/errors.interceptor';
import { ApproveTransferRequestDto } from './dto/approve-tr.dto';

@UseGuards(AuthGuard, RolesGuard)
@Roles(PermissionResources.all)
@UseInterceptors(TransformInterceptor, ErrorsInterceptor)
@Controller('transfer-requests')
export class TransferRequestsController {
  constructor(private readonly transferRequestsService: TransferRequestsService) { }

  @Post()
  create(@Body() createTransferRequestDto: CreateTransferRequestDto,
    @Req() req: any
  ) {
    return this.transferRequestsService.create(createTransferRequestDto, req.user.id);
  }

  @Get()
  findAll() {
    return this.transferRequestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transferRequestsService.findOne(+id);
  }

  @Post(':id/approve')
  uproveTransferRequest(@Param('id') id: string, @Body() details: ApproveTransferRequestDto,
    @Req() req: any
  ) {
    try {
      return this.transferRequestsService.uproveTransferRequest(+id, details, req.user.id)
    } catch (error) {
      throw error
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransferRequestDto: UpdateTransferRequestDto) {
    return this.transferRequestsService.update(+id, updateTransferRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transferRequestsService.remove(+id);
  }
}

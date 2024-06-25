import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, Req } from '@nestjs/common';
import { GoodRecieveNotesService } from './good-recieve-notes.service';
import { CreateGoodRecieveNoteDto } from './dto/create-good-recieve-note.dto';
import { UpdateGoodRecieveNoteDto } from './dto/update-good-recieve-note.dto';
import { Roles } from 'src/auth/decorators/role.decorator';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RolesGuard } from 'src/auth/guards/role.guard';
import { TransformInterceptor } from 'src/interceptors/transform.interceptor';
import { ErrorsInterceptor } from 'src/interceptors/errors.interceptor';

@UseGuards(AuthGuard, RolesGuard)
@Roles("all")
@UseInterceptors(TransformInterceptor, ErrorsInterceptor)
@Controller('good-recieve-notes')
export class GoodRecieveNotesController {
  constructor(private readonly goodRecieveNotesService: GoodRecieveNotesService) { }

  @Post()
  create(@Body() createGoodRecieveNoteDto: CreateGoodRecieveNoteDto,
    @Req() req: any
  ) {
    return this.goodRecieveNotesService.create(createGoodRecieveNoteDto, req.user.id);
  }

  @Get()
  findAll() {
    return this.goodRecieveNotesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.goodRecieveNotesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGoodRecieveNoteDto: UpdateGoodRecieveNoteDto) {
    return this.goodRecieveNotesService.update(+id, updateGoodRecieveNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.goodRecieveNotesService.remove(+id);
  }
}

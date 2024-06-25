import { Module } from '@nestjs/common';
import { GoodRecieveNotesService } from './good-recieve-notes.service';
import { GoodRecieveNotesController } from './good-recieve-notes.controller';

@Module({
  controllers: [GoodRecieveNotesController],
  providers: [GoodRecieveNotesService],
})
export class GoodRecieveNotesModule {}

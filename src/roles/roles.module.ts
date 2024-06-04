import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  providers: [RolesService],
  exports: [RolesService]
})
export class RolesModule { }

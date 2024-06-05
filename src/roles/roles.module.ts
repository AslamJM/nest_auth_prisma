import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { DbModule } from 'src/db/db.module';
import { RolesController } from './roles.controller';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';
import { CaslModule } from 'src/casl/casl.module';

@Module({
  imports: [DbModule, AuthModule, UsersModule, CaslModule],
  providers: [RolesService],
  exports: [RolesService],
  controllers: [RolesController]
})
export class RolesModule { }

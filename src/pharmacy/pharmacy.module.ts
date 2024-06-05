import { Module } from '@nestjs/common';
import { PharmacyService } from './pharmacy.service';
import { PharmacyController } from './pharmacy.controller';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';
import { CaslModule } from 'src/casl/casl.module';

@Module({
  imports: [
    AuthModule, UsersModule, CaslModule
  ],
  controllers: [PharmacyController],
  providers: [PharmacyService],
})
export class PharmacyModule { }

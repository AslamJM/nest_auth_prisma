import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { CaslModule } from 'src/casl/casl.module';
import { AuthHelpers } from './auth.helper';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: "secret",
      signOptions: { expiresIn: '1d' },
    }),
    CaslModule
  ],
  providers: [AuthService, AuthHelpers],
  controllers: [AuthController],
  exports: [AuthHelpers]
})
export class AuthModule { }

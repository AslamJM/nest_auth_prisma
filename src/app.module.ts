import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { ConfigModule } from '@nestjs/config';
import { PharmacyModule } from './pharmacy/pharmacy.module';
import { LabModule } from './lab/lab.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AclModule } from './acl/acl.module';
import { RolesModule } from './roles/roles.module';
import { CaslModule } from './casl/casl.module';
import { CategoriesModule } from './categories/categories.module';
import { BrandsModule } from './brands/brands.module';
import { UnitsModule } from './units/units.module';
import { ProductsModule } from './products/products.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true
    }),
    DbModule,
    PharmacyModule,
    LabModule,
    AuthModule,
    UsersModule,
    AclModule,
    RolesModule,
    CaslModule,
    CategoriesModule,
    BrandsModule,
    UnitsModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

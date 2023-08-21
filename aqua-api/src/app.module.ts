import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {DatabaseModule} from './database/db.module';
import { AdminModule } from './admin/admin.module';
import { ClientsModule } from './clients/clients.module';
import { JwtModuleNew } from './jwt/jwt.module';

import { MealsModule } from './meals/meals.module';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    JwtModuleNew,
    DatabaseModule,
    AdminModule,
    ClientsModule,
    MealsModule,
    CategoriesModule,
    OrdersModule,
   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

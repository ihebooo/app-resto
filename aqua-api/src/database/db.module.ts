import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module,Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin} from '../admin/entities/admin.entity'
import { Client} from '../clients/entities/client.entity'
import {Meal} from '../meals/entities/meal.entity'
import {Category} from '../categories/entities/category.entity'
import {Order} from '../orders/entities/order.entity'

import { AppService } from '../app.service';

  

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => ({
            type: 'mysql',
            host: configService.get('DB_HOST'),
            port: configService.get('DB_PORT'),
            username: configService.get('DB_USER'),
            password: configService.get('DB_PASSWORD'),
            database: configService.get('DB_DATABASE'),
            entities: [Admin,Client,Meal,Category,Order],
            synchronize: true,
        }),
        inject: [ConfigService],
       }),
  ],
  providers: [AppService],
  exports: [AppService]
})
export class DatabaseModule{}
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Meal } from './entities/meal.entity';
import { MealsService } from './meals.service';
import { MealsController } from './meals.controller';
import {Category} from '../categories/entities/category.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Meal,Category])],
  providers: [MealsService],
  controllers: [MealsController],
})
export class MealsModule {}
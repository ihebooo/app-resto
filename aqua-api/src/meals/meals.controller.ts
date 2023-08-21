import { Controller, Get, Post, Body, Patch, Param,UsePipes, Delete } from '@nestjs/common';
import { MealsService } from './meals.service';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';

@Controller('meals')
export class MealsController {
  constructor(private readonly mealsService: MealsService) {}

  @Post('/create')
  create(@Body() createMealDto: CreateMealDto) {
    return this.mealsService.create(createMealDto);
  }

  @Get()
  findAll() {
    return this.mealsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mealsService.findOne(Number(id));
  }

  @Post('/update/:id')
  update(@Param('id') id: string, @Body() updateMealDto: UpdateMealDto) {


    console.log(updateMealDto)
    return this.mealsService.update(Number(id), updateMealDto);
  }
  @Post('/delete/:id')
  remove(@Param('id') id: string) {
    return this.mealsService.remove(Number(id));
  }
}

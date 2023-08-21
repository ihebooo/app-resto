import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Meal } from './entities/meal.entity';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';
import {Category} from '../categories/entities/category.entity'

@Injectable()
export class MealsService {
  constructor(
    @InjectRepository(Meal)
    private mealsRepository: Repository<Meal>,
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,

  ) {}

  async create(createMealDto: CreateMealDto): Promise<Meal> {

    let createMealDtoEdited = createMealDto;

    let randomNum = Math.floor(Math.random() * (99999  + 1) + 5);

        createMealDtoEdited['idMeal'] = randomNum
    const meal = this.mealsRepository.create(createMealDtoEdited);
    return this.mealsRepository.save(meal);
  }

  async findAll(): Promise<Meal[]> {
    return this.mealsRepository
    .createQueryBuilder('meals')
    .leftJoinAndSelect('meals.category', 'category')
    .getMany();

    
  }

  async findOne(id: number): Promise<Meal> {
    return this.mealsRepository.findOne({ where: { id } });

  }

async update(id: number, updateMealDto: UpdateMealDto): Promise<Meal> {
  const meal = await this.mealsRepository.findOne({ where: { id } });
  if (!meal) {
    throw new Error(`Meal with id ${id} not found.`);
  }
  Object.assign(meal, updateMealDto);
  return this.mealsRepository.save(meal);
}

  async remove(id: number): Promise<void> {
    await this.mealsRepository.delete(id);
  }
}

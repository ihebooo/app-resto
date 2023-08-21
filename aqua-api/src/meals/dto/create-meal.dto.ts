import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateMealDto {
  @IsNumber()
  @IsNotEmpty()
  idCategory: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  strMeal: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  strMealThumb: string;

  /*@IsNumber()
  @IsNotEmpty()
  idMeal: number;*/

  @IsNumber()
  @IsNotEmpty()
  price: number;
}

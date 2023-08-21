import { IsInt, IsNotEmpty, IsOptional, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateOrderDto {



  @IsInt()
  @IsNotEmpty()
  cat_id: number;

  @IsInt()
  @IsNotEmpty()
  meal_id: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  price: number;

}

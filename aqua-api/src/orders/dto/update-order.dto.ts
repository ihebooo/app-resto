import { IsInt, IsNotEmpty, IsOptional, IsNumber, IsPositive, IsString } from 'class-validator';

export class UpdateOrderDto {


  
  @IsInt()
  client_id: number;

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

  @IsString()
  status: string;

  @IsString()
  is_accepted: boolean;

  @IsString()
  date: Date;
}

import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  strCategory: string;

  @IsOptional()
  @IsString()
  strCategoryThumb: string;

  @IsOptional()
  @IsString()
  strCategoryDescription: string;
}

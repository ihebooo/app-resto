import { IsString, IsNotEmpty , IsNumber} from 'class-validator';

export class CreateAdminDto {
 
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

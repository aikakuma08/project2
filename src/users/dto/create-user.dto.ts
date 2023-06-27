import { UserRole } from '../../entities/user';
import { IsString, IsNumber, IsEnum, IsBoolean } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  id: number;

  @IsEnum(UserRole)
  role: UserRole;

  @IsString()
  email: string;

  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsBoolean()
  is_active: boolean;

  // password: string;

  // azurer_ad_id: string;
}

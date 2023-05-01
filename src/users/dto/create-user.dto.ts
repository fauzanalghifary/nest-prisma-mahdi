import { IsNotEmpty, IsEnum, IsDateString, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  email: string;
}

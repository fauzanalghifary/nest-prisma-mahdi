import {
  IsNotEmpty,
  IsEnum,
  IsDateString,
  IsString,
  IsNumber,
} from 'class-validator';
import { LostFoundStatus } from 'src/lost-found/enums/lost-found-status.enum';

export class CreateLostFoundItemDto {
  @IsNotEmpty()
  @IsString()
  item: string;

  @IsNotEmpty()
  @IsString()
  characteristic: string;

  @IsNotEmpty()
  @IsEnum(LostFoundStatus)
  status: LostFoundStatus;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsDateString()
  dateFound: Date;

  @IsNotEmpty()
  @IsDateString()
  dateRetrieved: Date;

  @IsNotEmpty()
  @IsNumber()
  userId: number;
}

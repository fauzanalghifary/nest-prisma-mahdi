import { IsNotEmpty, IsEnum, IsDateString, IsString } from 'class-validator';
import { LostFoundStatus } from 'src/enums/lost-found-status.enum';

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

  @IsDateString()
  dateRetrieved?: Date;
}

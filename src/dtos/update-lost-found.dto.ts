import { IsNotEmpty, IsEnum, IsDateString, IsString } from 'class-validator';
import { LostFoundStatus } from 'src/enums/lost-found-status.enum';

export class UpdateLostFoundItemDto {
  @IsNotEmpty()
  @IsString()
  item: string;

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
}

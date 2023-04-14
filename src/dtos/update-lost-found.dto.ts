import { IsOptional, IsEnum, IsDateString, IsString, } from 'class-validator';
import { LostFoundStatus } from 'src/enums/lost-found-status.enum';

export class UpdateLostFoundItemDto {
  @IsOptional()
  @IsString()
  item: string;

  @IsOptional()
  @IsEnum(LostFoundStatus)
  status: LostFoundStatus;

  @IsOptional()
  @IsString()
  location: string;

  @IsOptional()
  @IsDateString()
  dateFound: Date;

  @IsOptional()
  @IsDateString()
  dateRetrieved: Date;
}

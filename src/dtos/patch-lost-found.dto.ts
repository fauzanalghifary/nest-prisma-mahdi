import { IsOptional, IsEnum, IsDateString, IsString } from 'class-validator';
import { LostFoundStatus } from 'src/enums/lost-found-status.enum';

export class PatchLostFoundItemDto {
  @IsOptional()
  @IsString()
  item?: string;

  @IsOptional()
  @IsString()
  characteristic?: string;

  @IsOptional()
  @IsEnum(LostFoundStatus)
  status?: LostFoundStatus;

  @IsOptional()
  @IsDateString()
  dateFound?: Date;

  @IsOptional()
  @IsDateString()
  dateRetrieved?: Date;
}
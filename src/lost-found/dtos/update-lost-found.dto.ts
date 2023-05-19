import { IsOptional, IsEnum, IsDateString, IsString } from 'class-validator';
import { LostFoundStatus } from 'src/lost-found/enums/lost-found-status.enum';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateLostFoundItemDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  item: string;

  @ApiProperty()
  @IsOptional()
  @IsEnum(LostFoundStatus)
  status: LostFoundStatus;

  @ApiProperty()
  @IsOptional()
  @IsString()
  location: string;

  @ApiProperty()
  @IsOptional()
  @IsDateString()
  dateFound: Date;

  @ApiProperty()
  @IsOptional()
  @IsDateString()
  dateRetrieved: Date;
}

import { IsNotEmpty, IsEnum, IsDateString, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { LostFoundStatus } from 'src/lost-found/enums/lost-found-status.enum';

export class CreateLostFoundItemDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  item: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  characteristic: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(LostFoundStatus)
  status: LostFoundStatus;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  location: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  dateFound: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  dateRetrieved: Date;
}

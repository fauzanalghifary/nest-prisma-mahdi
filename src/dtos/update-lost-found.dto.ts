import { PartialType } from "@nestjs/mapped-types";
import { IsOptional, IsEnum, IsDateString, IsString } from "class-validator";
import { LostFoundStatus } from "src/enums/lost-found-status.enum";
import { CreateLostFoundItemDto } from "./create-lost-found.dto";

export class UpdateLostFoundItemDto extends PartialType(CreateLostFoundItemDto) {
  @IsOptional()
  @IsString()
  item?: string;

  @IsOptional()
  @IsEnum(LostFoundStatus)
  status?: LostFoundStatus;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsDateString()
  dateFound?: Date;

  @IsOptional()
  @IsDateString()
  dateRetrieved?: Date;
}


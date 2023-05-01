import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Patch,
  Query,
} from '@nestjs/common';
import { CreateLostFoundItemDto } from './dtos/create-lost-found.dto';
import { UpdateLostFoundItemDto } from './dtos/update-lost-found.dto';
import { LostFoundService } from './lost-found.service';

@Controller('lost-found')
export class LostFoundController {
  constructor(private readonly lostFoundService: LostFoundService) {}

  @Get()
  async getAllLostFoundItems(@Query('q') q: string) {
    return this.lostFoundService.getAllLostFoundItems(q);
  }

  @Get(':id')
  async getLostFoundItemById(@Param('id') id: number) {
    return this.lostFoundService.getLostFoundItemById(id);
  }

  @Post()
  async createLostFoundItem(
    @Body() createLostFoundItemDto: CreateLostFoundItemDto,
  ) {
    return this.lostFoundService.createLostFoundItem(createLostFoundItemDto);
  }

  @Put(':id')
  async updateLostFoundItem(
    @Param('id') id: number,
    @Body() createLostFoundItemDto: CreateLostFoundItemDto,
  ) {
    return this.lostFoundService.updateLostFoundItem(
      id,
      createLostFoundItemDto,
    );
  }

  @Patch(':id')
  async patchLostFoundItem(
    @Param('id') id: number,
    @Body() updateLostFoundItemDto: UpdateLostFoundItemDto,
  ) {
    return this.lostFoundService.patchLostFoundItem(id, updateLostFoundItemDto);
  }

  @Delete(':id')
  async deleteLostFoundItem(@Param('id') id: number) {
    return this.lostFoundService.deleteLostFoundItem(id);
  }
}

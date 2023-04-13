import { Controller, Get, Post, Put, Delete, Patch, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateLostFoundItemDto } from './dtos/create-lost-found.dto';
import { UpdateLostFoundItemDto } from './dtos/update-lost-found.dto';
import { LostFoundService } from './lost-found.service';

@Controller('lost-found')
export class LostFoundController {
  constructor(private readonly lostFoundService: LostFoundService) {}

  @Get()
  async getAllLostFoundItems() {
    try {
      return this.lostFoundService.getAllLostFoundItems();
    } catch (error) {
      throw new NotFoundException('Failed to show data')
    }
  }

  @Get(':id')
  async getLostFoundItemById(@Param('id') id: number) {
    try {
      return this.lostFoundService.getLostFoundItemById(id);
    } catch (error) {
      throw new NotFoundException('Failed to show data');
    }
  }

  @Post()
  async createLostFoundItem(@Body() createLostFoundItemDto: CreateLostFoundItemDto) {
    try {
      return this.lostFoundService.createLostFoundItem(createLostFoundItemDto);
    } catch (error) {
      throw new NotFoundException('Failed to add data');
    }
  }

  @Put(':id')
  async updateLostFoundItem(@Param('id') id: number, @Body() updateLostFoundItemDto: UpdateLostFoundItemDto) {
    try {
      return this.lostFoundService.updateLostFoundItem(id, updateLostFoundItemDto);
    } catch (error) {
      throw new NotFoundException('Failed to update data');
    }
  }

  @Patch(':id')
  async updatePartialLostFoundItem(
  @Param('id') id: number,
  @Body() updateLostFoundItemDto: UpdateLostFoundItemDto,
) {
  try {
    return this.lostFoundService.updatePartialLostFoundItem(id, updateLostFoundItemDto);
  } catch (error) {
    throw new NotFoundException('Failed to update data');
  }
}

  @Delete(':id')
  async deleteLostFoundItem(@Param('id') id: number) {
    try {
      return this.lostFoundService.deleteLostFoundItem(id);
    } catch (error) {
      throw new NotFoundException('Failed to remove data');
    }
  }
}
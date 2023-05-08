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
  UseGuards,
  Request,
} from '@nestjs/common';
import { CreateLostFoundItemDto } from './dtos/create-lost-found.dto';
import { UpdateLostFoundItemDto } from './dtos/update-lost-found.dto';
import { LostFoundService } from './lost-found.service';
import { LostFoundEntity } from './entities/lost-found.entity';
import { AuthGuard } from '../auth/auth.guard';
import { RoleGuard } from '../auth/role.guard';

@Controller('lost-found')
export class LostFoundController {
  constructor(private readonly lostFoundService: LostFoundService) {}

  @Get()
  async getAllLostFoundItems(@Query('q') q: string, @Request() req) {
    const items = await this.lostFoundService.getAllLostFoundItems(q);
    return items.map((item) => new LostFoundEntity(item));
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  @UseGuards(RoleGuard)
  async getLostFoundItemById(@Param('id') id: number, @Request() req) {
    // console.log(req.user, 'ini di lost-found controller');
    return new LostFoundEntity(
      await this.lostFoundService.getLostFoundItemById(id),
    );
  }

  @Post()
  @UseGuards(AuthGuard)
  async createLostFoundItem(
    @Body() createLostFoundItemDto: CreateLostFoundItemDto,
  ) {
    return this.lostFoundService.createLostFoundItem(createLostFoundItemDto);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
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
  @UseGuards(AuthGuard)
  async patchLostFoundItem(
    @Param('id') id: number,
    @Body() updateLostFoundItemDto: UpdateLostFoundItemDto,
  ) {
    return this.lostFoundService.patchLostFoundItem(id, updateLostFoundItemDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async deleteLostFoundItem(@Param('id') id: number) {
    return this.lostFoundService.deleteLostFoundItem(id);
  }
}

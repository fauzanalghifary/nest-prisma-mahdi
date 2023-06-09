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
import { AuthGuard, RoleGuard } from '../auth/auth.guard';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@Controller('items')
@ApiTags('items')
export class LostFoundController {
  constructor(private readonly lostFoundService: LostFoundService) {}

  @Get()
  @ApiQuery({ name: 'q', required: false, type: String })
  @ApiOkResponse({ type: [LostFoundEntity] })
  async getAllLostFoundItems(@Query('q') q: string, @Request() req) {
    const items = await this.lostFoundService.getAllLostFoundItems(q);
    return items.map((item) => new LostFoundEntity(item));
  }

  @Get(':id')
  @ApiOkResponse({ type: LostFoundEntity })
  async getLostFoundItemById(@Param('id') id: number, @Request() req) {
    return new LostFoundEntity(
      await this.lostFoundService.getLostFoundItemById(id),
    );
  }

  @Post()
  @UseGuards(AuthGuard)
  @ApiCreatedResponse({ type: LostFoundEntity })
  @ApiBearerAuth()
  async createLostFoundItem(
    @Body() createLostFoundItemDto: CreateLostFoundItemDto,
    @Request() req,
  ) {
    const userId = req.user.sub;
    return this.lostFoundService.createLostFoundItem(
      createLostFoundItemDto,
      userId,
    );
  }

  @Put(':id')
  @UseGuards(RoleGuard)
  @UseGuards(AuthGuard)
  @ApiOkResponse({ type: LostFoundEntity })
  @ApiBearerAuth()
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
  @UseGuards(RoleGuard)
  @UseGuards(AuthGuard)
  @ApiOkResponse({ type: LostFoundEntity })
  @ApiBearerAuth()
  async patchLostFoundItem(
    @Param('id') id: number,
    @Body() updateLostFoundItemDto: UpdateLostFoundItemDto,
  ) {
    return this.lostFoundService.patchLostFoundItem(id, updateLostFoundItemDto);
  }

  @Delete(':id')
  @UseGuards(RoleGuard)
  @UseGuards(AuthGuard)
  @ApiOkResponse({ type: LostFoundEntity })
  @ApiBearerAuth()
  async deleteLostFoundItem(@Param('id') id: number) {
    return this.lostFoundService.deleteLostFoundItem(id);
  }
}

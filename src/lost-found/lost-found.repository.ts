import { Injectable, NotFoundException, UseGuards } from '@nestjs/common';
import { CreateLostFoundItemDto } from './dtos/create-lost-found.dto';
import { UpdateLostFoundItemDto } from './dtos/update-lost-found.dto';

import { PrismaService } from '../prisma.service';

@Injectable()
export class LostFoundRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(q: string) {
    if (!q) {
      return this.prisma.lostFound.findMany();
    }

    return this.prisma.lostFound.findMany({
      where: {
        OR: [
          { item: { contains: q } },
          { characteristic: { contains: q } },
          { location: { contains: q } },
        ],
      },
    });
  }

  async findOne(id: number) {
    const theItem = await this.prisma.lostFound.findUnique({
      where: { id: +id },
      include: {
        User: true,
      },
    });

    if (!theItem) {
      throw new NotFoundException(`Item with ID ${id} does not exist`);
    }

    return theItem;
  }

  async save(data: CreateLostFoundItemDto, userId: number) {
    let { dateFound, dateRetrieved } = data;
    dateFound = new Date(dateFound);
    dateRetrieved = new Date(dateRetrieved);

    return this.prisma.lostFound.create({
      data: {
        ...data,
        dateFound,
        dateRetrieved,
        userId,
      },
    });
  }

  async update(id: number, createLostFoundItemDto: CreateLostFoundItemDto) {
    let { dateFound, dateRetrieved } = createLostFoundItemDto;

    dateFound = new Date(dateFound);
    dateRetrieved = new Date(dateRetrieved);
    const theItem = await this.prisma.lostFound.findUnique({
      where: { id: +id },
    });

    if (!theItem) {
      throw new NotFoundException(`Item with ID ${id} does not exist`);
    }

    return this.prisma.lostFound.update({
      where: { id: +id },
      data: {
        ...createLostFoundItemDto,
        dateFound,
        dateRetrieved,
      },
    });
  }

  async patch(id: number, updateLostFoundItemDto: UpdateLostFoundItemDto) {
    let { dateFound, dateRetrieved } = updateLostFoundItemDto;

    if (dateFound) dateFound = new Date(dateFound);
    if (dateRetrieved) dateRetrieved = new Date(dateRetrieved);

    const theItem = await this.prisma.lostFound.findUnique({
      where: { id: +id },
    });

    if (!theItem) {
      throw new NotFoundException(`Item with ID ${id} does not exist`);
    }

    return this.prisma.lostFound.update({
      where: { id: +id },
      data: {
        ...updateLostFoundItemDto,
        dateFound,
        dateRetrieved,
      },
    });
  }

  async delete(id: number) {
    const theItem = await this.prisma.lostFound.findUnique({
      where: { id: +id },
    });

    if (!theItem) {
      throw new NotFoundException(`Item with ID ${id} does not exist`);
    }

    return this.prisma.lostFound.delete({
      where: { id: +id },
    });
  }
}

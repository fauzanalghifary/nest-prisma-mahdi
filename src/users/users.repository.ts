import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data: {
        ...createUserDto,
      },
    });
  }

  async findAll() {
    return this.prisma.user.findMany({
      include: {
        LostFound: true,
      },
    });
  }

  async findOne(id: number) {
    const theUser = await this.prisma.user.findUnique({
      where: { id: +id },
      include: {
        LostFound: true,
      },
    });

    if (!theUser) {
      throw new NotFoundException(`User with ID ${id} does not exist`);
    }

    return theUser;
  }

  async findOneByEmail(email: string) {
    const theUser = await this.prisma.user.findUnique({
      where: { email: email },
      include: {
        LostFound: true,
      },
    });

    if (!theUser) {
      throw new NotFoundException(`User with email ${email} does not exist`);
    }

    return theUser;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const theUser = await this.prisma.user.findUnique({
      where: { id: +id },
    });

    if (!theUser) {
      throw new NotFoundException(`User with ID ${id} does not exist`);
    }

    return this.prisma.user.update({
      where: { id: +id },
      data: {
        ...updateUserDto,
      },
    });
  }

  async remove(id: number) {
    const theUser = await this.prisma.user.findUnique({
      where: { id: +id },
    });

    if (!theUser) {
      throw new NotFoundException(`User with ID ${id} does not exist`);
    }

    return this.prisma.user.delete({
      where: { id: +id },
    });
  }
}

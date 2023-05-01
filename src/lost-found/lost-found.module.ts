import { Module } from '@nestjs/common';
import { LostFoundController } from './lost-found.controller';
import { LostFoundService } from './lost-found.service';
import { LostFoundRepository } from './lost-found.repository';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [LostFoundController],
  providers: [LostFoundService, LostFoundRepository, PrismaService],
})
export class LostFoundModule {}

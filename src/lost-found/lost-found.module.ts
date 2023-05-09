import { Module } from '@nestjs/common';
import { LostFoundController } from './lost-found.controller';
import { LostFoundService } from './lost-found.service';
import { LostFoundRepository } from './lost-found.repository';
import { PrismaService } from '../prisma.service';
import { UsersModule } from '../users/users.module';
import { UsersRepository } from '../users/users.repository';

@Module({
  imports: [UsersModule],
  controllers: [LostFoundController],
  providers: [
    LostFoundService,
    LostFoundRepository,
    PrismaService,
    UsersRepository,
  ],
})
export class LostFoundModule {}

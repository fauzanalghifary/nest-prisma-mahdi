import { Module } from '@nestjs/common';
import { LostFoundModule } from './lost-found/lost-found.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, LostFoundModule],
})
export class AppModule {}

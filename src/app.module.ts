import { Module } from '@nestjs/common';
import { LostFoundModule } from './lost-found/lost-found.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, LostFoundModule, AuthModule],
})
export class AppModule {}

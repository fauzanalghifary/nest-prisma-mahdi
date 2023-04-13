import { NestFactory } from '@nestjs/core';
import { LostFoundModule } from './lost-found.module';

async function bootstrap() {
  const app = await NestFactory.create(LostFoundModule);
  await app.listen(3000);
}
bootstrap();

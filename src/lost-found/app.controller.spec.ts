import { Test, TestingModule } from '@nestjs/testing';
import { LostFoundController } from './lost-found.controller';
import { LostFoundService } from './lost-found.service';
import { LostFoundRepository } from './lost-found.repository';

describe('AppController', () => {
  let appController: LostFoundController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LostFoundController],
      providers: [LostFoundService, LostFoundRepository],
    }).compile();

    appController = app.get<LostFoundController>(LostFoundController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(LostFoundController.getAllLostFoundItems()).toBe('Hello World!');
    });
  });
});

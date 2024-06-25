import { Test, TestingModule } from '@nestjs/testing';
import { GoodRecieveNotesController } from './good-recieve-notes.controller';
import { GoodRecieveNotesService } from './good-recieve-notes.service';

describe('GoodRecieveNotesController', () => {
  let controller: GoodRecieveNotesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GoodRecieveNotesController],
      providers: [GoodRecieveNotesService],
    }).compile();

    controller = module.get<GoodRecieveNotesController>(GoodRecieveNotesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

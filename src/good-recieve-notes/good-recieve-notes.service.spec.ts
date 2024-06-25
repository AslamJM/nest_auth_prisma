import { Test, TestingModule } from '@nestjs/testing';
import { GoodRecieveNotesService } from './good-recieve-notes.service';

describe('GoodRecieveNotesService', () => {
  let service: GoodRecieveNotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GoodRecieveNotesService],
    }).compile();

    service = module.get<GoodRecieveNotesService>(GoodRecieveNotesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

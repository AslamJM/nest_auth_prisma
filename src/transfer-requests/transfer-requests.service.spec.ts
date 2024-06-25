import { Test, TestingModule } from '@nestjs/testing';
import { TransferRequestsService } from './transfer-requests.service';

describe('TransferRequestsService', () => {
  let service: TransferRequestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransferRequestsService],
    }).compile();

    service = module.get<TransferRequestsService>(TransferRequestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

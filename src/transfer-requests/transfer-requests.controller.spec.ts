import { Test, TestingModule } from '@nestjs/testing';
import { TransferRequestsController } from './transfer-requests.controller';
import { TransferRequestsService } from './transfer-requests.service';

describe('TransferRequestsController', () => {
  let controller: TransferRequestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransferRequestsController],
      providers: [TransferRequestsService],
    }).compile();

    controller = module.get<TransferRequestsController>(TransferRequestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

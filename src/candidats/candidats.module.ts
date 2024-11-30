import { Module } from '@nestjs/common';
import { CandidatsService } from './candidats.service';
import { CandidatsController } from './candidats.controller';

@Module({
  providers: [CandidatsService],
  controllers: [CandidatsController]
})
export class CandidatsModule {}

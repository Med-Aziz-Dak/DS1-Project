import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CandidatsModule } from './candidats/candidats.module';

@Module({
  imports: [CandidatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

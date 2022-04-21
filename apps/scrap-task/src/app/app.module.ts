import { Module } from '@nestjs/common';
import { ScrapService } from './scrap/scrap.service';
import {ScheduleModule} from "@nestjs/schedule";

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [ScrapService],
})
export class AppModule {}

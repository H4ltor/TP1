import { Module } from '@nestjs/common';
import { MatchesService } from './matches.service';
import { MatchesController } from './matches.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {MatchEntity, MatchSchema} from "./entities/match.entity";

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: MatchEntity.collectionName,
      schema: MatchSchema
    }
  ])],
  controllers: [MatchesController],
  providers: [MatchesService],
})
export class MatchesModule {}

import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import {EquipesModule} from "../../../rest-api/src/app/equipes/equipes.module";
import {MatchesModule} from "../../../rest-api/src/app/matches/matches.module";

const username = 'timoth';
const password = 'root';
const host = 'all.9qgxg.mongodb.net';
const databaseName = 'TP1';
const mongoDbUri = `mongodb+srv://${username}:${password}@${host}/${databaseName}?retryWrites=true&w=majority`;

@Module({
  imports: [
    MongooseModule.forRoot(mongoDbUri), EquipesModule, MatchesModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


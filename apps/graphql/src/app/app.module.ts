import { Module } from '@nestjs/common';

import {MongooseModule} from "@nestjs/mongoose";
import {EquipesModule} from "../../../rest-api/src/app/equipes/equipes.module";
import {MatchesModule} from "../../../rest-api/src/app/matches/matches.module";
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import { join } from 'path';
import {MatchModule} from "./match/match.module";
import {EquipeModule} from "./equipe/equipe.module";
const username = 'timoth';
const password = 'root';
const host = 'all.9qgxg.mongodb.net';
const databaseName = 'TP1';
const mongoDbUri = `mongodb+srv://${username}:${password}@${host}/${databaseName}?retryWrites=true&w=majority`;

@Module({
  imports: [
    MatchesModule,
    MongooseModule.forRoot(mongoDbUri), EquipesModule, MatchesModule,
    EquipesModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'dist/apps/graphql/schema.gql'),
    }),
    MatchModule,
    EquipeModule,
  ],
})
export class AppModule {}


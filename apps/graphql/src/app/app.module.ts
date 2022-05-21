import { Module } from '@nestjs/common';
import { join } from 'path';
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import {MatchResolver} from "./match/match.resolver";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      //join(process.cwd(), 'dist/apps/graphql/schema.gql'),

    }),
  ],
  //providers: [MatchResolver],
})
export class AppModule {}

import { Test, TestingModule } from '@nestjs/testing';
import { MatchResolver } from './match.resolver';
import {MongooseModule} from "@nestjs/mongoose";
import {MatchModule} from "./match.module";
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import {join} from "path";
const username = 'timoth';
const password = 'root';
const host = 'all.9qgxg.mongodb.net';
const databaseName = 'TP1';
const mongoDbUri = `mongodb+srv://${username}:${password}@${host}/${databaseName}?retryWrites=true&w=majority`;

describe('MatchResolver', () => {
  let resolver: MatchResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(mongoDbUri),
        MatchModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
          driver: ApolloDriver,
          autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        }),
        MatchModule,
      ],
    }).compile();

    resolver = module.get<MatchResolver>(MatchResolver);
  });

  //test end to end

  //test findOne
  it('should be defined', () => {
    expect(resolver.match).toBeDefined();
  });
  //test findAll
  it('should be defined', () => {
    expect(resolver.matches).toBeDefined();

  });
  //test createMatch
  it('should be defined', () => {
    expect(resolver.createMatch).toBeDefined();
  });
  //test updateMatch
  it('should be defined', () => {
    expect(resolver.updateMatch).toBeDefined();
  });
  //test deleteMatch
  it('should be defined', () => {
    expect(resolver.deleteMatch).toBeDefined();
  });
});

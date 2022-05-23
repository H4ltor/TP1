import { Test, TestingModule } from '@nestjs/testing';
import { EquipeResolver } from './equipe.resolver';
import {MongooseModule} from "@nestjs/mongoose";

import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import {join} from "path";
import {EquipeModule} from "./equipe.module";
const username = 'timoth';
const password = 'root';
const host = 'all.9qgxg.mongodb.net';
const databaseName = 'TP1';
const mongoDbUri = `mongodb+srv://${username}:${password}@${host}/${databaseName}?retryWrites=true&w=majority`;

describe('EquipeResolver', () => {
  let resolver: EquipeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(mongoDbUri),
        EquipeModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
          driver: ApolloDriver,
          autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        }),
        EquipeModule,
      ],
    }).compile();
    resolver = module.get<EquipeResolver>(EquipeResolver);
  });

  //test findOne
  it('should be defined', () => {
    expect(resolver.equipe).toBeDefined();
  });
  //test findAll
  it('should be defined', () => {
    expect(resolver.equipes).toBeDefined();
  });
  //test createEquipe
  it('should be defined', () => {
    expect(resolver.createEquipe).toBeDefined();
  });
  //test updateEquipe
  it('should be defined', () => {
    expect(resolver.updateEquipe).toBeDefined();
  });
  //test deleteEquipe
  it('should be defined', () => {
    expect(resolver.deleteEquipe).toBeDefined();
  });
});

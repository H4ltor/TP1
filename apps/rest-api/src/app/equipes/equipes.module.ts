import { Module } from '@nestjs/common';
import { EquipesService } from './equipes.service';
import { EquipesController } from './equipes.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {EquipeEntity, EquipeSchema} from "./entities/equipe.entity";

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: EquipeEntity.collectionName,
      schema: EquipeSchema
    }
  ])],
  controllers: [EquipesController],
  providers: [EquipesService],
})
export class EquipesModule {}

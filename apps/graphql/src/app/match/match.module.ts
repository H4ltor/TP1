import { Module } from '@nestjs/common';
import { MatchResolver } from './match.resolver';
import {EquipesService} from "../../../../rest-api/src/app/equipes/equipes.service";

@Module({
  providers: [MatchResolver, EquipesService],
})
export class MatchModule {}

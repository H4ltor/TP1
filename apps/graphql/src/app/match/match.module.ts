import { Module } from '@nestjs/common';
import {MatchResolver} from "./match.resolver";
import {MatchesService} from "../../../../rest-api/src/app/matches/matches.service";
import {EquipesService} from "../../../../rest-api/src/app/equipes/equipes.service";

@Module({
  imports: [MatchesService, EquipesService],
  providers: [MatchResolver],

})
export class MatchModule {}

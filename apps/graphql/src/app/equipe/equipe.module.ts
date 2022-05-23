import { Module } from '@nestjs/common';
import { EquipeResolver } from './equipe.resolver';
import {EquipesService} from "../../../../rest-api/src/app/equipes/equipes.service";
import {EquipesModule} from "../../../../rest-api/src/app/equipes/equipes.module";
@Module({
  imports: [EquipesModule],
  providers: [EquipeResolver],
})
export class EquipeModule {}

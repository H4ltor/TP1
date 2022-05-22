import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import {
  EquipeCreateDto,
  EquipeDto, EquipeResetDto,
  EquipeUpdateDto
} from "../../../../../libs/common/resource/equipe/src/lib/equipe.dto";
import {EquipesService} from "../../../../rest-api/src/app/equipes/equipes.service";
import {EquipeCreateType, EquipeType, EquipeUpdateType, RemoveType} from "./equipe.type";

@Resolver(() => EquipeType)
export class EquipeResolver {
  constructor(private equipeService: EquipesService) {}


  @Query(() => EquipeType)
  equipe(@Args('id') id: string): Promise<EquipeDto> {
    return this.equipeService.findOne(id);
  }

  @Query(() => [EquipeType])
  equipes() {
    return this.equipeService.findAll();
  }

  @Mutation(() => EquipeType)
  createEquipe(@Args({name: 'equipe', type: () => EquipeCreateType}) equipe: EquipeCreateDto
  ): Promise<EquipeDto> {
    return this.equipeService.create(equipe);
  }

  @Mutation(() => EquipeType)
  updateEquipe(
    @Args({ name: 'equipe', type: () => EquipeUpdateType })
      equipe: EquipeUpdateDto
  ): Promise<EquipeDto> {
    return this.equipeService.update(equipe.id, equipe);
  }

  @Mutation(() => RemoveType)
  deleteEquipe(@Args('id') id: string): Promise<RemoveType> {
    return this.equipeService.remove(id).then(() => {
      return {
        ok: 'true',
      };
    });
  }
}





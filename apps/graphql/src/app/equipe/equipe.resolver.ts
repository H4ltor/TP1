import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import {
  EquipeCreateDto,
  EquipeDto, EquipeResetDto,
  EquipeUpdateDto
} from "../../../../../libs/common/resource/equipe/src/lib/equipe.dto";
import {EquipeEntity} from "../../../../rest-api/src/app/equipes/entities/equipe.entity";
import {EquipesService} from "../../../../rest-api/src/app/equipes/equipes.service";

@Resolver(() => EquipeEntity)
export class EquipeResolver {
  constructor(private readonly equipeService: EquipesService) {}

  @Mutation(() => EquipeEntity)
  createEquipe(
    @Args('createEquipeInput') createEquipeInput: EquipeCreateDto) {
    return this.equipeService.create(createEquipeInput);
  }

  @Query(() => [EquipeEntity], { name: 'equipe' })
  findAll() {
    return this.equipeService.findAll();
  }

  @Query(() => EquipeEntity, { name: 'equipe' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.equipeService.findOne(id);
  }

  @Mutation(() => Equipe)
  updateEquipe(
    @Args('updateEquipeInput') updateEquipeInput: UpdateEquipeInput
  ) {
    return this.equipeService.update(updateEquipeInput.id, updateEquipeInput);
  }

  @Mutation(() => Equipe)
  removeEquipe(@Args('id', { type: () => Int }) id: number) {
    return this.equipeService.remove(id);
  }
}

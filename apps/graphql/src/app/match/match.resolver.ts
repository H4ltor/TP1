import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import {MatchEntity} from "../../../../rest-api/src/app/matches/entities/match.entity";
import {MatchesService} from "../../../../rest-api/src/app/matches/matches.service";
import {MatchCreateDto, MatchUpdateDto} from "../../../../../libs/common/resource/match/src/lib/match.dto";


@Resolver(() => MatchEntity)
export class MatchResolver {
  constructor(private readonly matchService: MatchesService) {
  }

  @Mutation(() => MatchEntity)
  createMatch(@Args('createMatchInput') createMatchInput: MatchCreateDto) {
    return this.matchService.create(createMatchInput);
  }

  @Query(() => [MatchEntity], { name: 'match' })
  findAll() {
    return this.matchService.findAll();
  }

  @Query(() => MatchEntity, { name: 'match' })
  findOne(@Args('id', { type: () => Int }) id: string) {
    return this.matchService.findOne(id);
  }

  @Mutation(() => MatchEntity)
  updateMatch(@Args('updateMatchInput') updateMatchInput: MatchUpdateDto) {
    return this.matchService.update(updateMatchInput.id, updateMatchInput);
  }

  @Mutation(() => MatchEntity)
  removeMatch(@Args('id', { type: () => Int }) id: string) {
    return this.matchService.remove(id);
  }
}
